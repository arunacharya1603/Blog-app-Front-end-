import React from 'react'
import { Link } from 'react-router-dom'

const DeletePost = () => {
  return (
    <section className='center'>
      <Link to="/" className='btn primary'>Go Back Home, Your Post Has been deleted succesfully!</Link>
    </section>
  )
}

export default DeletePost
