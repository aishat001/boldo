import React, { useState } from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancel } from "react-icons/md";


const Header = () => {
    const [openSideBar, setOpenSideBar] = useState(false)
    return (
        <div className=''>
            <div className='w-full xl:max-w-[1200px] mx-auto flex items-center left-0 right-0  absolute bg-transparent px-5 sm:px-10   lg:px-[100px] xl:p-[0px] top-[56px]'>
                <img src={logo} alt='logo' className='w-[120px] md:w-[162px]'/>

                <div className='ml-auto gap-[40px] items-center font-[600] hidden md:flex'>
                    <Link to={'/product'} >Product</Link>
                    <Link to={'/service'} >Services</Link>
                    <Link to={'/about'} >About</Link>
                    <Link to={'/login'} className='border-2 px-[40px] py-[8px] rounded-[24px] flex gap-[8px] border-[#0A2640]'>Log in</Link>
                </div>

                {/* mobile side bar */}
                <div className='flex md:hidden ml-auto'>
                    <RxHamburgerMenu onClick={() => setOpenSideBar(true)} className='text-[30px]'/>


                </div>
            </div>

            {
                openSideBar && (
                    <div className='fixed h-[100vh] w-[270px] bg-[white] shadow-lg p-7 md:hidden z-[3] '>

                        <MdCancel className='ml-auto text-[40px] right-3 absolute' onClick={() => setOpenSideBar(false)}/>

                        <div className='ml-auto gap-[40px] items-start font-[600] flex flex-col  mt-5'>
                        <img src={logo} alt='logo' className='w-[120px] md:w-[162px]'/>

                            <Link to={'/product'} >Product</Link>
                            <Link to={'/services'} >Services</Link>
                            <Link to={'/about'} >About</Link>
                            <Link to={'/login'} className='border-2 px-[40px] py-[8px] rounded-[24px] flex gap-[8px] '>Log in</Link>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Header