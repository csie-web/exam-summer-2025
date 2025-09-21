import { createContext } from 'react'

export default createContext({
  currentUser: null,
  users: null,
  subscriptions: null,
  posts: null,
  feedPosts: null
})
