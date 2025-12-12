import React from "react";
import Logo from "../assets/logo.png";      
import teksRE from "../assets/teksRE.png"; 

export default function Navbar() {
  return (
    <nav className="bg-white shadow-neutral-700/30 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src={Logo}
              alt="Logo 1"
              className="h-10 w-auto object-contain"
            />
            <img
              src={teksRE}
              alt="Logo 2"
              className="h-10 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex space-x-6 text-gray-700">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">About</a>
            <a href="#" className="hover:text-blue-600">Program</a>
            <a href="#" className="hover:text-blue-600">News</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </div>

        </div>

      </div>
    </nav>
  );
}