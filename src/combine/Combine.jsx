import React from "react";
import Nav from "../component/Nav";
import Hero from "../component/Hero";
import Expert from "../component/Expert";
// import Wave from "../component/Wave";
import Offer from "../component/Offer";
import Ads from "../component/Ads";
import Site from "../component/Site";
import Faq from "../component/Faq";
import Subscribe from "../component/Subscribe";

function Combine() {
   return (
      <div>
         <Nav />
         <Hero />
         <Expert />
         {/* <Wave /> */}
         <Offer />
         <Ads />
         <Site />
         <Faq />
         <Subscribe />
      </div>
   );
}

export default Combine;
