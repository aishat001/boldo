import React from 'react'
import { Heading } from '../Typography'

const OurNumbers = () => {
    return (
        <div className=' bg-[#FFFFFF]'>
            <div className='xl:max-w-[1000px] pt-[94px] pb-[120px] px-5  sm:px-10 lg:px-[100px] xl:px-[0px] w-full flex flex-col  mx-auto '>
                <Heading className={'text-center'}>Our numbers</Heading>

                <p className='animate-on-scroll text-[24px] sm:text-[48px] text-[#000000] font-[manrope] leading-[50px]  sm:leading-[72px] text-center max-w-[800px] m-auto'>
                    Handshake infographic mass market crowdfunding iteration.
                </p>

                <div className='flex flex-wrap justify-center text-center sm:text-start sm:flex-row lg:justify-between mt-[84px] gap-[60px] animate-on-scroll'>
                    <div className='flex flex-col gap-[32px] w-[max-content]'>
                        <p className='text-[36px] sm:text-[96px] text-[#0A2640] leading-[56px]'>120m</p>
                        <p>Cool feature title</p>
                    </div>
                    <div className='flex flex-col gap-[32px] w-[max-content]'>
                        <p className='text-[36px] sm:text-[96px] text-[#0A2640] leading-[56px]'>10.000</p>
                        <p>Cool feature title</p>
                    </div>
                    <div className='flex flex-col gap-[32px] w-[max-content]'>
                        <p className='text-[36px] sm:text-[96px] text-[#0A2640] leading-[56px]'>240</p>
                        <p>Cool feature title</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurNumbers