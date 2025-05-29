import './App.css'
import React, { useState, useEffect, useRef } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router'
import AppContext from '../../state/AppContext'

import AuthGuard from '../AuthGuard'
import LoginForm from '../LoginForm'
import Dashboard from '../Dashboard'
import SignupForm from '../SignupForm'

import UserStore from '../../state/stores/UserStore'
import UserSearchStore from '../../state/stores/UserSearchStore'
import SubscriptionStore from '../../state/stores/SubscriptionStore'
import Notificator from '../Notificator'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAuthChecked, setIsAuthChecked] = useState(false)
  const userStore = useRef(new UserStore())
  const userSearchStore = useRef(new UserSearchStore())
  const subscriptionStore = useRef(new SubscriptionStore())

  useEffect(() => {
    const loginSuccessSubscription = userStore.current.emitter.addListener('LOGIN_SUCCESS', () => {
      localStorage.setItem('userData', JSON.stringify(userStore.current.data))
      setIsAuthenticated(true)
    })

    const logoutSuccessSubscription = userStore.current.emitter.addListener('LOGOUT_SUCCESS', () => {
      localStorage.removeItem('userData')
      setIsAuthenticated(false)
    })

    userStore.current.rememberMe()

    setIsAuthChecked(true)

    return () => {
      loginSuccessSubscription.remove()
      logoutSuccessSubscription.remove()
    }
  }, [])

  if (!isAuthChecked) {
    return null
  }

  return (
    <AppContext.Provider value={{
      currentUser: userStore.current,
      users: userSearchStore.current,
      subscriptions: subscriptionStore.current
    }}
    >
      <Notificator />
      <Router>
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route
            path='/*' element={
              <AuthGuard isAuthenticated={isAuthenticated}>
                <Dashboard />
              </AuthGuard>
            }
          />
        </Routes>
      </Router>
    </AppContext.Provider>
  )
}

export default App
