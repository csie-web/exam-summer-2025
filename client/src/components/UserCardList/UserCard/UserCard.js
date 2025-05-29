import React, { useContext } from 'react'
import './UserCard.css'
import AppContext from '../../../state/AppContext'

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
          src={"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}
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