'use client'
import React from 'react'
import { Nav } from '../components/navbar'
import AboutComponent from '../components/about'
import Skills from '../components/skills'
function About() {
  return (
    <div className='min-h-screen flex flex-col bg-[#121212] text-white'>
      <Nav />
      <AboutComponent/>
      <Skills/>
    </div>
  )
}

export default About
