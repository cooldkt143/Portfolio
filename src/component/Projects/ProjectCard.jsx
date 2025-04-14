import React from 'react'

const ProjectCard = ({title,Img,SubTitle,main}) => {
  return (
    <div className='p-3 md:w-[600px] md:p-6 flex flex-col w-100 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>
        <img className='p-4 md:h-[400px]' src={Img} alt='' />
        <h3 className='px-4 text-xl md:text-3xl font-bold loading-normal'>
            {title}
        </h3>
        <p className='px-4 text-lg md:text-md loading-tight py-2'>{SubTitle}</p>
        <p className='px-4 text-sm md:text-md loading-tight py-2'>{main}</p>
        <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4'>
            <button
                className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py2 md:px-4 hover:opacity-85 
                duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'
            >
                Tap to know more
            </button>
        </div>
    </div>
  )
}

export default ProjectCard