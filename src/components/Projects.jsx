import * as React from 'react';
import { useState } from 'react';
// import React from 'react';
import { Button } from 'flowbite-react';
import Menu from './Menu';

import items from "./data.js"



const allCat = ['All', ...new Set(items.map(item => item.category))];
console.log(allCat);

const Projects = () => {

  const [menuItem, setMenuitem] = useState(items);

  const filter = (button) =>{

    if(button === 'All'){
        setMenuitem(items);
        return;
    }

    const filterd = items.filter(items => items.category === button);
    setMenuitem(filterd);
  }
  return (
    <div className='h-screen-full w-full bg-black' id="projects">
        <div className='flex flex-col justify-center text-center py-7'>
            <h2 className='text-white text-7xl sm:text-6xl font-bold py-3'>
                            Projects
            </h2>
            

        </div>


        <div className='mx-auto flex items-center justify-center py-5'>
                <Button color="purple" size="xl" onClick={() => filter("All")}>
                    All               
                 </Button>                
                 <Button color="purple" size="xl" onClick={() => filter("Course")}>
                    Course Projects
                </Button>
                <Button color="purple" size="xl" onClick={() => filter("Hackathon")}>
                    Hackathons
                </Button>




        </div>
        <div className='max mx-auto flex items-center justify-center py-10'>


                <Menu menuItem={menuItem}/>
            

        </div>

        
        
    
    </div>
  )
}

export default Projects