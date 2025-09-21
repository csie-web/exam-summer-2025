import models from '../models/index.js'

const getSubscribers = async (req, res, next) => {
  try {
    const subscribers = await models.Subscription.findAll({
      where: {
        subscribedId: req.user.id
      },
      attributes: ['id'],
      include: [{
        model: models.User,
        as: 'subscriber',
        attributes: ['id', 'username', 'name', 'email']
      }]
    })

    res.status(200).json({ subscribers });
  } catch (err) {
    next(err)
  }
}

export default {
  getSubscribers
} 
