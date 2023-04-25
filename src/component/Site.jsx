import React from "react";

function Site() {
   return (
      <div className='site-container'>
         <div className='site-items1'>
            <p className='p1'>SITE CONTENT</p>
            <h1>Because You're Worth It!</h1>
            <p className='p2'>
               Our product have all nature ingredients that satisfy all your
               needs
            </p>
            <div className='img-container'>
               <img src='./src/assets/organic.svg' alt='' />
               <img src='./src/assets/high.svg' alt='' />
               <img src='./src/assets/best.svg' alt='' />
            </div>
         </div>
      </div>
   );
}

export default Site;
