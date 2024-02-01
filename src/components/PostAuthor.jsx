import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/avatar1.jpg'

const PostAuthors = () => {
  return (
    <Link to={`/posts/users/sdfs`}  className='post__author'>
        <div className="post__author-avatar">
            <img src={Avatar} alt="" />
        </div>
        <div className="post__author-details">
            <h5>By: Arun Acharya</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthors
