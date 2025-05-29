import React, { useState, useContext, useEffect } from 'react'
import './Subscriptions.css'
import UserCardList from '../UserCardList'
import AppContext from '../../state/AppContext'

const Subscriptions = () => {
  const globalState = useContext(AppContext)

  const [subscriptionData, setSubscriptionData] = useState([])

  useEffect(() => {
    const searchSuccessListener = globalState.subscriptions.emitter.addListener('SUBSCRIPTION_SEARCH_SUCCESS', () => {
      setSubscriptionData(globalState.subscriptions.subscriptions)
    })

    return () => {
      searchSuccessListener.remove()
      globalState.subscriptions.clearSubscriptions()
    }
  }, [])

  useEffect(() => {
    globalState.subscriptions.getSubscriptions(globalState)
  }, [])

  return (
    <div className="subscriptions-container">
      <div className="page-title">
        <h2>Subscriptions</h2>
        <p>who are you listening to?</p>
      </div>
      <UserCardList
        data={subscriptionData.map((subscription, index) => ({
          ...subscription.subscribed,
        }))}
      />
    </div>
  )
}

export default Subscriptions
