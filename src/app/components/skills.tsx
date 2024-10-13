'use client'

import React from 'react'
import Image from 'next/image'
import { skillsData, skillsImage } from '../../../public/data/skills'

const Skills = () => {
  return (
    <main className='flex-grow container mx-auto px-4 py-8 sm:py-12'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 text-center md:text-left'>
        Skills
      </h1>
      <div className="w-full my-12 flex flex-wrap justify-center">
        {skillsData.map((skill, id) => {
          const imageSrc = skillsImage(skill);
          return (
            <div 
              className="w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 flex items-center justify-center m-3 sm:m-5 rounded-lg group relative cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg ">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-transparent" />
                  </div>
                </div>
                <div className="flex items-center justify-center h-full w-full p-4">
                  {imageSrc ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={imageSrc}
                        alt={skill}
                        layout="fill"
                        objectFit="contain"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div className="h-full w-full bg-gray-300 rounded-lg"></div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>    
  )
}

export default Skills
