import Lottie from 'lottie-react'
import React from 'react'
import animationData from '../../../public/animations/exp.json'
import { experience } from '../../../public/data/exp'

const Experience = () => {
  return (
    <main className='mb-4 flex-grow container mx-auto px-4 py-4 sm:py-4 md:py-12 lg:py-12'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-0 sm:mb-0 md:mb:10 lg:mb-10 text-center font-raleway'>
        Work Experience
      </h1>
      <div className='flex flex-col lg:flex-row items-center justify-start'>
        <div className='w-full lg:w-2/5 mt-2 sm:mt-2 md:mt-4 lg:mt-0 lg:sticky lg:top-8'>
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className='w-full h-auto max-w-md mx-auto'
          />
        </div>
        
        <div className="w-full lg:w-3/5 relative mx-4 sm:mx-6 md:mx-8 lg:mx-0 pb-12 flex flex-col before:absolute before:left-4 sm:before:left-6 md:before:left-8 before:top-2 before:bottom-0 before:border-l-2 before:border-gray-200 before:content-['']">
          {experience.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row md:gap-10 mb-8 pl-8 sm:pl-10 md:pl-12">
              <div className="relative md:w-2/5 pl-2">
                <span className="text-blue-500 absolute -left-[27px] sm:-left-[26px] md:-left-[28px] top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-gray-900 flex items-center justify-center">
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                </span>
                <h3 className="text-xl font-bold text-gray-200">{exp.role}</h3>
                <h4 className="mt-2 font-semibold text-xl text-gray-400">{exp.company}</h4>
                <time className="mt-2 text-sm text-gray-400/80">{exp.duration}</time>
              </div>
              <div className="font-ralesans md:w-3/5 flex flex-col gap-2 pl-2 sm:pl-2 md:pl-1 lg:pl-0 text-justify text-sm sm:text-base lg:text-md text-gray-400 mt-4 md:mt-0">
                {exp.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}

export default Experience
