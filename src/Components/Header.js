import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    // const URL = `${process.env.REACT_APP_BACKEND_URI}/profile`
    const [username, setUsername] = useState('')
   
    useEffect(() => {
        fetch('http://localhost:8080/profile', {
            credentials: 'include'
        }). then(response => {
            response.json().then(profiles => {
                setUsername(profiles.username)
            })
        })
    }, [])
  return (
    <header>
        <Link to='/' className='logo'>CodeBook Blog</Link> 
        <nav>
            {username && (
                <>
                    <Link to='/create'>Create new post</Link>
                </>
            )}
            {!username && (
                <>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>  
                
                </>
            )

            }   


        </nav> 
  </header>
  )
}

export default Header
