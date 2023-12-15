import React from 'react'
import Intro from '../components/About/Intro'
import OurNumbers from '../components/About/OurNumbers'
import OurStory from '../components/About/OurStory'
import OurTeam from '../components/About/OurTeam'
import OurBlog from '../components/About/OurBlog'
import CalltoAction from '../components/CalltoAction'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Intro/>
      <OurNumbers/>
      <OurStory/>
      <OurTeam/>
      <OurBlog/>
      <CalltoAction/>
    </>
  )
}

export default About