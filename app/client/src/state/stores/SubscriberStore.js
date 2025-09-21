import EventEmitter from '../../utils/EventEmitter'
import { SERVER } from '../../config/global'

class SubscriberStore {
  constructor() {
    this.emitter = new EventEmitter()
    this.subscribers = []
  }

  async getSubscribers(state) {
    try {
      const response = await fetch(`${SERVER}/api/subscribers`, {
        headers: {
          'Authorization': `Bearer ${state.currentUser.data.token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw response
      }

      const subscribersData = await response.json()
      this.subscribers = subscribersData.subscribers

      this.emitter.emit('SUBSCRIBER_SEARCH_SUCCESS')
    } catch (err) {
      console.warn('Error getting subscribers:', err)
      this.emitter.emit('SUBSCRIBER_SEARCH_ERROR', err)
    }
  }

  clearSubscribers() {
    this.subscribers = []
    this.emitter.emit('SUBSCRIBER_CLEARED')
  }
}

export default SubscriberStore 
