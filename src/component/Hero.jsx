import React from "react";

function Hero() {
   return (
      <div className='hero-container'>
         <div className='hero-items1'>
            <h1>
               Let’s Sky <span className='span'> Rocket</span> Your{" "}
               <span className='span'> Revenue </span>
            </h1>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam Lorem ipsum dolor sit amet.
            </p>
            <div className='lorem'>
               <img src='./src/assets/lorem.svg' alt='' />
               <img src='./src/assets/lorem.svg' alt='' />
            </div>
            <button className='button'>Get Started</button>
         </div>
         <div className='hero-items2'>
            <img src='./src/assets/rocket.png' alt='' />
         </div>
      </div>
   );
}

export default Hero;
