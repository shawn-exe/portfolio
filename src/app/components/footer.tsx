'use client'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaXTwitter } from "react-icons/fa6";
import styles from './footer.module.css';
import Link from 'next/link';

const Footer = () => {

  return (
    <div className='pb-5 flex flex-col w-full bg-transparent text-white font-mono'>
      <div className="px-5 text-center w-full mb-1 ">
  <div className={styles['footer-text']} >Made with ❤️ by Shawn Salis</div>
</div>
      <div className='flex flex-col w-full px-5 items-center gap-4 md:flex-row md:justify-between'>
        <div className='text-center text-white text-[0.8rem] md:text-left order-2 md:order-1'>
          Copyright © 2024 Shawn Salis. All rights reserved.
        </div>
        <div className='social flex flex-row gap-8 order-1 md:order-2'>
          <Link href='https://github.com/shawn-exe'>
          <AiFillGithub size="1.5rem" className= " text-white hover:text-blue-500 transition-colors" />
          </Link>
          <Link href='https://linkedin.com/in/shawnxsalis'> 
          <AiFillLinkedin size="1.5rem" className="text-white hover:text-blue-500 transition-colors" />
          </Link>
          <Link href='https://www.instagram.com/zuck/'> 
          <AiFillInstagram size="1.5rem" className=" text-white hover:text-blue-500 transition-colors" />
          </Link>
          <Link href='https://x.com/elonmusk'> 
          <FaXTwitter size="1.5rem" className="text-white  hover:text-blue-600 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
