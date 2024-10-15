import Lottie from 'lottie-react'
import React from 'react'
import animationData from '../../../public/animations/exp.json'
const Experience = () => {
  return (
    <main className='flex-grow container mx-auto px-4 py-8 sm:py-12'>
    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 text-center md:text-center'>
      Work Experience
    </h1>
    <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12'>
      <div className='w-full md:w-2/5 mt-8 md:mt-0'>
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className='w-full h-auto max-w-md mx-auto'
        />
      </div>
      <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
        <div className="relative pb-12 md:col-span-2">
            <div className="sticky top-0">
            <span className="text-blue-500 -left-[42px] absolute rounded-full text-5xl"
                >&bull;</span>
            <h3 className="text-xl font-bold text-gray-200">Full Stack Developer Intern</h3>
            <h4 className="font-semibold text-xl text-gray-400 ">Inspirante Technologies </h4>
            <time className="p-0 m-0 text-sm text-gray-400/80 ">march 2022 - april 2022</time>
            </div>
        </div>
        <div className="relative flex flex-col gap-2 pb-4 text-gray-400 md:col-span-3">
        Description    
        </div>
    </div>
    </div>
  </main>
  )
}

export default Experience
