import React from 'react'
import AboutImg from '../../assets/7358653-removebg-preview.png'
import { IoArrowForward } from 'react-icons/io5'

const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden item-center md:flex-warp md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
        <h2 className='text-2xl md:text4xl front-bold'>About</h2>
        <div className='md:flex flex-warp flex-colmd:flex-row item-center'>
          <img className='md:h-80' src={AboutImg} alt=''></img>

          <ul>

            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className='mt-1'/>
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Web developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Creative and detail-oriented web developer with experience in building 
                dynamic, responsive websites using React.js, JavaScript, and Node.js. 
                Passionate about turning ideas into interactive digital experiences, 
                with a strong focus on clean code and user-centric design. Constantly 
                exploring new technologies and tools to improve performance and functionality 
                while solving real-world problems through smart, scalable web solutions.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Data Scientist
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Driven by a passion for uncovering insights from data, skilled in data analysis, 
                machine learning, and data visualization using Python. Adept at transforming 
                complex datasets into actionable intelligence through techniques like image 
                processing, predictive modeling, and AI integration. Combines technical expertise 
                with problem-solving to build smart, data-powered solutions that enhance decision-
                making and user experience.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Fullstack developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Versatile full stack developer with hands-on experience in building scalable 
                web applications using React.js, Node.js, Express, and MongoDB. Proficient in 
                both frontend and backend development, with a strong understanding of 
                RESTful APIs, database integration, and responsive UI design. Passionate about 
                creating seamless user experiences and optimizing performance through clean, 
                efficient, and maintainable code.
                </p>
              </span>
            </div>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default About