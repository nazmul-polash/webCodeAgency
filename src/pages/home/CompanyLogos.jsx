import HeadingSection from "../../components/HeadingSection";

import { FaAmazon, FaApple, FaFacebook, FaGoogle, FaMicrosoft } from "react-icons/fa";
const CompanyLogos = () => {
   const logos = [
      { icon: FaApple, name: "Apple" },
      { icon: FaGoogle, name: "Google" },
      { icon: FaMicrosoft, name: "Microsoft" },
      { icon: FaAmazon, name: "Amazon" },
      { icon: FaFacebook, name: "Facebook" }
   ]
   return (
      <section className=" bg-colorbg ">
         <div className="max-w-screen-2xl container mx-auto px-5 py-20">
            <div>
               <HeadingSection
                  subHeading="Companies we've work with" heading="Ours Trusted Partners" headingDesc="We've partnered with some of the most innovative and leading companies to bring the best solutions to you" />

            </div>
            <div className="relative overflow-hidden border-y-[1px] p-8">  
               <div className="flex justify-around items-center md:space-x14 space-x-8 animate-scroll">
                  {
                     logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center bg-white rounded-full p-6 w-28 h-28 hover:scale-110 transition transform duration-300 ">
                           <logo.icon className="text-blue-500 text-4xl" title={logo.name} />
                        </div>
                     ))
                  }
               </div>
            </div>
         </div>
      </section>
   );
}

export default CompanyLogos;