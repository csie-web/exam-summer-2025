import React, { useContext } from 'react'
import './UserCard.css'
import AppContext from '../../../state/AppContext'
import { AVATAR_URL } from '../../../config/global'

const UserCard = ({ item }) => {
  const globalState = useContext(AppContext)

  const handleSubscribe = () => {
    if (item.subscription) {
      globalState.subscriptions.unsubscribe(globalState, item.subscription)
    } else {
      globalState.subscriptions.subscribe(globalState, item.id)
    }
  }

  return (
    <div className="user-card">
      <div className="avatar-container">
        <img
          src={AVATAR_URL}
          alt="Avatar"
          className="avatar-image"
        />
      </div>
      <div className="content-container">
        <div className="user-content">
          <p>Name: {item.name}</p>
          <p>Username: {item.username}</p>
          <p>Email: {item.email}</p>
        </div>
        {Object.hasOwn(item, 'subscription') && (
          <button className={`subscribe-button ${item.subscription ? 'subscribed' : ''}`}
            onClick={handleSubscribe}
          >
            {item.subscription ? 'Unsubscribe' : 'Subscribe'}
          </button>
        )}
      </div>
    </div>
  )
}

export default UserCard 