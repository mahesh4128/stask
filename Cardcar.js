import React from 'react';
import './Cardcar.css';

export default function Cardcar({ imageSrc, title }) {
  return (
    <div className=" card mx-3 my-4">
      
        <img src={imageSrc} className="card-image" alt="Card" />
        <div className="text-overlay">
        <p >{title}</p>
      </div>
      </div>
    
  );
}
