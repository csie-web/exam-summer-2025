import './LoginForm.css'
import React, { useState, useContext, useEffect } from 'react'
import AppContext from '../../state/AppContext'
import { Link, useLocation, useNavigate } from 'react-router'

const LoginForm = () => {
  const { currentUser } = useContext(AppContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const handleLoginClick = () => {
    currentUser.login(username, password)
  }

  useEffect(() => {
    const loginSuccessSubscription = currentUser.emitter.addListener('LOGIN_SUCCESS', () => {
      navigate(location.state?.from || '/')
    })

    return () => {
      loginSuccessSubscription.remove()
    }
  }, [])

  return (
    <div className='login-form'>
      <div className='login-form-container'>
        <h1>Login</h1>
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onKeyUp={e => {
            if (e.key === 'Enter') {
              handleLoginClick()
            }
          }}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLoginClick}>Login</button>
        <Link to='/signup'>Don't have account? Create one</Link>
      </div>
    </div>
  )
}

export default LoginForm
