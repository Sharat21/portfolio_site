import React from 'react'
import { Button } from 'flowbite-react';


function Menu({menuItem}) {

    const scrollToContact = () => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
  return (
    <div className='item2'>
        {
            menuItem.map((item) =>{
                return <div className='item-con' key={item.id}>
                    <div className='item-container'>
                        <img src={item.image} alt=""/>
                        <h2> {item.title}</h2>
                        <p> {item.description}</p>
                        <div className='md:flex justify-center items-center py-8'>
                            {
                                item.category === "Course" && item.title !== "BattleShip" ? (
                                    <Button color='purple' size="xl" onClick={scrollToContact}>
                                         Request Code
                                    {/* <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                                        
                                    </Link> */}
                                    </Button>
                                ):(
                                    
                                    <Button color='purple' size="xl" onClick={(e) => {e.preventDefault(); window.open(item.href)}}> Code</Button>
                                    
                                )
                                
                            }
                             <Button color='purple' size="xl" onClick={(e) => {e.preventDefault(); window.open(item.demo)}}> Demo</Button>
                        </div>
                        
                        {/* <button> Code</button> */}
                    </div>
                </div>
            })
        }


    </div>
  )
}

export default Menu