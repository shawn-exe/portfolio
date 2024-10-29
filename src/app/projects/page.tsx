'use client'
import React from 'react'
import projects from '../../../public/data/projects';
import {Nav} from '@/app/components/navbar'
import Footer from '@/app/components/footer'
import {Project} from '@/app/components/project';
import { TypeAnimation } from "react-type-animation";

const page = () => {
  return (
    <div className='bg-[#121212] min-h-screen'>
      <Nav/>
      <div className='text-3xl sm:text-4xl md:text-5xl font-bold pt-10 text-white text-center md:text-center'>
          My Projects
      </div>
      <div className="flex flex-wrap justify-evenly px-8">
        {projects.map((project) => (
          <Project  key={project.id} project={project} />
        ))}
        <div className='w-full flex items-center justify-center text-white mb-10 md:mb-10 lg:mb-10 lg:text-3xl md:text-2xl sm:text-xl font-extralight text-center'>
        <TypeAnimation
              sequence={["COMING SOON...!",1000," ",1000]}
              
              speed={30}
              repeat={Infinity}
            />
        </div>
      </div>
      <Footer/>
      </div>
  );
}

export default page
