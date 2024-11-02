'use client'

import React from 'react'
import Image from 'next/image'
import { skillsCategories, skillsImage } from '../../../public/data/skills'

const Skills = () => {
  return (
    <main className='flex-grow container mx-auto px-4 py-14  sm:py-12 md:py-8 lg:py-8'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-8 md:mb-10 lg:mb-12 text-center font-raleway'>
        Skills
      </h1>
      
      {Object.entries(skillsCategories).map(([category, skills]) => (
        <div key={category} className="mb-12 sm:mb-16 font-ralesans">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-center sm:text-left before:content-['▷'] before:text-blue-500 flex  before:mr-3 before:text-sm items-center before:text-accent before:block">
            {category}
          </h2>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
            {skills.map((skill, id) => {
              const imageSrc = skillsImage(skill);
              return (
                <div 
                  className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 flex items-center justify-center rounded-lg group relative cursor-pointer  hover:shadow-lg transition-shadow duration-300"
                  key={id}
                >
                  <div className="h-full w-full rounded-lg p-3 sm:p-4">
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
                      <div className="h-full w-full"></div>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs sm:text-sm py-1 px-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </main>    
  )
}

export default Skills
