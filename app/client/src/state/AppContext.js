import { createContext } from 'react'

export default createContext({
  currentUser: null,
  users: null,
  subscriptions: null,
  subscribers: null,
  posts: null,
  feedPosts: null
})
