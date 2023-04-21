import React from "react";

function Nav() {
   return (
      <div className='nav-container'>
         <div className='nav-items1'>
            <a href=''>
               <h3>Deltify.</h3>
            </a>
            <div className='items1'>
               <a href='#'>HOME</a>
               <a href='#'>ABOUT</a>
               <a href='#'>PAGES</a>
               <a href='#'>SERVICES</a>
               <a href='#'>PORTFOLIO</a>
               <a href='#'>BLOG</a>
               <a href='#'>CONTACT</a>
            </div>
         </div>
         <div className='nav-items2'>
            <a href=''>SAY HI</a>
         </div>
      </div>
   );
}

export default Nav;
