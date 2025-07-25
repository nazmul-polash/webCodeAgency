import React from "react"; 
import Hero from "./Hero";
import ToolsSection from "./ToolsSection";
import CompanyLogos from "./CompanyLogos";
import ServiceSection from "./ServiceSection";


const Home = () => {
   return (
      <>
         <Hero />
         <ToolsSection />
         <CompanyLogos />
         <ServiceSection />
      </>
   )
}

export default Home;