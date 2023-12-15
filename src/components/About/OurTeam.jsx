import React from 'react'
import { Heading } from '../Typography'
import TeamMemberCard from '../TeamMemberCard'
import image from '../../assets/image2.png'
import image1 from '../../assets/image1.png'
import image3 from '../../assets/image3.png'


const OurTeam = () => {
    return (
        <div className=' bg-[white]'>
            <div className='xl:max-w-[900px] pt-[120px] pb-[120px] px-5  sm:px-10 lg:px-[100px] xl:px-[0px] w-full flex flex-col  mx-auto gap-[30px] items-start'>
                <div className='md:px-[50px]'>
                    <Heading className={'text-start'}>Our Team</Heading>

                    <p className='text-[24px] sm:text-[48px]  font-[manrope] leading-[64px]  sm:leading-[72px] text-start  max-w-[800px] animate-on-scroll'>
                        The people behind the work
                    </p>
                    <p className='text-[20px]  font-[manrope] text-start  max-w-[800px] mt-[22px] animate-on-scroll'>
                        Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.
                        Traction stock user experience deployment beta innovator incubator focus.
                    </p>
                </div>

                <div className='grid grid-cols-2 gap-5 md:gap-[75px]  md:grid-cols-3  mx-auto animate-on-scroll'>
                    {
                        teamMembers.map((member, index) => (
                            <TeamMemberCard name={member.name} title={member.title} image={member.image} key={index} />

                        ))
                    }
                </div>

                <div className='flex flex-wrap justify-between mx-auto mt-[50px] md:mt-[100px] gap-[46px] '>
                    {

                        teamMembers2.map((member, index) => (
                            <div className='flex flex-row gap-[24px] max-w-[400px] animate-on-scroll' key={index}>
                                <img src={member.image} alt='' className='w-[120px] h-[120px] rounded-[24px]' />

                                <div className='flex flex-col justify-center'>
                                    <p className='text-[#000000] text-[28px] w-[max-content] leading-[48px]'>{member.name}</p>
                                    <p className='text-[#777777] text-[20px] w-[max-content] leading-[32px]'>{member.title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
        </div>
    )
}

export default OurTeam


const teamMembers = [
    {
        name: 'Michael Scott',
        title: 'General Manager',
        image: image,
    },
    {
        name: 'Michael Scott',
        title: 'General Manager',
        image: image,
    },
    {
        name: 'Michael Scott',
        title: 'General Manager',
        image: image,
    },
]
const teamMembers2 = [
    {
        name: 'Michael Scott',
        title: 'General Manager',
        image: image1,
    },
    {
        name: 'Michael Scott',
        title: 'General Manager',
        image: image3,
    },
    {
        name: 'Michael Scott',
        title: 'General Manager',
        image: image3,
    },

    {
        name: 'Michael Scott',
        title: 'General Manager',
        image: image3,
    },
]


