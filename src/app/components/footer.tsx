'use client'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaXTwitter } from "react-icons/fa6";
import styles from './footer.module.css';

const Footer = () => {

  return (
    <div className='py-5 flex flex-col w-full bg-black text-white'>
      <div className="px-5 text-center w-full mb-4">
  <div className={styles['footer-text']} >Made with ❤️ by Shawn Salis</div>
</div>
      <div className='flex flex-col w-full px-5 items-center gap-4 md:flex-row md:justify-between'>
        <div className='text-center text-gray-400 text-sm md:text-left order-2 md:order-1'>
          Copyright © 2024 Shawn Salis. All rights reserved.
        </div>
        <div className='social flex flex-row gap-8 order-1 md:order-2'>
          <AiFillGithub size="1.5rem" className= " text-gray-400 hover:text-blue-600 transition-colors" />
          <AiFillLinkedin size="1.5rem" className="text-gray-400 hover:text-blue-600 transition-colors" />
          <AiFillInstagram size="1.5rem" className=" text-gray-400 hover:text-blue-600 transition-colors" />
          <FaXTwitter size="1.5rem" className="text-gray-400  hover:text-blue-600 transition-colors" />
        </div>
      </div>
    </div>
  )
}

export default Footer
