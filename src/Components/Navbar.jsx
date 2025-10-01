import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r bg-sky-500  text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <img src={Logo} alt="logo" className="w-15 h-15 mr-2"></img>
        <div className="text-2xl font-bold mr-[40rem]">Weatherly</div>

        {/* Links */}
        <div className="flex space-x-12 text-xl text-amber-50 ">
        <Link to = "/Main"  className='text-lg hover:scale-110 duration-200 cursor-pointer'>HOME</Link>
        <Link to = "/Favourites" className='text-lg hover:scale-120 duration-200 cursor-pointer ' > FAVOURITES </Link>
        <Link to = "/About" className='text-lg hover:scale-110 duration-200 cursor-pointer' > ABOUT </Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
