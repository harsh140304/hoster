import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <div className='flex justify-between'>
     <div className='flex items-center justify-center gap-2'>
     <Link to="/">
  <img src="src/assets/Logo.svg" alt="Logo" className="cursor-pointer" />
</Link>
      <button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl'>Hoster is Hiring</button>
     </div>
     <ul className='hidden lg:flex justify-between item-center text-gray-400 gap-6'>
      <li><Link to="/Plans">Plans</Link></li>
      <li>
          <Link to="/find-domain">Find Domain</Link>
        </li>
        <Link to="/why-hoster">Why Hoster</Link>
     </ul>
     <div className='hidden lg:flex justify-center items-center gap-6'>
     <Link to="/sign-in" className="text-gray-400">
          Sign In
        </Link>
      <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white' onClick={() => alert("Thanks for joining the waitlist!")}>Join Waitlist</button>
     </div>
     <div className='lg:hidden'>
     <button onClick={()=>{
      setIsMenuOpen(!isMenuOpen)
     }}>
     <FaBars/>
     </button>
     </div>
    </div>
    <div
  className={`fixed top-4 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 rounded-xl ${
    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
  } lg:hidden`}
>
  <div className="flex flex-col p-6 gap-4 text-gray-700">
    <button onClick={() => setIsMenuOpen(false)} className="self-end text-xl">✕</button>
    <Link to="/Plans">Plans</Link>
    <Link to="/find-domain">Find Domain</Link>
    <Link to="/why-hoster">Why Hoster</Link>
    <Link to="/sign-in" className="text-gray-400">
          Sign In
        </Link>
    <button onClick={() => alert("Thanks for joining the waitlist!")}
    className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
  </div>
</div>

    </>
  )
}

export default Header
