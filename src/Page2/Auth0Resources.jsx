import React from "react";

export default function Auth0Resources() {
  return (
    <div className="  flex items-center justify-center p-4 my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl w-full">
        {/* Learn Auth0 essentials */}
        <div className="bg-[#3A3E44] rounded-3xl overflow-hidden ">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 px-3 py-7 rounded-t-3xl">
            <h2 className="text-white text-2xl font-bold mb-2">Learn Auth0 essentials</h2>
            <p className="text-white">
              Explore the basics of identity and the Auth0 deployment platform.
            </p>
          </div>
          <div className="px-6 py-4">
            <LinkItem text="Auth0 overview" className="border-b-1 border-gray-300"/>
            <LinkItem text="Identity fundamentals" className="border-b-1 border-gray-300"/>
            <LinkItem text="Auth0 Quickstarts" className="border-b-1 border-gray-300"/>
            <LinkItem text="Evaluate Identity Management" className="border-b-1 border-gray-300"/>
          </div>
        </div>

        {/* Discover Auth0 features */}
        <div className="bg-[#3A3E44] rounded-3xl overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-emerald-500 px-3 py-7 rounded-t-3xl ">
            <h2 className="text-white text-2xl font-bold mb-2">Discover Auth0 features</h2>
            <p className="text-white">
              Implement Auth0 authentication and secure your applications.
            </p>
          </div>
          <div className="px-6 py-4">
            <LinkItem text="Integrate Auth0 login" className="border-b-1 border-gray-300"/>
            <LinkItem text="Customize your user experience" className="border-b-1 border-gray-300"/>
            <LinkItem text="Protect your application" className="border-b-1 border-gray-300"/>
            <LinkItem text="Auth0 code samples & guides" className="border-b-1 border-gray-300"/>
          </div>
        </div>

        {/* Level up your Auth0 deployment */}
        <div className="bg-[#3A3E44] rounded-3xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-violet-500 px-3 py-7 rounded-t-3xl">
            <h2 className="text-white text-2xl font-bold mb-2">Level up your Auth0 deployment</h2>
            <p className="text-white">
              Manage your environment with a range of advanced tools and features.
            </p>
          </div>
          <div className="px-6 py-4">
            <LinkItem text="Deploy to private & public cloud" className="border-b-1 border-gray-300"/>
            <LinkItem text="CLI Deployment Tool" className="border-b-1 border-gray-300"/>
            <LinkItem text="Monitor your implementation" className="border-b-1 border-gray-300"/>
            <LinkItem text="Troubleshoot" className="border-b-1 border-gray-300"/>
          </div>
        </div>
      </div>
    </div>
  );
}

// Link item component with arrow
function LinkItem({ text }) {
  return (
    <div className="border-b border-gray-700 py-4 last:border-0">
      <a href="#" className="text-white flex items-center justify-between group">
        <span>{text}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M14 5l7 7m0 0l-7 7m7-7H3" 
          />
        </svg>
      </a>
    </div>
  );
}