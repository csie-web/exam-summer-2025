import { Op } from 'sequelize'
import models from '../models/index.js'

const subscribe = async (req, res, next) => {
  try {
    const subscribedId = req.body.userId
    const subscriberId = req.user.id

    if (subscribedId === subscriberId) {
      return res.status(400).json({ message: 'You cannot subscribe to yourself' })
    }

    const userExists = await models.User.findByPk(subscribedId)
    if (!userExists) {
      return res.status(404).json({ message: 'User not found' })
    }

    const existingSubscription = await models.Subscription.findOne({
      where: {
        subscriberId: subscriberId,
        subscribedId: subscribedId
      }
    })

    if (existingSubscription) {
      return res.status(400).json({ message: 'Already subscribed to this user' })
    }

    await models.Subscription.create({
      subscriberId: subscriberId,
      subscribedId: subscribedId
    })

    res.status(201).json({ message: 'Subscription created successfully' })
  } catch (err) {
    next(err)
  }
}

const unsubscribe = async (req, res, next) => {
  try {
    const subscriptionId = req.params.subscriptionId

    await models.Subscription.destroy({
      where: {
        id: subscriptionId,
        subscriberId: req.user.id
      }
    })

    res.status(200).json({ message: 'Unsubscribed successfully' })
  } catch (err) {
    next(err)
  }
}

const getSubscriptions = async (req, res, next) => {
  const { partial = '', page = 1, pageSize = 5, sortBy = 'name', sortOrder = 'ASC' } = req.query

  const whereClause = {}

  if (partial) {
    whereClause[Op.or] = [
      { name: { [Op.like]: `%${partial}%` } },
      { email: { [Op.like]: `%${partial}%` } }
    ]
  }
  try {
    const data = await models.Subscription.findAll({
      where: {
        subscriberId: req.user.id
      },
      attributes: ['id'],
      include: [{
        model: models.User,
        as: 'subscribed',
        attributes: ['id', 'username', 'name', 'email'],
        where: whereClause
      }],
      limit: parseInt(pageSize),
      offset: (parseInt(page) - 1) * parseInt(pageSize),
      order: [['subscribed', sortBy, sortOrder]]
    })

    const count = await models.Subscription.count({
      where: {
        subscriberId: req.user.id
      },
      include: [{
        model: models.User,
        as: 'subscribed',
        where: whereClause
      }]
    })

    res.status(200).json({ data, count })
  } catch (err) {
    next(err)
  }
}

export default {
  subscribe,
  unsubscribe,
  getSubscriptions
} 
