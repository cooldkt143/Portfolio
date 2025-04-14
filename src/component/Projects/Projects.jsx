import React from 'react'
import ProjectCard from './ProjectCard'
import bannerImg from '../../assets/photo-C8q0KQHG.webp'
import GhoomImg from '../../assets/logo-ghoomakkads.png'
import AyushImg from '../../assets/AYUSH.jpg'

const Projects = () => {
  return (
    <div className='p-10 md:p-24 text-white' id='Projects'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-1 md:w-6/8 flex flex-col md:flex-row gap-5'>
            <ProjectCard 
                Img={AyushImg}
                title='AYUSH '
                SubTitle='Virtual Herbal Garden'
                main='Step into a lush digital paradise where tradition meets technology! 
                Explore a virtual herbal garden that brings ancient AYUSH wisdom to life 
                with 3D models, AR/VR interaction, and smart AI-guided discovery. It is not 
                just learning—it is an immersive, addictive journey into the world of healing herbs!'
            />
            <ProjectCard 
                Img={GhoomImg}
                title='The Ghoomakkads'
                SubTitle='AI-Driven Travel Companion App'
                main='Craving adventure but tired of the usual tourist traps? 
                The Ghoomakkads is your all-in-one travel buddy—uncover hidden gems, 
                connect with fellow wanderers, and dive into thrilling surprise 
                trips tailored just for you. Pack your bags, because unforgettable 
                journeys start here!'
            />
            <ProjectCard 
                Img={bannerImg}
                title='Legal FIR Assistant'
                SubTitle='AI-Powered Legal Assistance Web App'
                main='Imagine an AI that instantly knows the right law for any situation—Legal 
                FIR Assistant makes that real! Whether you are a police officer drafting an FIR 
                or a citizen seeking justice, this smart tool guides you through Indias legal 
                maze with accuracy, speed, and simplicity. Curious how it works? Let’s dive in!'
            />
        </div>
    </div>
  )
}

export default Projects