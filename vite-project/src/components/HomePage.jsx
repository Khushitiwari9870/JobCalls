import React from "react";
// import homepageImage from "../assets/homepage.png";
import { SiWipro } from "react-icons/si";
import { SiTcs } from "react-icons/si";
import { SiTata } from "react-icons/si";
import { MdPhoneForwarded } from "react-icons/md";



export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-blue-300">
  
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white">
        {/* Logo */}
        <div className="flex items-end space-x-1">
   

          <span className="text-blue-600 text-5xl font-bold">JOBS </span>
             <MdPhoneForwarded className="text-green-600 w-8 h-8" />
            
             <span className="text-red-500 text-3xl relative top-2  font-bold">CALL </span>
             
        </div>
        

        {/* Menu Items */}
        <ul className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
          <li className="cursor-pointer hover:text-green-600">Jobs ▾</li>
          <li className="flex items-center space-x-1 cursor-pointer hover:text-green-600">
            <span>Job Prep</span>
            <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-md">NEW</span>
          </li>
          <li className="flex items-center space-x-1 cursor-pointer hover:text-green-600">
            <span>Contests</span>
            <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-md">NEW</span>
          </li>
          <li className="flex items-center space-x-1 cursor-pointer hover:text-green-600">
            <span>Degree</span>
            <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-md">NEW</span>
          </li>
          <li className="cursor-pointer hover:text-green-600">Resume Tools ▾</li>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-green-600">Employer Login</button>
          <button className="bg-green-600 text-white px-4 py-1.5 rounded-md hover:bg-green-700">
            Candidate Login
          </button>
        </div>
      </nav>

      {/* Blue Banner */}
      <div className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="flex items-center space-x-2 font-semibold">
          <span className="bg-white text-blue-600 text-xs px-2 py-0.5 rounded">ai</span>
          <span>Job Prep</span>
          <span className="bg-white text-blue-600 text-xs px-2 py-0.5 rounded">NEW</span>
          <span className="ml-2">Practice interviews with AI Coach</span>
        </div>
        <div className="flex items-center space-x-3">
          {/* Replace with logos */}
          <div className="flex space-x-2">
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow"><img src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000" alt="Apple logo" /></div>
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow"><SiTata className="text-blue-600 w-9 h-9" />
</div>
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow">  <SiWipro className="text-black w-9 h-9 " /> </div>
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow"><SiTcs className="text-red-600 w-7 h-7" />
</div>
          </div>
          <button className="bg-white text-purple-600 px-4 py-1.5 rounded-md font-medium hover:bg-gray-100">
            Practice for free
          </button>
        </div>
      </div>
     

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-10 px-6 lg:px-20 py-12 max-w-7xl mx-auto">
        {/* Left Side Text */}
        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
          <h4 className="text-green-700 font-semibold text-sm md:text-base">INDIA'S #1 JOB PLATFORM</h4>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Your job search ends here
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Discover 50 lakh+ career opportunities
          </p>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 mt-6">
            <input
              type="text"
              placeholder="Search jobs by 'title'"
              className="border rounded-md px-4 py-3 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Your Experience"
              className="border rounded-md px-4 py-3 w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Search for an area or location"
              className="border rounded-md px-4 py-3 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
              Search jobs
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={"https://freepngimg.com/save/13358-happy-person-free-download-png/275x261"}
            alt="Homepage visual"
            className="w-72 max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain rounded-lg shadow"
          />
        </div>
      </section>
    </div>
  );
}