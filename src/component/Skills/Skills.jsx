import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJava, FaPython, FaJs, FaReact } from "react-icons/fa";
import { SiJavascript, SiC } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiNodedotjs  } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24">
        <h1 className="text-2xl md:text-4xl text-white font-bold mb-5">Skills</h1>
        <div className="flex flex-wrap  items-center justify-around">
            <h1 className="text-2xl md:text-4xl text-white font-bold">Web-devlopment language :-</h1>
            <div className="flex flex-wrap md:w-4/6 gap-8 py-10">
                <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                    <FaHtml5 color="#4285F4" size={50} />
                    <span className="text-white">
                    <h2 className="leading-tight">HTML 5 </h2>
                    </span>
                </div>
                <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
                    <FaCss3 color="#E50914" size={50} />
                    <span className="text-white">
                    <h2 className="leading-tight">CSS 3</h2>
                    </span>
                </div>
                <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
                    <SiJavascript color="#FF9900" size={50} />
                    <span className="text-white">
                    <h2 className="leading-tight">JavaScript</h2>
                    </span>
                </div>
                <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                    <FaReact color="#4285F4" size={50} />
                    <span className="text-white">
                    <h2 className="leading-tight">React JS</h2>
                    </span>
                </div>
                <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
                    <SiNodedotjs color="#E50914" size={50} />
                    <span className="text-white">
                    <h2 className="leading-tight">Node JS</h2>
                    </span>
                </div>
            </div>
            <h1 className="text-2xl md:text-4xl text-white font-bold">Programming language :-</h1>
            <div className='flex flex-wrap md:w-4/6 gap-8 py-10'>
                <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                    <FaPython color="#FF9900" size={50} />
                    <span className="text-white">
                    <h2 className="leading-tight">Python</h2>
                    </span>
                </div>
                <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                    <FaJava color="#4285F4" size={50} />
                    <span className="text-white">
                    <h2 className="leading-tight">Java</h2>
                    </span>
                </div>
                <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
                    <SiC color="#E50914" size={50} />
                    <span className="text-white">
                    <h2 className="leading-tight">C Language</h2>
                    </span>
                </div>
            </div>
            {/* <h1 className="text-2xl md:text-4xl text-white font-bold">Web devlopment language :-</h1>
            <div className='flex flex-wrap md:w-4/6 gap-8 py-10'>
            </div> */}
        </div>
    </div>
  )
}

export default Skills