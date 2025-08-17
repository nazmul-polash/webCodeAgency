
const HeadingSection = (props) => {
   
   return (
      <div className="text-center mb-12">
         <p className=" font-semibold text-primary uppercase">{props.subHeading}</p>
         <h2 className="text-3xl lg:text-4xl font-bold mt-3 sm:w-3/4 leading-normal lg:leading-snug capitalize mx-auto">{props.heading}</h2>
         {
            props.headingDesc && <p className=" text-gray-600 mt-4 sm:w-3/5 text-base mx-auto ">{props.headingDesc}</p>
         }
      </div>
   )
}
export default HeadingSection;