import React, { useState, useContext, useEffect, useRef } from 'react'
import './Search.css'
import Paginator from '../Paginator/Paginator'
import UserCardList from '../UserCardList'
import AppContext from '../../state/AppContext'

const Search = () => {
  const globalState = useContext(AppContext)

  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('username')
  const [sortOrder, setSortOrder] = useState('ASC')
  const [pageSize, setPageSize] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)

  const [userData, setUserData] = useState([])
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    const searchSuccessListener = globalState.users.emitter.addListener('USERS_SEARCH_SUCCESS', () => {
      setTotalCount(globalState.users.totalCount)
      setUserData(globalState.users.users)
    })

    return () => {
      searchSuccessListener.remove()
      globalState.users.clearUsers()
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
    globalState.users.searchUsers(globalState, searchTerm, currentPage, pageSize, sortBy, sortOrder)
  }

  function handlePageChange(newPage) {
    setCurrentPage(newPage)
  }

  function handlePageSizeChange(newSize) {
    setPageSize(newSize)
  }

  return (
    <div className="search-container">
      <div className="page-title">
        <h2>Search</h2>
        <p>connect with other people.</p>
      </div>
      <div className="search-controls">
        <input
          type="text"
          placeholder="Search by username or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="search-options">
          <div className="option-group">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="username">Username</option>
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
        data={userData || []}
      />

      <Paginator
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        totalRecords={totalCount}
      />
    </div>
  )
}

export default Search 