import React from "react";
// import homepageImage from "../assets/homepage.png";
import { SiWipro } from "react-icons/si";
import { SiTcs } from "react-icons/si";
import { SiTata } from "react-icons/si";
import { MdPhoneForwarded } from "react-icons/md";

// Accept props to trigger navigation
export default function HomePage({ onEmployerLogin, onAuth, onJobPrep, onContact, onAbout }) {
  return (
    <div className="w-full min-h-screen bg-gray-200">
  
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 shadow-md bg-white animate__animated animate__fadeInDown">
        {/* Logo */}
        <div className="flex items-end space-x-1">
   

            <img src="/src/assets/Jobcalls logo (1).png" alt="JobsCalls" className="h-10" />
             
        </div>
        

        {/* Menu Items */}
        <ul className="hidden lg:flex items-center space-x-4 xl:space-x-6 font-medium text-gray-700">
          <li className="relative group cursor-pointer hover:text-green-600">
            <span className="flex items-center">Jobs ▾</span>
            {/* Jobs Dropdown */}
            <div className="absolute top-full left-0 mt-2 w-80 sm:w-96 lg:w-screen lg:max-w-6xl bg-white shadow-2xl border border-gray-200 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 -ml-4 sm:ml-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
                {/* Job Types */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4 text-sm uppercase tracking-wide">Job Types</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Work From Home Jobs</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Part Time Jobs</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Freshers Jobs</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Jobs for Women</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Full Time Jobs</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Night Shift Jobs</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Jobs for 10th pass</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Jobs for 12th pass</a></li>
                  </ul>
                </div>
                
                {/* Jobs by City */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4 text-sm uppercase tracking-wide">Jobs by City</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Delhi-NCR</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Mumbai</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Bengaluru</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Chennai</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Hyderabad</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Pune</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Kolkata</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Ahmedabad</a></li>
                  </ul>
                </div>
                
                {/* Popular Jobs */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4 text-sm uppercase tracking-wide">Popular Jobs</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Delivery Person Jobs</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Accounts / Finance Jobs</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Sales (Field Work)</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Human Resource</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Backoffice Jobs</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Business Development</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Telecaller / BPO</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Customer Support</a></li>
                  </ul>
                </div>
                
                {/* Jobs by Department */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4 text-sm uppercase tracking-wide">Jobs by Department</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">IT & Software</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Banking & Finance</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Healthcare</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Marketing & Sales</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Engineering</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Education & Training</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Retail & eCommerce</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Construction</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li 
            className="flex items-center space-x-1 cursor-pointer hover:text-green-600"
            onClick={() => onJobPrep && onJobPrep()}
          >
            <span>Job Prep</span>
            <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-md">NEW</span>
          </li>
          <li 
            className="flex items-center space-x-1 cursor-pointer hover:text-green-600"
            onClick={() => onAbout && onAbout()}
          >
            <span>About</span>
            <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-md">NEW</span>
          </li>
          <li 
            className="flex items-center space-x-1 cursor-pointer hover:text-green-600"
            onClick={() => onContact && onContact()}
          >
            <span>Contact</span>
            <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-md">NEW</span>
          </li>
          <li className="cursor-pointer hover:text-green-600">Resume Tools ▾</li>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            className="text-gray-700 hover:text-green-600 text-sm lg:text-base px-2 lg:px-0"
            onClick={() => onEmployerLogin && onEmployerLogin()}
          >
            Employer Login
          </button>
          <button className="bg-green-600 text-white px-3 sm:px-4 py-1.5 rounded-md hover:bg-green-700 text-sm lg:text-base">
            Candidate Login
          </button>
        </div>
      </nav>

      {/* Blue Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white animate__animated animate__fadeIn gap-2 sm:gap-0">
        <div className="flex items-center space-x-2 font-semibold text-sm sm:text-base">
          <span className="bg-white text-blue-600 text-xs px-2 py-0.5 rounded">ai</span>
          <span>Job Prep</span>
          <span className="bg-white text-blue-600 text-xs px-2 py-0.5 rounded">NEW</span>
          <span className="ml-2 hidden sm:inline">Practice interviews with AI Coach</span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Replace with logos */}
          <SiWipro className="text-white text-xl sm:text-2xl" />
          <SiTcs className="text-white text-xl sm:text-2xl" />
          <SiTata className="text-white text-xl sm:text-2xl" />
          <button className="bg-white text-purple-600 px-3 sm:px-4 py-1.5 rounded-md font-medium hover:bg-gray-100 text-sm sm:text-base">
            Practice for free
          </button>
        </div>
      </div>
     

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-10 px-4 sm:px-6 lg:px-20 py-8 sm:py-12 max-w-7xl mx-auto animate__animated animate__fadeInUp">
        {/* Left Side Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            Find your dream job with
            <span className="text-green-600"> JobCalls</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
            Connect with top employers and discover opportunities that match your skills and aspirations.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <button className="bg-green-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-green-700 transition-colors">
              Find Jobs
            </button>
            <button className="border-2 border-green-600 text-green-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-green-50 transition-colors">
              Post a Job
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate__animated animate__fadeIn" style={{ animationDelay: "0.6s" }}>
          <img
            src={"https://freepngimg.com/save/13358-happy-person-free-download-png/275x261"}
            alt="Homepage visual"
            className="w-72 max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain rounded-lg shadow"
          />
        </div>
      </section>

      {/* About JobCalls Section */}
      <section className="px-4 sm:px-6 lg:px-20 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            About JobCalls
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-8 max-w-3xl">
            JobCalls is a modern job marketplace built to connect ambitious talent with trusted employers. 
            We combine a curated job network, AI-powered preparation tools, and a streamlined application flow 
            so you spend less time searching and more time advancing your career.
          </p>

          {/* Key stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-5 shadow-sm">
              <div className="text-3xl font-extrabold text-green-600">10k+</div>
              <div className="text-gray-600">Active job listings</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 shadow-sm">
              <div className="text-3xl font-extrabold text-green-600">5k+</div>
              <div className="text-gray-600">Verified employers</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 shadow-sm">
              <div className="text-3xl font-extrabold text-green-600">120k+</div>
              <div className="text-gray-600">Candidates supported</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 shadow-sm">
              <div className="text-3xl font-extrabold text-green-600">24x7</div>
              <div className="text-gray-600">AI job prep assistance</div>
            </div>
          </div>

          {/* What we offer */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Curated Opportunities</h3>
              <p className="text-gray-600">Discover roles across top companies with clear requirements, fair pay ranges, and transparent hiring processes.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">AI-Powered Preparation</h3>
              <p className="text-gray-600">Practice interviews, refine resumes, and upskill with tailored guidance to boost your success rate.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Faster Applications</h3>
              <p className="text-gray-600">Apply in a few clicks, track status in real time, and communicate directly with hiring teams.</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <button className="bg-green-600 text-white px-6 sm:px-8 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Explore Jobs
            </button>
            <button className="border-2 border-green-600 text-green-600 px-6 sm:px-8 py-2.5 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}