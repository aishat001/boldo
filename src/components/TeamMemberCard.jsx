import React from 'react'

const TeamMemberCard = ({name, title, image}) => {
  return (
    <div className='flex flex-col gap-[24px]'>
        <img src={image} alt='' className='lg:w-[250px] lg:h-[250px] rounded-[24px]'/>

        <div>
            <p className='text-[#000000] text-[18px]  sm:text-[28px]'>{name}</p>
            <p className='text-[#777777] text-base md:text-[20px]'>{title}</p>
        </div>
    </div>
  )
}

export default TeamMemberCard