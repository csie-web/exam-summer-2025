import EventEmitter from '../../utils/EventEmitter'
import { SERVER } from '../../config/global'

class UserSearchStore {
  constructor() {
    this.users = []
    this.totalCount = 0
    this.emitter = new EventEmitter()
  }

  async searchUsers(state, partial, page, pageSize, sortBy, sortOrder) {
    try {
      const searchParams = {
        page,
        pageSize,
        sortBy,
        sortOrder,
        ...(partial ? { partial } : {})
      }

      const queryParams = new URLSearchParams(searchParams).toString()

      const response = await fetch(`${SERVER}/api/users?${queryParams}`, {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${state.currentUser.data.token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw response
      }

      const { data, count } = await response.json()
      this.users = data
      this.totalCount = count

      this.emitter.emit('USERS_SEARCH_SUCCESS')
    } catch (err) {
      console.warn('Error searching users:', err)
      this.emitter.emit('USERS_SEARCH_ERROR', err)
    }
  }

  clearUsers() {
    this.users = []
    this.totalCount = 0
    this.emitter.emit('USERS_CLEARED')
  }
}

export default UserSearchStore 