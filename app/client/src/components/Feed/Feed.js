import React, { useState, useContext, useEffect } from 'react'
import './Feed.css'
import PostCardList from '../PostCardList'
import AppContext from '../../state/AppContext'

const Feed = () => {
  const globalState = useContext(AppContext)
  const [postData, setPostData] = useState([])

  useEffect(() => {
    const feedSuccessListener = globalState.feedPosts.emitter.addListener('FEED_SEARCH_SUCCESS', () => {
      setPostData(globalState.feedPosts.posts)
    })

    globalState.feedPosts.getFeedPosts(globalState)

    return () => {
      feedSuccessListener.remove()
      globalState.feedPosts.clearPosts()
    }
  }, [])

  return (
    <div className="feed-container">
      <div className="page-title">
        <h2>Feed</h2>
        <p>check out world's latest news</p>
      </div>

      <PostCardList data={postData} shouldDisplayDelete={false} />
    </div>
  )
}

export default Feed 