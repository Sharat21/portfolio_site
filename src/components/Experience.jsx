import React from 'react'


import sampleImg from "./Assets/python.png"
import bash from "./Assets/bash_logo.png"
import c_language from "./Assets/c_language.png"
import C_sharp from "./Assets/C#.png"
import Cplus from "./Assets/C++.png"
import css from "./Assets/css_logo.png"
import html from "./Assets/html_logo.png"
import java from "./Assets/java_logo.png"
import js from "./Assets/js_logo.png"
import swift from "./Assets/swift_png.png"
import tailwind from "./Assets/tailwind_css.png"



import nodejs from "./Assets/node_js.png"
import xCode from "./Assets/x_code_logo.png"
import vscode from "./Assets/vs_code_logo.png"
import intellij from "./Assets/intelli_j_logo.png"
import pycharm from "./Assets/pycharm_logo.png"
// import background from "/Users/sharatkrishnan/Desktop/one-port/src/Assets/background-color.jpeg"

import windows from "./Assets/windows_logo.png"
import macos from "./Assets/max_logo.png"
import linux from "./Assets/linux_logo.png"
import gitlab from "./Assets/gitlab_logo.png"
import github from "./Assets/github.png"
import git from "./Assets/git_logo.png"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Experience = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    
        <section className='skill connect' id="skills">
            <div>

                <div>
                    <div>
                        <div className="skill-bx">
                            <h2 className='text-white'> Languages & Frameworks </h2>

                            <Carousel showDots={false} draggable={false} autoPlay={true}
  autoPlaySpeed={3000}  removeArrowOnDeviceType={["tablet", "mobile"]}arrows={false} swipeable={false} responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src ={sampleImg} alt="pic" />
                                    <h5> Python </h5>
                                </div>

                                <div className='item'>
                                    <img src ={C_sharp} alt="pic" />
                                    <h5> C# </h5>
                                </div>

                                <div className='item'>
                                    <img src ={c_language} alt="pic" />
                                    <h5> C </h5>
                                </div>


                                <div className='item'>
                                    <img src ={Cplus} alt="pic" />
                                    <h5> C++ </h5>
                                </div>

                                <div className='item'>
                                    <img src ={js} alt="pic" />
                                    <h5> JavaScript </h5>
                                </div>

                                <div className='item'>
                                    <img src ={java} alt="pic" />
                                    <h5> Java </h5>
                                </div>

                                <div className='item'>
                                    <img src ={html} alt="pic" />
                                    <h5> Html </h5>
                                </div>

                                <div className='item'>
                                    <img src ={swift} alt="pic" />
                                    <h5> Swift </h5>
                                </div>

                                <div className='item'>
                                    <img src ={tailwind} alt="pic" />
                                    <h5> Tailwind </h5>
                                    
                                </div>

                                <div className='item'>
                                    <img src ={css} alt="pic" />
                                    <h5> Css </h5>
                                </div>

                                <div className='item'>
                                    <img src ={bash} alt="pic" />
                                    <h5> Bash </h5>
                                </div>


                                <div className='item'>
                                    <img src ={nodejs} alt="pic" />
                                    <h5> Node JS </h5>
                                </div>
                            </Carousel>
                            
                            <h2 className='text-white font-bold'> IDES </h2>
                        
                            <Carousel showDots={false} draggable={false} autoPlay={true}
                                autoPlaySpeed={3000}  removeArrowOnDeviceType={["tablet", "mobile"]}arrows={false} swipeable={false} responsive={responsive} infinite={true} className="skill-slider">                                
                                
                                <div className="item">
                                    <img src ={pycharm} alt="pic" />
                                    <h5> Pycharm </h5>
                                </div>

                                <div className='item'>
                                    <img src ={intellij} alt="pic" />
                                    <h5> Intellij </h5>
                                </div>

                                <div className='item'>
                                    <img src ={vscode} alt="pic" />
                                    <h5> VS code </h5>
                                </div>


                                <div className='item'>
                                    <img src ={xCode} alt="pic" />
                                    <h5> Xcode </h5>
                                </div>

                            </Carousel>

                            <h2 className='text-white font-bold'> Operating Systems & SCM Tools</h2>
                            <Carousel showDots={false} draggable={false} autoPlay={true}
  autoPlaySpeed={3000}  removeArrowOnDeviceType={["tablet", "mobile"]}arrows={false} swipeable={false} responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src ={windows} alt="pic" />
                                    <h5> Windows </h5>
                                </div>

                                <div className='item'>
                                    <img src ={macos} alt="pic" />
                                    <h5> MacOs </h5>
                                </div>

                                <div className='item'>
                                    <img src ={linux} alt="pic" />
                                    <h5> Linux </h5>
                                </div>


                                <div className='item'>
                                    <img src ={git} alt="pic" />
                                    <h5> Git </h5>
                                </div>

                                <div className='item'>
                                    <img src ={gitlab} alt="pic" />
                                    <h5> Gitlab </h5>
                                </div>

                                <div className='item'>
                                    <img src ={github} alt="pic" />
                                    <h5> Github </h5>
                                </div>
                            </Carousel>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    // <div className='h-screen w-full bg-gradient-to-b from-cyan-800 via-black to-black' name="experience">
    //     <h2 className='text-white text-7xl sm:text-6xl font-bold py-20 px-20 '>
    //                 Experience
            
    //             </h2>

    //     <div className='mx:flex:column py-3 px-10 justify-left items-center'> 
    //         {/* List Languages Here */}
    //         <h2 className='text-white text-5xl sm:text-3xl font-bold py-4'>
    //                     Languages


                    
    //                 </h2>

    //             <div className='flex text-2xl items-center gap-4'>
    //                 <TbBrandPython className='w-7 h-7 text-yellow-500'/>
    //                 <span className='font-bold'> SharatDev1</span>
                    
    //             </div>

    //         {/* List Frameworks Here */}
    //         <h2 className='text-white text-5xl sm:text-3xl font-bold py-4'>
    //             Frameworks


            
    //         </h2>

    //         {/* List Cloud Services Here */}
    //         <h2 className='text-white text-5xl sm:text-3xl font-bold py-4'>
    //             Cloud Services


            
    //         </h2>
    //     </div>

        
        
    // </div>
  )
}

export default Experience