import './Dashboard.css'
import React, { useContext } from 'react'
import { Link, useLocation, Routes, Route } from 'react-router'
import AppContext from '../../state/AppContext'

import Search from '../Search'
import Subscriptions from '../Subscriptions'
import Posts from '../Posts'
import Feed from '../Feed'

const Dashboard = () => {
  const { currentUser } = useContext(AppContext)
  const location = useLocation()

  return (
    <div className='dashboard-container'>
      <div className='sidebar'>
        <div className='sidebar-header'>
          <h3>Hello, {currentUser.data.name}</h3>
        </div>

        <div className='sidebar-nav'>
          <Link
            to='/'
            className={location.pathname === '/' ? 'active-link' : ''}
          >
            Feed
          </Link>
          <Link
            to='/posts'
            className={location.pathname === '/posts' ? 'active-link' : ''}
          >
            Posts
          </Link>
          <Link
            to='/search'
            className={location.pathname === '/search' ? 'active-link' : ''}
          >
            Search
          </Link>
          <Link
            to='/subscriptions'
            className={location.pathname === '/subscriptions' ? 'active-link' : ''}
          >
            Subscriptions
          </Link>
        </div>

        <div className='sidebar-footer'>
          <button onClick={() => currentUser.logout()}>
            Logout
          </button>
        </div>
      </div>

      <div className='content'>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/search" element={<Search />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard
