import React from 'react';

import {TypeAnimation} from 'react-type-animation';
import { Link } from "react-scroll";
import pdf from "./Assets/resume.pdf"

import StarsCanvas from './Stars';
import hero from "./astronaught.png"
import { motion } from "framer-motion"

const HomePage = () => {

  return (

    // Set Background  fullbg
    <div className='h-full w-full bg-black py-20' id='home'>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:4}}>
        <div className='home-text connect'>
            <img src={hero} className="hero connect rotate" alt=''/>


                {/* Introduction */}
                <div className='flex:col py-10'> 
                <h2 className='text-white text-7xl sm:text-6xl font-bold py-12 z-10000'>
                    Hi, I'm Sharat Krishnan


                
                </h2>

           

                {/* Animated Typing  */}
                <h1 className='text-white text-5xl sm:text-5xl; font-bold uppercase leading-[1] font-secondary title-start'>
                    <span className='mr-1'>
                        I'm a
                        <br/>
                    </span>
                    <TypeAnimation
                        sequence={[' Developer', 2000, ' Designer', 2000, ' Creator', 2000]}
                        speed={50}
                        className="text-cyan-400 font-bold"
                        wrapper='span'
                        repeat={Infinity}>
                        </TypeAnimation>
                </h1>

                
                {/* Introductory Paragraph */}
                <p className='text-gray-200 py-5 max-w-md z-30000 home-con'>
                        I'm a passionate software developer currently pursuing my computer science degree at the University of Toronto. With 5 of coding experience, I specialize in crafting innovative solutions for both front-end and back-end development. This website was developed using React, CSS, and Tailwind CSS to showcase my work and passion for software development. Let's turn your vision into reality!
                </p>

                </div>
                

                {/* Link to projects for client */}
                <div className='py-4 px-4'>
                    
                    <a href={pdf} without rel="noopener noreferrer" target="_blank " smooth duration={500} className='group connect text-white w-fit px-6 py-3 my-2 items-center rounded-md button cursor-pointer hover:scale-110 hover:text-slate-700 duration-200'>

                        Resume
                    </a>


                    <Link to='Contact' smooth duration={500} onClick={(e) => {e.preventDefault(); window.open("https://www.linkedin.com/in/sharat-krishnan-35335b229/")}} className='group connect text-white w-fit  custom-margin px-6 py-3 my-2 items-center rounded-md button cursor-pointer hover:scale-110 hover:text-slate-700 duration-200'>
                    Let's Connect 

                    
                    </Link>

                </div>

        </div> 
        <StarsCanvas/>
        </motion.div>
    </div>
  )
}

export default HomePage