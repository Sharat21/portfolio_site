import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { CubeIcon } from "@heroicons/react/24/solid";
import { useState } from 'react';
import { Link } from 'react-scroll';


const HomeBar = () => {
    const links = [
        {
            id: 1,
            site: "home",
    
        },
        {
            id: 2,
            site: "skills",
        },
        {
            id: 3,
            site: "projects",
    
        },
        {
            id: 4,
            site: "about",
        },
        {
            id: 5,
            site: "contact",
        },

    ];

    let [MenuOpen, setMenu] = useState(false)
    return (
        <div className='shadow-md w-full fixed top-0 left-0 bar'>
            <div className="md:px-10 py-4 px-7 md:flex justify-between items-center text-black bg-slate-50">
            
                <div className='flex text-2xl items-center gap-4'>
                    <CubeIcon className='w-7 h-7 text-black-600'/>
                    <span className='font-bold'> SharatDev1</span>
                    
                </div>
                
                <div onClick={() => setMenu(!MenuOpen)} className='absolute right-8 top-4 cursor-pointer md:hidden' >
                    {
                        MenuOpen ? <FaTimes className='w-7 h-7 ' /> : <FaBars className='w-7 h-7 '/>
                    }       
                </div>  
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  bg-slate-50 md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${MenuOpen ? 'top-12' : 'top-[-490px]'}`}>                
                    {
                    links.map(({id, site}) => (

                    <li key={id} 
                        className="px-6 cursor-pointer capitalize font-medium hover:scale-110 hover:text-slate-400 duration-200 my-5 md:my-1 md:ml-4">
    
                         <Link to={site} spy={true} smooth={true} offset={-50} duration={500}>
                            {site}
                        </Link>
                    </li>

                    ))
                    }
                </ul>
            
            
            </div>

        </div>
  )
}

export default HomeBar