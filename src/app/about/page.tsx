'use client'
import React from 'react'
import { Nav } from '../components/navbar'
import Lottie from 'lottie-react';
import animationData from '../../../public/animations/devanimation.json';

function About() {
  return (
    <div className='flex min-h-screen flex-col bg-[#121212]'>
       <Nav />
       <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 500, height: 500 }}
      />
       
    </div>
  )
}

export default About
