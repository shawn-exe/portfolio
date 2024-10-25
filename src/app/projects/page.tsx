import React from 'react'
import projects from '../../../public/data/projects';
import {Nav} from '@/app/components/navbar'
import Footer from '@/app/components/footer'
import {Project} from '@/app/components/project';

const page = () => {
  return (
    <div className='bg-[#121212] min-h-screen'>
      <Nav/>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      {projects.map((project) => (
        <Project  key={project.id} project={project} />
      ))}
    </div>
    <Footer/>
    </div>
  );
}

export default page
