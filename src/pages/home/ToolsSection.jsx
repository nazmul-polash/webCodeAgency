
import { FiSettings, FiCode, FiSmartphone, FiCloud, FiArrowRight } from "react-icons/fi";

const tools = [
   {
      icon: FiSettings,
      title: "Customization Settings",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
   },
   {
      icon: FiCode,
      title: "Developer Friendly",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
   },
   {
      icon: FiSmartphone,
      title: "Responsive Design",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
   },
   {
      icon: FiCloud,
      title: "Cloud Integration",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
   },
]

const ToolsSection = () => {
   return (
      <>
         <section className="max-w-screen-2xl container mx-auto px-5 py-20">
            <div className="text-center mb-10">
               <h5 className="text-xl font-bold">The tools you need</h5>
               <h1 className="text-4xl font-bold">All-in-One Solution for Your Projects</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
               {
                  tools.map((tool, index) => (
                     <div key={index} className="flex flex-col items-center bg-white p-5 rounded-lg shadow-lg mb-5 hover:shadow-xl transition">
                        <tool.icon className="text-4xl text-primary mb-3" />
                        <h3 className="text-xl font-semibold">{tool.title}</h3>
                        <p className="text-gray-600">{tool.desc}</p>
                     </div>
                  ))
               }
            </div>
            <div className="text-center mt-10">
               <button className='btn btn-primary bg-blue-600 hover:bg-blue-700 px-8 mr-3'>
                  Explore More
               </button>
            </div>
         </section>
      </>
   )
}

export default ToolsSection;