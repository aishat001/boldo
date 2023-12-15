import React from 'react'
import { Heading } from '../Typography'

const Intro = () => {
    
    return (
        <div className=' bg-[#65E4A3]'>
            <div className='xl:max-w-[1200px] pt-[194px] pb-[96px] px-5  sm:px-10 lg:px-[100px] w-full flex flex-col sm:flex-row  mx-auto md:gap-[100px]'>
                <div className='flex flex-col flex-[1]'>
                    <Heading className={''}>About</Heading>
                    <p className='text-[48px] text-[#000000] font-[manrope] leading-[72px] animate-on-scroll'>
                        We love to make great things, things that matter.
                    </p>
                </div>

                <div className='flex-1 py-[50px] leading-[28px] font-[400] text-[#0A2640] max-w-[455px] animate-on-scroll'>
                    Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
                </div>
            </div>
        </div>
    )
}

export default Intro