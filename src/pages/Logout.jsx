import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Logout = () => {
  const [userData, setUserData] = useState({
    
    email: '',
    password: '',
   
   })

   const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
   }



  return (
    <section className='login'>
      <div className="container">
        <h2>You have  successfully logged out, please login to continue</h2>
        <h2>Sign In</h2>
        <form className='form login__form'>
          <p className='form__error-message'>This is an error message</p>
          <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} />
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} />

          <button type="submit" className='btn primary'>
            <Link to={`/profile/sdfsdf`}>Login</Link>
          </button>
        </form>
        <small>Don't have an account? <Link to='/register'>Sign up</Link> </small>
      </div>
    </section>
  )
}

export default Logout
