import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='p-10 md:p-24 text-white' id='Projects'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-1 flex flex-col md:flex-row gap-5'>
            <ProjectCard 
                title='Project 1'
                main='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
            />
            <ProjectCard 
                title='Project 2'
                main='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
            />
            <ProjectCard 
                title='Project 3'
                main='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
            />
        </div>
    </div>
  )
}

export default Projects