import React from 'react'
import avatarImg from '../../assets/Hello1.gif'
import TextChanger from '../../TextChanger.jsx'

const Home = () => {
  return (
    <div
        className="text-white flex w-full justify-between items-start p-10 md:p-20"
    >
        <div className='md:w-2/4 md:pt-10'>
            <h1 className='text-4xl mb-2 md:text-7xl front-bold flex leading-normal tracking-tighter'><TextChanger /> </h1>
            <h2 className='text-xl mb-6 md:text-3xl flex leading-normal tracking-tighter'>a Web Developer and Data Scientist</h2>
            <p className='text-sm md:text-xl tracking-tight '>
            I'm a passionate Web Developer and Aspiring Data Scientist currently pursuing my B.Tech in Computer Science 
            at NIST University, Berhampur. With a strong foundation in programming languages like Java, Python, C, and 
            JavaScript, I love blending creativity and logic to build meaningful digital experiences.
            </p>
            <a
              href="#Contact"
            >
              <button
                  className='mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 front-semibokd rounded-3xl bg-[#465697]'
              >Contact Me!</button>
            </a>
        </div>
        {/* <div><img className="w-2/5 px-12 md:w-2/5" src={avatarImg}></img></div> */}
    </div>
  )
}

export default Home