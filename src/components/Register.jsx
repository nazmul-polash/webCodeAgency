import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form"
import { userAuth } from "../context/AuthContext";
import Swal from 'sweetalert2';


const Register = () => {

   const navigate = useNavigate(); 

   const {register,handleSubmit,watch,formState: { errors }} = useForm()

   const { signupWithEmail } = userAuth();

   const onSubmit = async (data) => {
      try {
         await signupWithEmail(data.email, data.password)
         Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration successfull",
            showConfirmButton: false,
            timer: 1500
         });
         navigate("/login")

      } catch (error) {
         console.error("Registration failed", error.message);

      }
   }


   return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
         <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
               {/* <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                  <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded"
                     {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (<p className="text-sm text-red-600 italic">{errors.name.message}</p>)}
               </div> */}

               <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded"
                     {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Please entered a correct email" } })} />
                  {errors.email && (<p className="text-sm text-red-600 italic">{errors.email.message}</p>)}
               </div>
               <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                  <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded"
                     {...register("password", { required: "Password is required", pattern: { value: 8, message: "Please entered at least 8 charecters" } })} />
                  {errors.password && (<p className="text-sm text-red-600 italic">{errors.password.message}</p>)}
               </div>
               {/* <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="confirmPassword">Confirm Password</label>
                  <input type="password" id="confirmPassword" className="w-full p-2 border border-gray-300 rounded"
                     {...register("confirm_password", { required: "Confirm Password is required", minLength: { value: 8, message: "Please enter at least 8 characters" },
                        validate: (value) => value === watch("password") || "Passwords do not match" })}/>
                  {errors.confirm_password && ( <p className="text-sm text-red-600 italic">{errors.confirm_password.message}</p>)}
               </div> */}

               <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">Register</button>
            </form>

            <div className="text-center space-y-4">
               <p className="text-gray-600 mt-5">Or sign up with</p>
               <div className="space-x-4 flex justify-center">
                  <button className="btn btn-secondary"><FaGoogle /><span>Google</span></button>
                  <button className="btn btn-neutral"> <FaGithub /> <span>GitHub</span></button>
                  <button className="btn btn-info"><FaFacebook /> <span>Facebook</span></button>
               </div>
            </div>

            <p className="text-center font-semibold mt-5">Already have an account ? Plesas <Link to="/login" className="text-blue-700">Login.</Link> </p>
         </div>
      </div>
   );
}
export default Register;
