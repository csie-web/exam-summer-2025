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
  try {
    const subscriptions = await models.Subscription.findAll({
      where: {
        subscriberId: req.user.id
      },
      attributes: ['id'],
      include: [{
        model: models.User,
        as: 'subscribed',
        attributes: ['id', 'username', 'name', 'email']
      }]
    })

    res.status(200).json({ subscriptions })
  } catch (err) {
    next(err)
  }
}

export default {
  subscribe,
  unsubscribe,
  getSubscriptions
} 
