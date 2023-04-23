import React from "react";

function Expert() {
   return (
      <div className='parent'>
         <div className='expert-container'>
            <div className='expert-items1'>
               <img src='./src/assets/computer.png' alt='' />
            </div>
            <div className='expert-items2'>
               <p className='expert'>Expert store designing</p>
               <h4>
                  <span className='span'> Shopify</span> stores that are proven
                  in its <span className='span'> power</span> to convert
               </h4>
               <p className='there'>
                  There are enough stresses involved in running a successful
                  ecommerce site - the design and efficacy of your store
                  shouldn't be one of them
               </p>
               <div className='lorem'>
                  <div className='lorem1'>
                     <img src='./src/assets/lorem2.svg' alt='' />
                     <img src='./src/assets/lorem2.svg' alt='' />
                     <img src='./src/assets/lorem2.svg' alt='' />
                  </div>
                  <div className='lorem2'>
                     <img src='./src/assets/lorem2.svg' alt='' />
                     <img src='./src/assets/lorem2.svg' alt='' />
                     <img src='./src/assets/lorem2.svg' alt='' />
                  </div>
               </div>
               <button className='button'>Read More</button>
            </div>
         </div>
         <img src='./src/assets/wave.svg' alt='' />
      </div>
   );
}

export default Expert;
