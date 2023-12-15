import React from 'react'
import { Heading } from '../Typography'

const OurBlog = () => {
  return (
    <div className=' bg-[#0A2640]'>
    <div className='xl:max-w-[1100px] pt-[94px] pb-[120px] px-5  sm:px-10 lg:px-[100px] xl:px-[0px] w-full flex flex-col  mx-auto  text-white'>
        <Heading className={'text-center'}>Our Blog</Heading>

        <p className='text-[24px] sm:text-[48px] font-[manrope] leading-[48px] sm:leading-[72px] text-center max-w-[800px] m-auto animate-on-scroll'>
        Value proposition accelerator product management venture
        </p>

      <hr className='my-[60px]'/>

      <div className=' flex flex-col gap-[50px] sm:gap-[80px] animate-on-scroll'>
        <div className='flex flex-col sm:flex-row justify-between gap-5'>
            <p className='text-[20px] sm:text-[48px] sm:leading-[72px] '>We are <span className='text-[#69E6A6]'>commited.</span> </p>

            <p className='max-w-[509px] font-[400] leading-[32px] text-[20px] text-[#F1F1F1] sm:mt-[10px]'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
        </div>
        <div className='flex flex-col sm:flex-row justify-between gap-5'>
            <p className='text-[20px] sm:text-[48px] sm:leading-[72px] '>We are <span className='text-[#69E6A6]'>responsible.</span> </p>

            <p className='max-w-[509px] font-[400] leading-[32px] text-[20px] text-[#F1F1F1] mt-[10px]'>Mass market iPhone buzz conversion analytics stock iteration responsive web design user experience business plan handshake. Return on investment seed round MVP backing supply chain. </p>
        </div>
        <div className='flex flex-col sm:flex-row justify-between gap-5'>
            <p className='text-[20px] sm:text-[48px] sm:leading-[72px] '>We aim for <span className='text-[#69E6A6]'>progress.</span> </p>

            <p className='max-w-[509px] font-[400] leading-[32px] text-[20px] text-[#F1F1F1] mt-[10px]'>Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus. </p>
        </div>

      </div>
    </div>
</div>
  )
}

export default OurBlog