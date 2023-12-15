import React from 'react'

const CalltoAction = () => {

    return (
        <div className=' rounded-[12px] max-w-[1200px] bg-[#0A2640] mt-[120px] mb-[80px]  py-[50px] px-5  sm:px-10 lg:px-[100px] xl:px-[0px] w-full flex flex-col  mx-auto  text-white'>

            <p className='text-[24px] sm:text-[48px] font-[manrope] leading-[48px] sm:leading-[72px] text-center max-w-[800px] mx-auto'>
                An enterprise template to ramp up your company website 
           </p>


            <div className='max-w-[600px] flex flex-wrap  gap-[24px] mx-auto mt-[50px]'>
            <input
  className='border rounded-[240px] px-[32px] bg-[white] py-[12px] w-full sm:w-[370px] focus:outline-none text-black'
  placeholder='Your email address'
/>                <button className=' bg-[#65E4A3] px-[56px] py-[16px] rounded-[56px] text-[black]'>Start now</button>
            </div>
        </div>
    )
}

export default CalltoAction