import { signInWithEmailAndPassword } from "firebase/auth";
import { userAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useState } from "react";

const Login = () => {
   const { register, handleSubmit, watch, formState: { errors }, } = useForm();
   const { loginWithEmail, googleLogin } = userAuth();

   const [error, setError] = useState("");

   const navigate = useNavigate();

   const onSubmit = async (data) => {
      try {
         await loginWithEmail(data.email, data.password);
         Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login successfull",
            showConfirmButton: false,
            timer: 1500
         });
         setError("")
         navigate("/dashboard")
      } catch (error) {
         console.error("Login Failed", error);
         setError('Login failded, Please enter correct email and password');
      }

   }

   // google login  
   const handleGoogleLogin = async () => {
      try {
         await googleLogin();
      } catch (error) {
         console.error('Google Login Failed');
      }
   }

   return (
      <div className="flex items-center justify-center  min-h-screen bg-gray-100">
         <div className="w-full max-w-md space-y-6 bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800">Login Page</h2>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
               <div>
                  <label className="block mb-2 text-lg font-semibold text-gray-700">Email:</label>
                  <input
                     type="email"
                     className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                     {...register("email", {
                        required: "Email is required",
                        pattern: {
                           value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                           message: "Please enter a valid email address"
                        }
                     })}
                  />
                  {errors.email && <p className="text-sm italic text-red-500">{errors.email.message}</p>}
               </div>
               <div>
                  <label className="block mb-2 text-lg font-semibold text-gray-700">Password:</label>
                  <input
                     type="password"
                     className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                     {...register("password", {
                        required: "Password is required",
                        minLength: {
                           value: 8,
                           message: "Password must be at least 8 characters"
                        }
                     })}
                  />
                  {errors.password && <p className="text-sm italic text-red-500">{errors.password.message}</p>}
               </div>
               {error && <p className="text-sm text-red-600 italic">{ error}</p>}
               <div>
                  <button type="submit" className="btn btn-primary w-full rounded-md"> Login  </button>
               </div>
            </form>

            <div className="text-center space-y-4">
               <p className="text-gray-600 ">Or sign up with</p>
               <div className="space-x-4 flex justify-center">
                  <button onClick={handleGoogleLogin} className="btn btn-secondary"><FaGoogle /><span>Google</span></button>
                  <button className="btn btn-neutral"> <FaGithub /> <span>GitHub</span></button>
                  <button className="btn btn-info"><FaFacebook /> <span>Facebook</span></button>
               </div>
            </div>
            <p className="text-center font-semibold">You have no account ? Plesas <Link to="/register" className="text-blue-700">Register.</Link> </p>
         </div>

      </div>
   );
}

export default Login;