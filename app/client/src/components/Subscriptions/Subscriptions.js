import React, { useState, useContext, useEffect } from 'react'
import './Subscriptions.css'
import UserCardList from '../UserCardList'
import AppContext from '../../state/AppContext'
import Paginator from '../Paginator/Paginator'

const Subscriptions = () => {
  const globalState = useContext(AppContext)

  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState('ASC')
  const [pageSize, setPageSize] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)

  const [subscriptionData, setSubscriptionData] = useState([])
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    const searchSuccessListener = globalState.subscriptions.emitter.addListener('SUBSCRIPTION_SEARCH_SUCCESS', () => {
      setSubscriptionData(globalState.subscriptions.subscriptions)
      setTotalCount(globalState.subscriptions.totalCount)
    })

    return () => {
      searchSuccessListener.remove()
      globalState.subscriptions.clearSubscriptions()
    }
  }, [])

  useEffect(() => {
    const subscriptionSuccessListener = globalState.subscriptions.emitter.addListener('SUBSCRIPTION_UPDATE_SUCCESS', () => {
      handleSearch()
    })

    return () => {
      subscriptionSuccessListener.remove()
    }
  }, [handleSearch])

  useEffect(() => {
    handleSearch()
  }, [searchTerm, currentPage, pageSize, sortBy, sortOrder])

  function handleSearch() {
    globalState.subscriptions.getSubscriptions(globalState, searchTerm, currentPage, pageSize, sortBy, sortOrder)
  }

  function handlePageChange(newPage) {
    setCurrentPage(newPage)
  }

  function handlePageSizeChange(newSize) {
    setPageSize(newSize)
  }

  return (
    <div className="subscriptions-container">
      <div className="page-title">
        <h2>Subscriptions</h2>
        <p>who are you listening to?</p>
      </div>
      <div className="subscription-controls">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="subscription-input"
        />

        <div className="subscription-options">
          <div className="option-group">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="name">Name</option>
              <option value="email">Email</option>
            </select>
          </div>

          <div className="option-group">
            <label>Order:</label>
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="ASC">Ascending</option>
              <option value="DESC">Descending</option>
            </select>
          </div>
        </div>
      </div>

      <UserCardList
        data={subscriptionData.map((subscription, index) => ({
          ...subscription.subscribed,
          subscription: subscription.id
        }))}
      />

      <Paginator
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        totalRecords={totalCount}
      />
    </div>
  )
}

export default Subscriptions
