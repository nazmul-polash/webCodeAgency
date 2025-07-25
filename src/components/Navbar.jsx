import React from 'react'
import { Link } from 'react-router';

const Navbar = () => {
   return (
      <div className="navbar max-w-screen-2xl container mx-auto px-5 bg-white">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/blogs">Blogs</Link></li>
                  <li>
                     <details>
                        <summary>Categories</summary>
                        <ul className="p-2">
                           <li><Link to="/">Web Desing</Link></li>
                           <li><Link to="/">App Development</Link></li>
                           <li><Link to="/">UI/UX Design</Link></li>
                           <li><Link to="/">Digital Marketing</Link></li>
                        </ul>
                     </details>
                  </li>
               </ul>
            </div>
            <Link to="/" className="text-xl font-bold flex">
               <img src="/logo.png" alt="" />
               <span className='ml-2 text-[#697077] hidden lg:block'>webCode</span>
            </Link>
         </div>

         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold dark:text-black">
               <li><Link to="/" >Home</Link></li>
               <li><Link to="/services">Services</Link></li>
               <li><Link to="/blogs">Blogs</Link></li>
               <li>
                  <details>
                     <summary>Categories</summary>
                     <ul className="p-2">
                        <li><Link to="/">Web Desing</Link></li>
                        <li><Link to="/">App Development</Link></li>
                        <li><Link to="/">UI/UX Design</Link></li>
                        <li><Link to="/">Digital Marketing</Link></li>
                     </ul>
                  </details>
               </li>
            </ul>
         </div>

         <div className="navbar-end space-x-3">
            <Link to="/login" className='btn btn-outline btn-primary px-8 hidden sm:flex'>Log In</Link>
            <Link to="/pricing" className='btn btn-primary bg-primary px-8'>Free Trail</Link>
         </div>
         
      </div>
   );
};

export default Navbar;