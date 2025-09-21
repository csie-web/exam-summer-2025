import EventEmitter from '../../utils/EventEmitter'
import { SERVER } from '../../config/global'

class FeedStore {
  constructor() {
    this.posts = []
    this.emitter = new EventEmitter()
  }

  async getFeedPosts(state) {
    try {
      const response = await fetch(`${SERVER}/api/posts`, {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${state.currentUser.data.token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw response
      }

      this.posts = await response.json()

      this.emitter.emit('FEED_SEARCH_SUCCESS')
    } catch (err) {
      console.warn('Error fetching feed posts:', err)
      this.emitter.emit('FEED_SEARCH_ERROR', err)
    }
  }

  clearPosts() {
    this.posts = []
    this.emitter.emit('FEED_CLEARED')
  }
}

export default FeedStore 