'use client'

import React from 'react'
import Image from 'next/image'
import {Meteors} from '@/components/ui/meteors'
import {DiscordIcon, MailIcon, InstagramIcon, LeetCodeIcon, StackOverflowIcon,XIcon, LinkedInIcon,GithubIcon } from './Icons';
import Link from 'next/link';

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

      <div className='flex flex-col justify-center items-center my-5'>
      <p className='text-md sm:text-md md:text-md font-bold text-white'>get in touch</p>
        <div className='flex items-center flex-row gap-8 mt-4 flex-wrap'>   

          <Link href="https://x.com/?lang=en-in" target="_blank" rel="noopener noreferrer" className="block">
            <div className="transition-transform duration-100 hover:scale-125 hover:z-10">
              <XIcon />
            </div>
          </Link>


          <Link href="https://github.com/shawn-exe" target="_blank" rel="noopener noreferrer" className="block">
            <div className="transition-transform duration-100 hover:scale-125 hover:z-10">
              <GithubIcon />
            </div>
          </Link>


          <Link href="https://www.linkedin.com/in/shawnxsalis/" target="_blank" rel="noopener noreferrer" className="block">
            <div className="transition-transform duration-100 hover:scale-125 hover:z-10">
              <LinkedInIcon />
            </div>
          </Link>

          <Link href="https://x.com/?lang=en-in" target="_blank" rel="noopener noreferrer" className="block">
            <div className="transition-transform duration-100 hover:scale-125 hover:z-10">
              <DiscordIcon />
            </div>
          </Link>

          <Link  href="mailto:shawnxsalis@gmail.com"  target="_blank" rel="noopener noreferrer" className="block">
            <div className="transition-transform duration-100 hover:scale-125 hover:z-10">
              <MailIcon />
            </div>
          </Link>

          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="block">
            <div className="transition-transform duration-100 hover:scale-125 hover:z-10">
              <InstagramIcon />
            </div>
          </Link>

          <Link href="https://leetcode.com/u/shawnxsalis/" target="_blank" rel="noopener noreferrer" className="block">
            <div className="transition-transform duration-100 hover:scale-125 hover:z-10">
              <LeetCodeIcon />
            </div>
          </Link>

          <Link href="https://x.com/?lang=en-in" target="_blank" rel="noopener noreferrer" className="block">
            <div className="transition-transform duration-100 hover:scale-125 hover:z-10">
              <StackOverflowIcon />
            </div>
          </Link>

        </div>
      </div>


      <div className='flex justify-center text-center text-gray-300 mt-10'>
        Feel free to steal this theme! It&apos;s open source 🥰
      </div>

    </div>
  )
}

export default Intro
