
import { FaBars } from 'react-icons/fa'

import Equipment from "../assets/Equipment.png"

import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  const location = useLocation();

  const isAboutPage = location.pathname === "/";

  return (

    <div className='w-full min-h-[80px] flex justify-between items-center text-white  absolute z-10 py-4'>

      {/* Desktop Navigation */}
      <ul className='flex md:hidden justify-center items-center flex-1'>
        <li className={`mx-4 hover:scale-125 duration-200 ${isAboutPage ? 'text-black' : 'text-white'}`}>
          <Link to={"/"}>About</Link>
        </li>

        <li className={`mx-4 hover:scale-125 duration-200 ${isAboutPage ? 'text-black' : 'text-white'}`}>
          <Link to={"/service-page"}>Services</Link>
        </li>
        <li>
          <img className='mx-10 hover:scale-125 duration-200' src={Equipment} alt="" />
        </li>

        <li className='mx-4 hover:scale-125 duration-200 '>
          <Link to={"/menu-page"}>Menu</Link>
        </li>

        <li className='mx-4 hover:scale-125 duration-200'>
          <Link to={"/training-page"}>Trainings</Link>
        </li>
        <li className='mx-4 hover:scale-125 duration-200'>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>


      {/* Hamburger Icon */}
      <div onClick={handleNav} className=' hidden md:flex z-10'>
        <FaBars size={20} color='brown' className='ml-4 cursor-pointer ' />
      </div>
      {/* Mobile Menu */}
      <div onClick={handleNav} className={nav ? 'overflow-y-hidden hidden ease-in duration-500 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 md:flex flex-col' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
        <ul className='h-full w-full text-center pt-12'>
          <li className='text-2xl py-8'>
            <Link to={"/"}>About</Link>
          </li>
          <li className='text-2xl py-8'>
            <Link to={"/service-page"}>Services</Link>
          </li>
          <li className='text-2xl py-8'>
            <Link to={"/menu-page"}>Menu</Link>
          </li>
          <li className='text-2xl py-8'>
            <Link to={"/training-page"}>Trainings</Link>
          </li>
          <li className='text-2xl py-8'>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar