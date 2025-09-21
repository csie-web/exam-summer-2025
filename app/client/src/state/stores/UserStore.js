import EventEmitter from '../../utils/EventEmitter'
import { SERVER } from '../../config/global'

class UserStore {
  constructor() {
    this.data = {}
    this.emitter = new EventEmitter()
  }

  async register(name, username, email, password) {
    try {
      const response = await fetch(`${SERVER}/auth/register`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password
        })
      })

      if (!response.ok) {
        throw response
      }

      this.emitter.emit('REGISTER_SUCCESS')
    } catch (err) {
      this.emitter.emit('REGISTER_ERROR')
    }
  }

  async login(username, password) {
    try {
      const response = await fetch(`${SERVER}/auth/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      })

      if (!response.ok) {
        throw response
      }

      this.data = await response.json()
      this.emitter.emit('LOGIN_SUCCESS')
    } catch (err) {
      console.warn(err)
      this.emitter.emit('LOGIN_ERROR')
    }
  }

  rememberMe() {
    const userData = localStorage.getItem('userData')
    if (userData) {
      this.data = JSON.parse(userData)
      this.emitter.emit('LOGIN_SUCCESS')
    }
  }

  async logout() {
    try {
      const response = await fetch(`${SERVER}/auth/logout`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: this.data.token
        })
      })

      if (!response.ok) {
        throw response
      }

      this.data = {}
      this.emitter.emit('LOGOUT_SUCCESS')
    } catch (err) {
      console.warn(err)
      this.emitter.emit('LOGOUT_ERROR')
    }
  }
}

export default UserStore
