import React from 'react'

function Button({button, filter}){
  return (
    <div className='button-proj'>
    {
        button.map((category, id) =>{
            return <button type='button' onClick={() => filter(category)} className="btn-proj"> {category} </button>
        })
    }
    </div>
  )
}

export default Button