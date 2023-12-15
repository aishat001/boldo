import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <div className=' min-h-[100vh] w-full '>
            <Header />
            <div className='main w-full min-h-[calc(100vh-440px)]'>
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}

export default Layout