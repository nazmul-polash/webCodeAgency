import { useState } from "react";
import HeadingSection from "../../components/HeadingSection";


const FAQs = () => {
   const faqs = [
      {
         id: 1,
         question: "Who should use the app?",
         answer: "Our app is designed for freelancers, professionals, and agencies looking to streamline their workflow, manage projects efficiently, and deliver quality results. It's ideal for anyone in need of project management and collaboration tools."
      },
      {
         id: 2,
         question: "What is included with my subscription?",
         answer: "Your subscription includes access to all the tools for project management, communication features, real-time collaboration, and unlimited access to templates, along with customer support based on your plan."
      },
      {
         id: 3,
         question: "How do I get paid?",
         answer: "Payments are processed through secure payment gateways such as PayPal, Stripe, or bank transfer. You can track your earnings directly through your account dashboard."
      },
      {
         id: 4,
         question: "Is my personal information safe?",
         answer: "Yes! We take your privacy seriously. We use encryption and secure payment methods to ensure your data and personal information are protected at all times."
      },
      {
         id: 5,
         question: "How can we get in touch?",
         answer: "You can contact us via email at support@ourapp.com, or through our live chat available on the website. Our support team is always ready to assist you with any queries you may have."
      }
   ];
   const [expandedFAQ, isExpandedFAQ] = useState(null);

   const toggleFAQ = (id) => {
      if (expandedFAQ === id) {
         isExpandedFAQ(null)
      } else {
         isExpandedFAQ(id)
      }
   }
   return (
      <section className="bg-colorbg">
         <div className="container-section">
            <div>
               <HeadingSection subHeading="FAQs" heading="Frequently asked questions" />
            </div>
            <div className="w-full max-w-4xl mx-auto mt-8">
               {
                  faqs.map((faq) => (
                     <div className="border border-gray-300 mb-4" key={faq.id}>
                        <div className="flex justify-between p-4 bg-gray-50 hover:bg-gray-300 transition duration-200" onClick={() =>toggleFAQ(faq.id)}>
                           <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                           <span className={`transform transition duration-200 text-lg font-bold ${expandedFAQ === faq.id ? 'rotate-180': ''}`}>{expandedFAQ === faq.id ? "-": "+" }</span>
                        </div>
                        <div>
                           {expandedFAQ === faq.id && (
                              <div className="p-4 bg-white">
                                 <p className="text-gray-600">{faq.answer}</p>
                              </div>
                           )}
                        </div>
                     </div>
                  ))
               }
            </div>
         </div>
      </section>
   )
}
export default FAQs;