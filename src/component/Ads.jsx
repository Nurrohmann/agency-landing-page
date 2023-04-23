import React from "react";

function Ads() {
   return (
      <div>
         <div className='ads-container'>
            <div className='ads-items1'>
               <p className='p1'>More we offer!</p>
               <h2>
                  Engaging Video Ads Which Will Explode Your{" "}
                  <strong className='sales'>Sales</strong>
               </h2>
               <p className='p2'>
                  We offers whitening in a professional Solid Brush for fast,
                  safe, and effective results after 10 days.
               </p>
               <div className='ads-items2'>
                  <div className='ads1'>
                     <div className='flex1'>
                        <img src='./src/assets/vector.svg' alt='' />
                        <p>65.00 EUR</p>
                     </div>
                     <div className='flex2'>
                        <img src='./src/assets/vector2.svg' alt='' />
                        <p>120.00 EUR</p>
                     </div>
                  </div>
                  <div className='ads2'>
                     <img src='./src/assets/Group.svg' alt='' />
                     <p>2-minute timer with 30-second pulses</p>
                  </div>
                  <div className='ads3'>
                     <img src='./src/assets/Group.svg' alt='' />
                     <p>Whiter Teeth In 10 Days</p>
                  </div>
                  <div className='ads4'>
                     <img src='./src/assets/Group.svg' alt='' />
                     <p>Waterproof & shower-safe</p>
                  </div>
                  <div className='button-container'>
                     <button className='button'>Get It Now!</button>
                  </div>
                  <div className='ads5'>
                     <img src='./src/assets/Group.svg' alt='' />
                     <p>30 Day Money Back Guarantee</p>
                  </div>
               </div>
            </div>
            <div className='image-container'>
               <img className='img' src='./src/assets/team.png' alt='' />
            </div>
         </div>
         <img src='./src/assets/wave2.svg' alt='' />
      </div>
   );
}

export default Ads;
