import { Link } from "react-router";
import HeadingSection from "../../components/HeadingSection";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";


const Teams = () => {
   const teams = [
      {
         id: 1,
         image: "/images/members/person1.png",
         name: "John Doe",
         role: "CEO",
         linkedIn: "https://linkedin.com/in/johndoe",
         twitter: "https://twitter.com/johndoe",
         instagram: "https://instagram.com/johndoe",
         facebook: "https://facebook.com/johndoe",
      },
      {
         id: 2,
         image: "/images/members/person2.png",
         name: "Jane Smith",
         role: "CTO",
         linkedIn: "https://linkedin.com/in/janesmith",
         twitter: "https://twitter.com/janesmith",
         instagram: "https://instagram.com/janesmith",
         facebook: "https://facebook.com/janesmith",
      },
      {
         id: 3,
         image: "/images/members/person3.png",
         name: "Mark Johnson",
         role: "Designer",
         linkedIn: "https://linkedin.com/in/markjohnson",
         twitter: "https://twitter.com/markjohnson",
         instagram: "https://instagram.com/markjohnson",
         facebook: "https://facebook.com/markjohnson",
      },
      {
         id: 4,
         image: "/images/members/person4.png",
         name: "Emily Carter",
         role: "Developer",
         linkedIn: "https://linkedin.com/in/emilycarter",
         twitter: "https://twitter.com/emilycarter",
         instagram: "https://instagram.com/emilycarter",
         facebook: "https://facebook.com/emilycarter",
      },
   ]
   return (
      <section className="bg-colorbg">
         <div className="container-section">


            <div>
               <HeadingSection subHeading="Our Teams" heading="Meets the Exparts" />
            </div>

            <div>
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mx-auto mb-16'>
                  {
                     teams.map((team, index) => (
                        <div key={index} className="card bg-base-100  shadow hover:shadow-lg transition-shadow duration-300">
                           <figure>
                              <img
                                 src={team.image}
                                 alt="Shoes" className='w-full h-48 object-cover hover:scale-105 transaction transform duration-200' />
                           </figure>
                           <div className="card-body">
                              <h2 className="card-title text-blod font-bold">{team.name}</h2>
                              <h5 className='text-sm text-blue-800 font-semibold'>{team.role}</h5>
                              <div className="card-actions justify-start mt-4">
                                 <div className='flex items-center space-x-4 gap-4'>
                                    {
                                       team.linkedIn && <Link to={team.linkedIn}><FaLinkedinIn className='text-blue-600 hover:text-blue-800' /></Link>
                                    }
                                    {
                                       team.twitter && <Link to={team.twitter}><FaTwitter className='text-blue-400 hover:text-blue-600' /></Link>
                                    }
                                    {
                                       team.instagram && <Link to={team.instagram}><FaInstagram className='text-pink-500 hover:text-pink-700' /></Link>
                                    }
                                    {
                                       team.facebook && <Link to={team.facebook}><FaFacebookF className='text-blue-800 hover:text-blue-900' /></Link>
                                    }

                                 </div>
                              </div>
                              <div className="mt-4">
                                    <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 px-8 rounded-full border-none">Contact {team.name.split(" ")[0]}</button>
                                 </div>
                           </div>
                        </div>
                     ))
                  }
               </div>
            </div>
         </div>
      </section>
   )
}

export default Teams;