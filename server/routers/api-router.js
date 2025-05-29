import express from 'express'
import controllers from '../controllers/index.js'
import middleware from '../middleware/index.js'

const apiRouter = express.Router()

apiRouter.use(middleware.auth)

apiRouter.get('/users', controllers.user.suggestUser)

apiRouter.get('/subscriptions', controllers.subscription.getSubscriptions)
apiRouter.post('/subscriptions', controllers.subscription.subscribe)
apiRouter.delete('/subscriptions/:subscriptionId', controllers.subscription.unsubscribe)

export default apiRouter
