import React, { useState } from 'react'
import HeadingSection from '../../components/HeadingSection'

const Price = () => {
   const pricingPlans = [
      {
         name: "Freelancer",
         monthlyPrice: 25,
         yearlyPrice: 250, // 25 * 12
         saves: "$25 USD per month, paid annually",
         features: [
            "1 Project",
            "Basic Support",
            "Access to all templates",
            "5GB Storage",
         ],
      },
      {
         name: "Professional",
         monthlyPrice: 65,
         yearlyPrice: 650, // 65 * 12
         saves: "$55 USD per month, paid annually",
         features: [
            "5 Projects",
            "Priority Support",
            "Access to all templates",
            "25GB Storage",
            "Advanced Analytics",
         ],
      },
      {
         name: "Agency",
         monthlyPrice: 95,
         yearlyPrice: 950, // 95 * 12
         saves: "$95 USD per month, paid annually",
         features: [
            "Unlimited Projects",
            "24/7 Support",
            "Access to all templates",
            "Unlimited Storage",
            "Custom Branding",
            "Team Collaboration",
         ],
      },
   ]
   const [isYearly, setIsYearly] = useState(false);
   return (
      <section className='container-section'>
         <div>
            <HeadingSection subHeading="Pricing Plans" heading="Choose Your Plan" headingDesc="Our pricing plans are flexible and designed to fit your needs. Choose a plan that works best for you." />
         </div>
         <div className='text-center mb-8'>
            <label>
               <span className='pr-3 text-lg text-gray-600 font-semibold'>{isYearly ? 'Yearly Pricing' : 'Monthly Pricing'}</span>
               <input type="checkbox" className="toggle text-blue-600 bg-gray-300 checked:text-blue-600 checked:bg-gray-300" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
            </label>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto mb-16">
            {
               pricingPlans.map((price, index) => (
                  <div className="card bg-white shadow-lg hover:shadow-xl border border-gray-200 transition-shadow duration-300" key={index}>
                     <div className="card-body">
                        <div className="text-center">
                           <h2 className="text-2xl font-bold mb-3">{price.name}</h2>
                           <p className='text-gray-500 mb-2'>Best for {price.name.toLocaleLowerCase()}</p>
                           <div className='text-2xl font-bold my-4'>$
                              {
                                 isYearly ? price.yearlyPrice : price.monthlyPrice
                              }
                              <span className='text-lg font-normal'>/
                                 {
                                    isYearly ? 'year' : 'month'
                                 }
                              </span>
                           </div>
                           <div className='text-sm text-gray-500 mb-3'>
                              {
                                 isYearly && <span className='text-sm text-gray-500 mb-3'>{price.saves}</span>
                              }
                           </div>
                           <div>
                              <button className='btn btn-primary rounded-full'>Choose {price.name}</button>
                           </div>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">

                           {
                              price.features.map((feature, index) => (
                                 <li key={index} className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{feature}</span>
                                 </li>
                              ))
                           }

                        </ul>
                     </div>
                  </div>
               ))
            }
         </div>
      </section>
   )
}

export default Price