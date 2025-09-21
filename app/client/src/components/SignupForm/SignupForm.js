import './SignupForm.css'
import React, { useState, useContext, useEffect } from 'react'
import AppContext from '../../state/AppContext'
import { Link, useLocation, useNavigate } from 'react-router'

const SignupForm = () => {
  const { currentUser } = useContext(AppContext)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const location = useLocation()
  const navigate = useNavigate()

  const mandatoryFields = {
    name,
    username,
    email,
    password
  }

  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  useEffect(() => {
    const registerSuccessSubscription = currentUser.emitter.addListener('REGISTER_SUCCESS', () => {
      navigate(location.state?.from || '/login')
    })

    return () => {
      registerSuccessSubscription.remove()
    }
  }, [])

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }

    Object.entries(mandatoryFields).forEach(([field, value]) => {
      const valueToCheck = field === 'password' ? value : value.trim()
      if (!valueToCheck) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
        isValid = false
      }
    })

    if (email && !(email.includes('@') && email.includes('.'))) {
      newErrors.email = 'Invalid email'
      isValid = false
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
      isValid = false
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSignupClick = () => {
    if (validateForm()) {
      currentUser.register(name, username, email, password)
    }
  }

  return (
    <div className='signup-form'>
      <div className='signup-form-container'>
        <h1>Sign Up</h1>

        <div className="input-group">
          <input
            type='text'
            placeholder='name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        <div className="input-group">
          <input
            type='text'
            placeholder='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          {errors.username && <div className="error-message">{errors.username}</div>}
        </div>

        <div className="input-group">
          <input
            type='text'
            placeholder='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div className="input-group">
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>

        <div className="input-group">
          <input
            type='password'
            placeholder='confirm password'
            value={confirmPassword}
            onKeyUp={e => {
              if (e.key === 'Enter') {
                handleSignupClick()
              }
            }}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
        </div>

        <button onClick={handleSignupClick}>Sign Up</button>

        <Link to='/login'>Already have an account? Login</Link>
      </div>
    </div>
  )
}

export default SignupForm 