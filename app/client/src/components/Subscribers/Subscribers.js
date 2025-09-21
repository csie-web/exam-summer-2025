import React, { useState, useContext, useEffect } from 'react'
import './Subscribers.css'
import UserCardList from '../UserCardList'
import AppContext from '../../state/AppContext'

const Subscribers = () => {
  const globalState = useContext(AppContext)

  const [subscriberData, setSubscribersData] = useState([])

  useEffect(() => {
    const searchSuccessListener = globalState.subscribers.emitter.addListener('SUBSCRIBER_SEARCH_SUCCESS', () => {
      setSubscribersData(globalState.subscribers.subscribers)
    })

    return () => {
      searchSuccessListener.remove()
      globalState.subscribers.clearSubscribers()
    }
  }, [])

  useEffect(() => {
    globalState.subscribers.getSubscribers(globalState)
  }, [])

  return (
    <div className="subscribers-container">
      <div className="page-title">
        <h2>Subscribers</h2>
        <p>who's watching you?</p>
      </div>
      <UserCardList
        data={subscriberData.map((subscriber, index) => ({
          ...subscriber.subscriber,
        }))}
      />
    </div>
  )
}

export default Subscribers
