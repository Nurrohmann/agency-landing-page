import React from "react";

function Offer() {
   return (
      <div className='offer-container'>
         <div className='offer-items1'>
            <p>PACKAGES</p>
            <h4>
               Choose The Package That's
               <span className='span'> Right For You!</span>
            </h4>
            <div className='offer-items2 '>
               <div className='items2'>
                  <h2>Simplify</h2>
                  <div className='salary'>
                     <p className='dolar'>
                        <strong>$</strong>
                     </p>
                     <p className='p'>
                        <strong> 299</strong>
                     </p>
                  </div>
                  <p>In This Package</p>
                  <img src='./src/assets/lorem5.svg' alt='' />
                  <div className='button-container'>
                     <button className='button'>Buy Now</button>
                  </div>
               </div>
               <div className='items3'>
                  <p className='most'>Most Popular</p>
                  <h2>Bledify</h2>
                  <div className='salary'>
                     <p className='dolar'>
                        <strong>$</strong>
                     </p>
                     <p className='p'>
                        <strong>399</strong>
                     </p>
                  </div>
                  <p>In This Package</p>
                  <img src='./src/assets/lorem3.svg' alt='' />
                  <div className='button-container'>
                     <button className='button'>Buy Now</button>
                  </div>
               </div>
               <div className='items4'>
                  <p className='recomended'>Recomended</p>
                  <h2>Rockify</h2>
                  <div className='salary'>
                     <p className='dolar'>
                        <strong>$</strong>
                     </p>
                     <p className='p'>
                        <strong>499</strong>
                     </p>
                  </div>
                  <p>In This Package</p>
                  <img src='./src/assets/lorem4.svg' alt='' />
                  <div className='button-container'>
                     <button className='button'>Buy Now</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Offer;
