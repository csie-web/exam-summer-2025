import React from 'react'
import './UserCardList.css'
import UserCard from './UserCard/UserCard'

const UserCardList = ({ data = [] }) => {
  return (
    <div className="user-card-list">
      {data.length === 0 ? (
        <p className="no-results">Looking for someone?</p>
      ) : (
        data.map((item, index) => (
          <UserCard
            key={index}
            item={item}
          />
        ))
      )}
    </div>
  )
}

export default UserCardList 