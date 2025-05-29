import express from 'express'
import controllers from '../controllers/index.js'

const authRouter = express.Router()

authRouter.post('/register', controllers.auth.register)
authRouter.post('/login', controllers.auth.login)
authRouter.post('/logout', controllers.auth.logout)

export default authRouter
