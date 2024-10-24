import React from 'react'
import projects from '../../../public/data/projects';
import Project from '@/app/components/project';

const page = () => {
  return (
    <div className=' bg-[#121212] min-h-screen'>
    <div className="mx-20 space-y-10 md:space-y-16 lg:space-y-36">
      {projects.map((project, index) => (
        <Project 
          key={project.id}
          project={project}
          align={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
    </div>
  );
}

export default page
