import './Notificator.css'
import React, { useEffect, useState, useContext } from 'react'
import AppContext from '../../state/AppContext'

const Notificator = () => {
  const globalState = useContext(AppContext)
  const [message, setMessage] = useState('')
  const [_, setIsVisible] = useState(false)

  useEffect(() => {
    globalState.currentUser.emitter.addListener('LOGIN_ERROR', () => {
      setMessage('LOGIN_ERROR')
    })
    globalState.currentUser.emitter.addListener('LOGOUT_ERROR', () => {
      setMessage('LOGOUT_ERROR')
    })
    globalState.currentUser.emitter.addListener('REGISTER_ERROR', () => {
      setMessage('REGISTER_ERROR')
    })
    globalState.currentUser.emitter.addListener('REGISTER_SUCCESS', () => {
      setMessage('REGISTER_SUCCESS')
    })
  }, [])

  useEffect(() => {
    if (message) {
      setIsVisible(true)

      setTimeout(() => {
        setIsVisible(false)
        setMessage('')
      }, 5000)
    }
  }, [message])

  return (
    <div className={'error-display' + (message ? ' visible' : '')}>
      <div>Message: {message}</div>
    </div>
  )
}

export default Notificator
