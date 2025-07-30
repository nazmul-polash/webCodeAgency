

const Register = () => {
   return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
         <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <form>
               <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                  <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" required />
               </div>
               <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
               </div>
               <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                  <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded" required />
               </div>
               <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">Register</button>
            </form>
         </div>
      </div>
   );
}  
export default Register;
