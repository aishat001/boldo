import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <div className=' min-h-[100vh] w-full '>
            <Header />
            <div className='main w-full '>
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}

export default Layout