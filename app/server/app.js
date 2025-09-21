import express from 'express'
import routers from './routers/index.js'
import middleware from './middleware/index.js'
import cors from 'cors'
import authMiddleware from './middleware/auth-middleware.js'
const app = express()

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())

app.use('/auth', routers.auth)
app.use('/api', authMiddleware, routers.api)

app.use(middleware.genericError)

export default app
