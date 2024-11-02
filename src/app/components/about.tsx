import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../../public/animations/devanimation.json'

function AboutComponent() {
  return (
    <main className='flex-grow container mx-auto mb-2 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 lg:mb-3 text-center lg:text-left tracking-tight font-raleway'>
        About Me
      </h1>
      <div className='flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 lg:gap-16'>
        <div className='w-full lg:w-3/5 space-y-4 sm:space-y-6 md:space-y-10 lg:space-y-10 font-ralesans' >
          <p className='flex items-start text-sm sm:text-base lg:text-lg leading-relaxed'>
            <span className='text-blue-500 mr-3 mt-1 flex-shrink-0'>▶</span>
            <span>I&apos;m Ashlin Shawn Salis, Computer Science Student at NMAMIT, Nitte.</span>
          </p>

          <p className='flex items-start text-sm sm:text-base lg:text-lg leading-relaxed'>
            <span className='text-blue-500 mr-3 mt-1 flex-shrink-0'>▶</span>
            <span>My skill set includes JavaScript, CSS, HTML, TypeScript, Python, C++, and Java. I apply these languages to create practical solutions, bridging theory and application.</span>
          </p>

          <p className='flex items-start text-sm sm:text-base lg:text-lg leading-relaxed'>
            <span className='text-blue-500 mr-3 mt-1 flex-shrink-0'>▶</span>
            <span>Driven by a love for learning, I continuously explore new technologies in computer science.</span>
          </p>

          <p className='flex items-start text-sm sm:text-base lg:text-lg leading-relaxed'>
            <span className='text-blue-500 mr-3 mt-1 flex-shrink-0'>▶</span>
            <span>I&apos;m enthusiastic about innovation and its potential to tackle complex challenges.</span>
          </p>
        </div>
        <div className='w-full lg:w-2/5 mt-3 lg:mt-0'>
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className='w-full max-w-sm sm:max-w-md mx-auto lg:max-w-full'
          />
        </div>
      </div>
    </main>
  )
}

export default AboutComponent
