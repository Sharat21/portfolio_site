import React from 'react'
import sampleImg from './Assets/hero_pic.png';
import uoft from "./Assets/uoft_logo.png"
import { Container, Col, Row } from 'react-bootstrap';
const About = () => {
  return (
    <div className='h-screen-full w-full about-color' id='about'>

      <img src={sampleImg} className="circle"/>
      <div className='max-w-screen-lg items-center py-4'>

        <h2 className='text-gray-200 text-7xl sm:text-6xl font-bold title-about '>
                    About Me
        </h2>
          
          <div className=''>

            
          </div>
          <div className='about-con'>
          
            <p className='text-gray-300 font-bold text-about'>

              Greetings, I'm Sharat Krishnan, a dedicated computer science student with an unwavering passion for designing innovative software and applications, and an unbridled love for coding.My journey into the world of programming began with the creation of small games on Unity, where I discovered the sheer thrill of bringing ideas to life through code. From there, I ventured into the realm of game development with Python, honing my skills and fueling my desire to explore the endless possibilities of programming. As I delved deeper into this dynamic field, I found myself taking on diverse projects and embracing various programming languages and software tools, further expanding my horizons. <br/> <br/> My interests extend beyond the surface, as I am deeply committed to continual growth and learning, always eager to acquire new knowledge and skills. In addition to my passion, I possess essential computer science hard skills such as proficiency in data structures and algorithms, as well as soft skills like problem-solving, collaboration, and adaptability, which I believe are indispensable for a successful career in this ever-evolving industry.
            </p>
        </div>
    
      <img src={uoft} className='uni'/>

      <div className='about-con'>
          

          <p className='text-gray-300 font-bold'>

          I currently attend the University of Toronto Mississauga, where I am pursuing a Bachelor's degree in Computer Science as a Specialist in Computer Science and Information Security, with a minor in Mathematics. Throughout my academic journey, I've undertaken a series of relevant courses that have equipped me with a solid foundation in various programming languages and essential concepts. These courses include Introduction to Computer Programming (Python), Introduction to Computer Science (Python), Software Design (Java), Software Tools and Systems Programming (C and Bash), Computer Organization (Assembly), Linear Algebra I, Calculus I, and Calculus II.
<br/>
<br/>
This diverse curriculum has not only deepened my understanding of programming languages but has also fostered problem-solving abilities and critical thinking skills. I've leveraged this knowledge in various small-scale projects outside of my academic coursework, where I've had the opportunity to explore real-world applications and challenges.
<br/>
<br/>
My time at the University of Toronto Mississauga has been marked by a vibrant and collaborative community of fellow computer science enthusiasts. The environment here has encouraged me to engage in hackathons, coding competitions, and collaborative coding projects, further enhancing my practical skills and helping me stay at the forefront of technological advancements. This hands-on experience, coupled with a strong academic foundation, has prepared me to excel in the dynamic and ever-evolving field of computer science and information security. I look forward to continuing my journey of exploration and innovation within this exciting domain.
          </p>

       </div>
      

      </div>

   
    
    
</div>
  )
}

export default About