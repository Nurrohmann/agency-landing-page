import React from "react";

function Subscribe() {
   return (
      <div className='subscribe-container'>
         <div className='subscribe-items'>
            <p className='p1'>NEWSLETTER</p>
            <h1 className='subscribe'>Subscribe Our Newsletter</h1>
            <p className='p2'>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
               explicabo voluptas nisi iste reiciendis, tempore commodi
               necessitatibus, laborum laudantium.
            </p>
            <div className='input'>
               <input type='text' placeholder={"Enter email..."} />
               <button>Subscribe</button>
            </div>
         </div>
      </div>
   );
}

export default Subscribe;
