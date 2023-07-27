import React, { useContext, useEffect, } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'

const Header = () => {
   
   const {setUserInfo, userInfo} = useContext(UserContext)


   
    useEffect(() => {
        fetch('http://localhost:8080/profiles/profile',{
            credentials: 'include'
        }). then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
            })
        })
    }, [setUserInfo,])

    function logout(){
        fetch('http://localhost:8080/profiles/logout', {
            credentials: 'include',
            method: 'POST',
            
        });
        setUserInfo(null)
    }

    const username = userInfo?.username
  return (
    <header>
        <Link to='/' className='logo'>CodeBook Blog</Link> 
        <nav>
            {username && (
                <>
                    <Link to='/create'>Create new post</Link>
                    <Link onClick={logout} to='/login'>Logout</Link>
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
