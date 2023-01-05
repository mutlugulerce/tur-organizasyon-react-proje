import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return(
    <main>
    <div className='title'>
    <h2>Turlarımız</h2>
    <div className='underline'></div>
  </div>
    <div >
    {tours.map((tour,index) => {
      
      return  <Tour key={tour.index} {...tour} removeTour={removeTour}/>
           
        
        } )}
    </div>
   
    </main>
  )
};

export default Tours;
