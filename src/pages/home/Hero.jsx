import React, { useState } from 'react'
import { FiArrowRight } from "react-icons/fi";
import { FaRegPlayCircle } from "react-icons/fa";
import bannarImage from "../../assets/banner.png";

const Hero = () => {
   const [showModal, setShowModal] = useState(false);
   const openModal = () => setShowModal(true);
   const closeModal = () => setShowModal(false);
   return (
      <>
         <div className=' bg-colorbg '>
            <div className='max-w-screen-2xl mx-auto px-5 py-20 flex flex-col lg:flex-row items-center justify-between'>
               <div className='text-center lg:text-left lg:w-1/2'>
                  <h1 className='text-4xl font-bold text-gray-800 mb-8'>Creative Web Design For <br /> Businesses</h1>
                  <p className='text-gray-700 mb-8 text-lg'>Unlock your design skills to create beautiful websites and apps with a <br /> poweful and easy-to-use tool.</p>
                  <div>
                     <button className='btn btn-primary bg-primary px-8 mr-3'>
                        Get Started
                        <FiArrowRight />
                     </button>
                     <button className='btn btn-outline btn-primary px-8'>Contact Us</button>
                  </div>
               </div>
               <div className='lg:w-1/2 mt-10 lg:mt-0 flex justify-end'>
                  <div className='relative group'>
                     <img src={bannarImage} alt="Hero Image" className='w-full rounded-lg shadow-lg' />
                     <button onClick={openModal} className='absolute inset-0 flex items-center justify-center rounded-lg group-hover:opacity-80 transition z-0'>
                        <FaRegPlayCircle className='text-white text-5xl hover:text-blue-600 transform ' />
                     </button>
                  </div>
               </div>

               {showModal && (
                  <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                     <div className='bg-white rounded-lg  p-5 inset-0 w-full max-w-xl relative'>
                        <iframe className='w-full aspect-video' width="560" height="315" src="https://www.youtube.com/embed/KM3j_TXeqfc?si=Y8oeOF7YXz3XQRVX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                     <button onClick={closeModal} className='absolute right-2 top-2 px-2 text-white text-lg hover:text-white font-bold bg-black rounded-full'>&times;</button>
                     </div>
                  </div>
               )

               }
            </div>

         </div>
      </>
   )
}

export default Hero