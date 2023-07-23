import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Post from './Post'
import IndexPages from '../Pages/IndexPages'

const Layout = () => {
  return (
    <main>
        <Header/>
        
        <Outlet/>
    </main>
  )
}

export default Layout
