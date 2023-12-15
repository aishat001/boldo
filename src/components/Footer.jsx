import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' bg-[white]'>
      <div className='xl:max-w-[1200px] pt-[100px] md:pb-[124px] px-5  sm:px-10 lg:px-[100px] xl:px-[0] w-full grid grid-cols-1 sm:grid-cols-1  md:grid-cols-4  mx-auto gap-[30px] xl:gap-10  md:justify-items-center items-start'>

        <div className='flex flex-col gap-[40px] '>
          <img src={logo} alt='logo' className='w-[120px] md:w-[162px]' />

          <p className='text-[#777777] max-w-[400px] lg:min-w-[300px] animate-on-scroll'>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>

          <p className='text-[#777777] hidden md:flex animate-on-scroll'>All rights reserved.</p>
        </div>

        <div className='flex flex-col gap-[20px] w-[min-content] animate-on-scroll'>
          <h6 className='text-[#000000] text-[20px] font-[700]'>Landings</h6>

          <Link to={'/product'} className='text-[#777777]'>Home</Link>
          <Link to={'/product'} className='text-[#777777]'>Products</Link>
          <Link to={'/product'} className='text-[#777777]'>Services</Link>

        </div>

        <div className='flex flex-col gap-[20px] w-[min-content]  animate-on-scroll'>
          <h6 className='text-[#000000] text-[20px] font-[700]'>Company</h6>

          <Link to={'/product'} className='text-[#777777]'>Home</Link>
          <Link to={'/product'} className='text-[#777777]'>Careers</Link>
          <Link to={'/product'} className='text-[#777777]'>Services</Link>

        </div>

        <div className='flex flex-col gap-[20px] w-[min-content]  animate-on-scroll'>
          <h6 className='text-[#000000] text-[20px] font-[700]'>Resources</h6>

          <Link to={'/product'} className='text-[#777777]'>Blog</Link>
          <Link to={'/product'} className='text-[#777777]'>Products</Link>
          <Link to={'/product'} className='text-[#777777]'>Services</Link>

        </div>



      </div>

      <p className='text-[#777777] px-5 pb-[50px] pt-[50px] md:hidden animate-on-scroll'>All rights reserved.</p>

    </div>
  )
}

export default Footer