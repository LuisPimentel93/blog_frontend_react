import React from 'react'

const SignupPage = () => {
  return (
    <form className='signup'>
        <h1>SignUp</h1>
        <input type='text' placeholder='Username'/>
        <input type='email' placeholder='Email'/>
        <input type='text' placeholder='First name'/>
        <input type='text' placeholder='Last name'/>
        <input type='password' placeholder='Password'/>
        <button>Signup</button>
    </form>
  )
}
export default SignupPage



