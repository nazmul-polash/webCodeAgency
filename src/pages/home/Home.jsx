import React from "react"; 
import Hero from "./Hero";
import ToolsSection from "./ToolsSection";
import CompanyLogos from "./CompanyLogos";
import ServiceSection from "./ServiceSection";
import Testimonial from "./Testimonial";
import Blog from "../blog/Blog";
import Teams from "./Teams";


const Home = () => {
   return (
      <>
         <Hero />
         <ToolsSection />
         <CompanyLogos />
         <ServiceSection />
         <Testimonial />
         <Blog />
         <Teams />
      </>
   )
}

export default Home;