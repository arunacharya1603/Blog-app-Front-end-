import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='error-page'>
      <div className="center">
        <Link to="/" className='btn primary'>Go Back Home, You are on a <span>wrong</span> Track</Link>
        <h2>Oops! Page not found.</h2>
      </div>
    </section>
  )
}

export default ErrorPage
