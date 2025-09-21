import EventEmitter from '../../utils/EventEmitter'
import { SERVER } from '../../config/global'

class PostStore {
  constructor() {
    this.posts = []
    this.emitter = new EventEmitter()
  }

  async getPosts(state) {
    try {
      const searchParams = {
        userId: state.currentUser.data.id
      }

      const queryParams = new URLSearchParams(searchParams).toString()

      const response = await fetch(`${SERVER}/api/posts?${queryParams}`, {
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

      this.emitter.emit('POSTS_SEARCH_SUCCESS')
    } catch (err) {
      console.warn('Error searching posts:', err)
      this.emitter.emit('POSTS_SEARCH_ERROR', err)
    }
  }

  async createPost(state, content) {
    try {
      const response = await fetch(`${SERVER}/api/posts`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${state.currentUser.data.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content
        })
      })

      if (!response.ok) {
        throw response
      }

      this.emitter.emit('POST_CREATE_SUCCESS')
    } catch (err) {
      console.warn('Error creating post:', err)
      this.emitter.emit('POST_CREATE_ERROR', err)
    }
  }

  async deletePost(state, postId) {
    try {
      const response = await fetch(`${SERVER}/api/posts/${postId}`, {
        method: 'delete',
        headers: {
          'Authorization': `Bearer ${state.currentUser.data.token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw response
      }

      this.emitter.emit('POST_DELETE_SUCCESS')
    } catch (err) {
      console.warn('Error deleting post:', err)
      this.emitter.emit('POST_DELETE_ERROR', err)
    }
  }

  clearPosts() {
    this.posts = []
    this.emitter.emit('POSTS_CLEARED')
  }
}

export default PostStore 