import { Op } from 'sequelize'
import models from '../models/index.js'

const suggestUser = async (req, res, next) => {
  try {
    const { partial = '', page = 1, pageSize = 5, sortBy = 'username', sortOrder = 'ASC' } = req.query

    const whereClause = {
      id: { [Op.ne]: req.user.id }
    }

    if (partial) {
      whereClause[Op.or] = [
        { username: { [Op.like]: `%${partial}%` } },
        { email: { [Op.like]: `%${partial}%` } }
      ]
    }

    const userData = await models.User.findAll({
      where: whereClause,
      attributes: ['id', 'username', 'name', 'email'],
      include: [
        {
          model: models.Subscription,
          as: 'subscribers',
          required: false,
          where: { subscriberId: req.user.id },
          attributes: ['id']
        }
      ],
      limit: parseInt(pageSize),
      offset: (parseInt(page) - 1) * parseInt(pageSize),
      order: [[sortBy, sortOrder]]
    })

    const userWithSubscriptionStatus = userData.map(user => {
      return {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        subscription: user.subscribers.length > 0 ? user.subscribers[0].id : null
      }
    })

    const data = userWithSubscriptionStatus
    const count = await models.User.count({ where: whereClause })

    res.status(200).json({ data, count })
  } catch (err) {
    next(err)
  }
}

export default {
  suggestUser
}
