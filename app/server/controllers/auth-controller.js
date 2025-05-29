import bcrypt from 'bcrypt'
import models from '../models/index.js'
import jwt from 'jsonwebtoken'
import { Op } from 'sequelize'

const login = async (req, res, next) => {
  try {
    const user = await models.User.findOne({
      where: {
        username: req.body.username
      }
    })

    if (user) {
      const isPasswordValid = await bcrypt.compare(req.body.password, user.passwordHash)

      if (isPasswordValid) {
        if (!user.token) {
          user.token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
          await user.save()
        }

        res.status(200).json({ token: user.token, username: user.username, id: user.id, type: user.type, email: user.email, name: user.name })
      } else {
        res.status(401).json({ message: 'Invalid username or password' })
      }
    } else {
      res.status(401).json({ message: 'Invalid username or password' })
    }
  } catch (err) {
    next(err)
  }
}

const logout = async (req, res, next) => {
  try {
    const user = await models.User.findOne({
      where: {
        token: req.body.token
      }
    })

    if (user) {
      user.token = ''
      await user.save()
      res.status(200).json({ message: 'User logged out' })
    } else {
      res.status(401).json({ message: 'Invalid token' })
    }
  } catch (err) {
    next(err)
  }
}

const register = async (req, res, next) => {
  try {
    const existingUser = await models.User.findOne({
      where: {
        [Op.or]: {
          username: req.body.username,
          email: req.body.email
        }
      }
    })

    if (existingUser) {
      const field = existingUser.username === req.body.username ? 'username' : 'email'
      return res.status(400).json({ message: `An user with this ${field} already exists` })
    }

    const user = await models.User.create({
      username: req.body.username,
      email: req.body.email,
      name: req.body.name,
      passwordHash: await bcrypt.hash(req.body.password, 10)
    })

    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
}

export default {
  login,
  logout,
  register
}
