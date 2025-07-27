import HeadingSection from "../../components/HeadingSection";


const Testimonial = () => {
   return (
      <section className="bg-colorbg">
         <div className="container-section">

            <div>
               <HeadingSection subHeading="Testimonials" heading="What Our Clients Say" />
            </div>

            <div>
               <div className="carousel w-full">
                  <div id="slide1" className="carousel-item md:space-x-8 relative w-full">
                     <div className="bg-white md:w-1/2 rounded-md shadow md:p-8 p-4">
                        <img src="/images/logos/logo1.png" className="size-28 mx-auto my-2 object-contain" />
                        <p className="text-gray-600 italic mb-4 md:w-3/4 mx-auto">Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu.
                           Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.
                        </p>
                        <div className="flex flex-col items-center space-y-2">
                           <div className="size-12 bg-blue-300 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold">J</div>
                           <h3 className="text-lg font-bold text-gray-800">John Doe</h3>
                           <p className="text-gray-500 text-sm">Marketing Lead, PixelWave</p>
                        </div>
                     </div>

                     <div className="bg-white md:w-1/2 rounded-md shadow md:p-8 p-4">
                        <img src="/images/logos/logo2.png" className="size-28 mx-auto my-2 object-contain" />
                        <p className="text-gray-600 italic mb-4 md:w-3/4 mx-auto">Nisl vitae viverra dignissim nibh. Nibh imperdiet integer vitae consequat adipiscing pellentesque. Sed amet tincidunt morbi non sed donec mollis pharetra neque.
                        </p>
                        <div className="flex flex-col items-center space-y-2">
                           <div className="size-12 bg-blue-300 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold">E</div>
                           <h3 className="text-lg font-bold text-gray-800">Everlee Pratt</h3>
                           <p className="text-gray-500 text-sm">CTO, CloudSync</p>
                        </div>
                     </div>

                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                     </div>
                  </div>
                  <div id="slide2" className="carousel-item  md:space-x-8 relative w-full">
                     <div className="bg-white md:w-1/2 rounded-md shadow md:p-8 p-4">
                        <img src="/images/logos/logo1.png" className="size-28 mx-auto my-2 object-contain" />
                        <p className="text-gray-600 italic mb-4 md:w-3/4 mx-auto">Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu.
                           Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.
                        </p>
                        <div className="flex flex-col items-center space-y-2">
                           <div className="size-12 bg-blue-300 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold">C</div>
                           <h3 className="text-lg font-bold text-gray-800">Callie Gross</h3>
                           <p className="text-gray-500 text-sm">Product Manager, TechNova</p>
                        </div>
                     </div>

                     <div className="bg-white md:w-1/2 rounded-md shadow md:p-8 p-4">
                        <img src="/images/logos/logo1.png" className="size-28 mx-auto my-2 object-contain" />
                        <p className="text-gray-600 italic mb-4 md:w-3/4 mx-auto">Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu.
                           Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.
                        </p>
                        <div className="flex flex-col items-center space-y-2">
                           <div className="size-12 bg-blue-300 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold">A</div>
                           <h3 className="text-lg font-bold text-gray-800">Ariya Rich</h3>
                           <p className="text-gray-500 text-sm">CEO, BrightApps</p>
                        </div>
                     </div>
                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                     </div>
                  </div>
                  <div id="slide3" className="carousel-item  md:space-x-8 relative w-full">
                     <div className="bg-white md:w-1/2 rounded-md shadow md:p-8 p-4">
                        <img src="/images/logos/logo1.png" className="size-28 mx-auto my-2 object-contain" />
                        <p className="text-gray-600 italic mb-4 md:w-3/4 mx-auto">Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu.
                           Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.
                        </p>
                        <div className="flex flex-col items-center space-y-2">
                           <div className="size-12 bg-blue-300 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold">R</div>
                           <h3 className="text-lg font-bold text-gray-800">Reyna Bond</h3>
                           <p className="text-gray-500 text-sm">CTO, CloudSync</p>
                        </div>
                     </div>

                     <div className="bg-white md:w-1/2 rounded-md shadow md:p-8 p-4">
                        <img src="/images/logos/logo1.png" className="size-28 mx-auto my-2 object-contain" />
                        <p className="text-gray-600 italic mb-4 md:w-3/4 mx-auto">Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu.
                           Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.
                        </p>
                        <div className="flex flex-col items-center space-y-2">
                           <div className="size-12 bg-blue-300 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold">V</div>
                           <h3 className="text-lg font-bold text-gray-800">Valery Townsend</h3>
                           <p className="text-gray-500 text-sm">Marketing Lead, PixelWave</p>
                        </div>
                     </div>
                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                     </div>
                  </div>
                  <div id="slide4" className="carousel-item  md:space-x-8 relative w-full">
                     <div className="bg-white md:w-1/2 rounded-md shadow md:p-8 p-4">
                        <img src="/images/logos/logo1.png" className="size-28 mx-auto my-2 object-contain" />
                        <p className="text-gray-600 italic mb-4 md:w-3/4 mx-auto">Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu.
                           Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.
                        </p>
                        <div className="flex flex-col items-center space-y-2">
                           <div className="size-12 bg-blue-300 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold">A</div>
                           <h3 className="text-lg font-bold text-gray-800">Alexis Fitzpatrick</h3>
                           <p className="text-gray-500 text-sm">Role</p>
                        </div>
                     </div>

                     <div className="bg-white md:w-1/2 rounded-md shadow md:p-8 p-4">
                        <img src="/images/logos/logo1.png" className="size-28 mx-auto my-2 object-contain" />
                        <p className="text-gray-600 italic mb-4 md:w-3/4 mx-auto">Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu.
                           Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.
                        </p>
                        <div className="flex flex-col items-center space-y-2">
                           <div className="size-12 bg-blue-300 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold">M</div>
                           <h3 className="text-lg font-bold text-gray-800">Melissa Perez</h3>
                           <p className="text-gray-500 text-sm">Head of Operations, NextGen</p>
                        </div>
                     </div>
                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                     </div>
                  </div>

               </div>
            </div>
         </div>

      </section >
   )
}
export default Testimonial;