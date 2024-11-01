import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../../public/animations/devanimation.json'

function AboutComponent() {
  return (
    <main className='flex-grow container mx-auto px-4 py-8 sm:py-12 mt-0 sm:mt-0 md:mt-2 lg:mt-4 '>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-6 md:mb-4 lg:mb-2 text-center md:text-left'>
          About Me
        </h1>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12'>
          <div className='w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg text-justify'>
            <p className='leading-relaxed before:content-["▶"] before:text-blue-500 flex before:mr-3 before:text-accent before:block'>
              I&apos;m Ashlin Shawn Salis, Computer Science Student at NMAMIT, Nitte.
            </p>
            <p className='leading-relaxed before:content-["▶"] before:text-blue-500 flex before:mr-3 before:text-accent before:block'>
              My skill set includes JavaScript, CSS, HTML, TypeScript, Python, C++, and Java. I apply these languages to create practical solutions, bridging theory and application.
            </p>
            <p className='leading-relaxed before:content-["▶"] before:text-blue-500 flex before:mr-3 before:text-accent before:block'>
              Driven by a love for learning, I continuously explore new technologies in computer science.
            </p>
            <p className='leading-relaxed before:content-["▶"] before:text-blue-500 flex before:mr-3 before:text-accent before:block'>
              I&apos;m enthusiastic about innovation and its potential to tackle complex challenges.
            </p>
          </div>
          <div className='w-full md:w-2/5  md:mt-0'>
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              className='w-full h-auto max-w-md mx-auto'
            />
          </div>
        </div>
      </main>
  )
}

export default AboutComponent
