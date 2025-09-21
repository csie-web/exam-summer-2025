import React, { useState, useContext, useEffect } from 'react'
import './Posts.css'
import PostCardList from '../PostCardList/PostCardList'
import AppContext from '../../state/AppContext'

const Posts = () => {
  const globalState = useContext(AppContext)
  const [postData, setPostData] = useState([])
  const [newPostContent, setNewPostContent] = useState('')

  useEffect(() => {
    const postsSuccessListener = globalState.posts.emitter.addListener('POSTS_SEARCH_SUCCESS', () => {
      setPostData(globalState.posts.posts)
    })

    const createSuccessListener = globalState.posts.emitter.addListener('POST_CREATE_SUCCESS', () => {
      globalState.posts.getPosts(globalState)
      setNewPostContent('')
    })

    const deleteSuccessListener = globalState.posts.emitter.addListener('POST_DELETE_SUCCESS', () => {
      globalState.posts.getPosts(globalState)
    })

    globalState.posts.getPosts(globalState)

    return () => {
      postsSuccessListener.remove()
      createSuccessListener.remove()
      deleteSuccessListener.remove()
      globalState.posts.clearPosts()
    }
  }, [])

  const handleCreatePost = () => {
    if (newPostContent.trim()) {
      globalState.posts.createPost(globalState, newPostContent)
    }
  }

  return (
    <div className="posts-container">
      <div className="page-title">
        <h2>Posts</h2>
        <p>organize your posts</p>
      </div>

      <div className="create-post-section">
        <textarea
          placeholder="What's on your mind?"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          className="post-textarea"
        />
        <button
          className="post-button"
          onClick={handleCreatePost}
          disabled={!newPostContent.trim()}
        >
          Post!
        </button>
      </div>
      <PostCardList
        data={postData}
        shouldDisplayDelete={true}
      />
    </div>
  )
}

export default Posts