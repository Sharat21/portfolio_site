// import React from 'react'
"use client";
import React, { useState } from "react";
import hero from "./astronaught.png"
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import {ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

function Contact () {


  const [setSubmit, setEmailSubmitted] = useState(false);

    const form = useRef();
    const notify = () => toast.success('Message Sent.', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });;



    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fwchzxw', 'template_8asy6ho', form.current, 'PkPscNOOlF3sZF7si')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setEmailSubmitted(true);
      notify();
      e.target.reset()

      
  };

  return (
    
    <section id="contact" className="h-full w-full grid about-color">

      <div className='title-contact'>
          <h2 className='text-white text-7xl sm:text-6xl font-bold py-3'>
            Contact
        
       </h2>

      </div>
      <br/>


      <div className="justify-right mb-8 my-12">

          <div>

            <div className="md:grid-rows-1">

            <p className="text-[#ADB7BE] contact-text">
                Hi! My email inbox is wide open, and I'm eager to explore any exciting opportunities that come my way. Feel free to drop me a message. I'm all ears and ready to connect!
                <br/>

                Feel Free to Contact me @ <br/>
                <br/>
                Email: sharatkrishnan@outlook.com <br/>
                <br/>
                Phone: 647-830-6786 <br/>



              </p>
            </div>
           


          <form ref={form} className="contact-con contact-form" onSubmit={sendEmail}>

            
            <div className="mb-4">

            <label htmlFor="name" className="text-white block mb-2 text-sm font-bold">
                Name
              </label>
              <input name="user_name" type="user_name" id="user_name" required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Fullname"
              />
            </div>
              
            <div className="mb-4">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Email
              </label>
              <input name="email" type="email" id="email" required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="johndoe@gmail.com"/>
            </div>


            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input name="subject" type="text" id="subject" required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Subject"/>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea name="message" id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your Message..."/>
            </div>

            <button type="submit" 
          className="bg-gray-600 hover:bg-primary-600 justify-center text-white font-medium py-2.5 px-5 rounded-lg w-50%">
              Send Message
            </button>
            <ToastContainer />
          
          </form>
          </div>
        {/* )} */}

<img src={hero} className="hero2" alt=""/>

      </div>
    </section>
  );
};


export default Contact

