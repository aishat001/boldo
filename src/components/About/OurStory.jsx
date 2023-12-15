import React from 'react'
import { Heading } from '../Typography'

const OurStory = () => {
    return (
        <div className=' bg-[#0A2640]'>
            <div className='xl:max-w-[800px] pt-[94px] pb-[120px] px-5  sm:px-10 lg:px-[100px] xl:px-[0px] w-full flex flex-col  mx-auto text-white gap-[30px] items-start'>
                <div className=''>
                    <Heading className={'text-start'}>Our Story</Heading>

                    <p className='animate-on-scroll text-[24px] sm:text-[48px]  font-[manrope] leading-[64px]  sm:leading-[72px] text-start  max-w-[800px]'>
                        Handshake infographic mass market crowdfunding iteration.
                    </p>
                    <p className='text-[20px]  font-[manrope] text-start  max-w-[800px] mt-[32px] animate-on-scroll'>
                        Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects.
                        Learning curve network effects return on investment bootstrapping business-to-consumer.
                    </p>
                </div>


            </div>
        </div>
    )
}

export default OurStory