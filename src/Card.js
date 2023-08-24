import React from 'react'
import './Card.css';
export default function Card({imageSrc, text,title }) {
  return (  
          <div className="card mx-3 my-4">
        <img src={imageSrc} className=" img" alt="Card" />
      <div className="box">
        <div className=" text">{text}</div>
        <div className='titlebox'>
            <div className='titlebox2'>
            <div className="title">{title}</div>
            </div>
        
        </div>
        
      </div>
          </div>
      
  )
}
