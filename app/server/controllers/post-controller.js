import { Op } from 'sequelize'
import models from '../models/index.js'

const getPosts = async (req, res, next) => {
    try {
        const selectClause = {
            order: [
                ['createdAt', 'DESC']
            ]
        }

        if (req.query.userId) {
            selectClause.include = [
                {
                    model: models.User,
                    as: 'user',
                    attributes: ['username'],
                    where: {
                        id: req.query.userId
                    }
                }
            ]
        } else {
            const subscribedUsers = await models.Subscription.findAll({
                where: { subscriberId: req.user.id },
                attributes: ['subscribedId']
            })

            selectClause.include = [
                {
                    model: models.User,
                    as: 'user',
                    attributes: ['username'],
                    where: {
                        id: {
                            [Op.in]: subscribedUsers.map(user => user.subscribedId)
                        }
                    }
                }
            ]
        }

        const posts = await models.Post.findAll(selectClause)

        res.status(200).json(posts)
    } catch (err) {
        next(err)
    }
}

const createPost = async (req, res, next) => {
    try {
        const { content } = req.body

        if (!content || content.trim() === '' || content.length > 500) {
            return res.status(400).json({ message: 'Post content cannot be empty or exceed 500 characters' })
        }

        const post = await models.Post.create({
            content,
            userId: req.user.id
        })

        res.status(201).json(post)
    } catch (err) {
        next(err)
    }
}

const deletePost = async (req, res, next) => {
    try {
        const post = await models.Post.findOne({ where: { id: req.params.postId, userId: req.user.id } })

        if (!post) {
            return res.status(404).json({ message: 'Post not found or not owned' })
        }

        await post.destroy()

        res.status(200).json({ message: 'Post deleted successfully' })
    } catch (err) {
        next(err)
    }
}

export default {
    getPosts,
    createPost,
    deletePost
}
