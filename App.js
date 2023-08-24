import React from 'react';
import Carcomp from './Carcomp';
import './App.css';
import Cdata,{cardData} from './Cdata';

function App() {
 

  return (
    
     <div >
      <div className='heading-container my-5'>
        <div className='heading '>Communities we manage</div>
      </div>

        <div>
        <Cdata cardData={cardData} />
        </div>
    <div className='heading-container my-5'>
        <div className='heading'>OUR SERVICES</div>
        </div>
        
        <div>
         <Carcomp cardData={cardData}  />
        </div>

    </div>
     
   
  );
}

export default App;
