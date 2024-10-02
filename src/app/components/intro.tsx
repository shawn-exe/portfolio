'use client'

import React from 'react'
import Image from 'next/image'
import {Meteors} from '@/components/ui/meteors'

const Intro = () => {
  return (
    <div className='w-full py-5 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      <div className='w-full text-center text-white mb-8'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>LET ME INTRODUCE MYSELF</h1>
      </div>

      <div className='w-full flex flex-col md:flex-row items-center gap-8 md:gap-12'>
        <div className='w-full md:w-2/5 lg:w-1/3 max-w-sm'>  
          <div className='relative aspect-square'>
            <Image 
              src="/images/introimg.png" 
              layout="fill"
              objectFit="cover"
              alt="Intro image"
              className="rounded-lg"
            />
            <div className='absolute inset-0'>
              <Meteors number={20} />
            </div>
          </div>
        </div>

        <div className='text-white w-full md:w-3/5 lg:w-2/3'>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-2 flex-shrink-0">🎓</span>
              <span>I&apos;m <span className='font-bold text-lg'>Ashlin Shawn Salis</span>, a passionate computer science undergrad at NMAMIT, Nitte, always ready to tackle exciting challenges in tech.</span>
            </li>

            <li className="flex items-start">
              <span className="mr-2 flex-shrink-0">💡</span>
              <span>With a flair for innovation and coding, I bring creative solutions to solve real-world problems, turning challenges into opportunities.</span>
            </li>

            <li className="flex items-start">
              <span className="mr-2 flex-shrink-0">🚀</span>
              <span>My journey is all about pushing boundaries, contributing to impactful projects, and shaping the future of technology.</span>
            </li>

            <li className="flex items-start">
              <span className="mr-2 flex-shrink-0">🤝</span>
              <span>Ready to collaborate and build something extraordinary? Let&apos;s bring bold ideas to the digital world together!</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Intro
