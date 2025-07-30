import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import { FiActivity, FiCompass, FiTruck, FiCalendar } from "react-icons/fi";

const Services = () => {
   const services = [
      {
         icon: FiCalendar,
         title: "Customizable Settings",
         description: "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui. ",
      },
      {
         icon: FiCompass,
         title: "Developer-Friendly",
         description: "Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur. ",
      },
      {
         icon: FiActivity,
         title: "Responsive Design",
         description: "Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque pellentesque id vulputate hendrerit. Donec ipsum nibh elementum platea proin egestas gravida consectetur sit.",
      },
      {
         icon: FiTruck,
         title: "Cloud Integration",
         description: "Pellentesque auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus etiam eget. Ultrices egestas a tristique aliquet odio varius. ",
      },
   ]
   return (
      <section className='container-section'>
         <div>
            <HeadingSection subHeading="Our Services" heading="Explore our range of professional services tailored to meet your busniness needs" headingDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus vero animi exercitationem voluptatem architecto. Nemo qui optio ipsum eum!" />
         </div>

         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 md:w-3/4 mx-auto mb-16'>
            {
               services.map((service, index) => (
                  <div key={index} className='flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer'>
                     <service.icon className='text-blue-600 text-4xl mb-4' />
                     <p className='text-gray-600 mt-2 md:px-10'>{service.description}</p>
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
   )
}

export default Services;