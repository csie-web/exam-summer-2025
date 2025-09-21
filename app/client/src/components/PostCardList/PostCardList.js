import React from 'react'
import PostCard from './PostCard/PostCard'
import './PostCardList.css'

const PostCardList = ({ data = [], shouldDisplayDelete = false }) => {
  return (
    <div className="post-card-list">
      {data.length === 0 ? (
        <p className="no-results">No posts available</p>
      ) : (
        data.map((item, index) => (
          <PostCard
            key={index}
            item={item}
            shouldDisplayDelete={shouldDisplayDelete}
          />
        ))
      )}
    </div>
  )
}

export default PostCardList 