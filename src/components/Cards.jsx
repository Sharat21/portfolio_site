import React from 'react'
import { Col } from "react-bootstrap"
export const Cards = ({title, description, url}) => {
  return (
    <Col sm={6} md={4}>
        <div className='box'>
            <img src={url}/>
            <div className='text'>
                <h4>{title}</h4>
                <span> {description}</span>
            </div>
        </div>
    </Col>
  )
}

