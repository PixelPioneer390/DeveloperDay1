import React, { useState } from "react";
import { RiGlobalLine, RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#242424] text-white">
      {/* Top Bar */}
      <div
        className="border-b-[0.2rem] md:py-[5px] py-3 2xl:px-[30px] px-5"
        style={{
          borderImageSlice: 1,
          borderImageSource:
            "linear-gradient(135deg, rgb(76, 183, 163) 0%, rgb(63, 89, 228) 50%, rgb(64, 22, 160) 100%)",
          borderStyle: "solid",
        }}
      >
        <div className="2xl:w-[85%]  mx-auto flex justify-between items-center text-sm">
          <div>
            <p className="inline text-md">
              Developer Day is coming to your screen
            </p>
            <a
              href="#"
              className="text-md ml-5 md:inline hidden underline font-bold"
            >
              Join us <span className="font-bold">→</span>
            </a>
          </div>

          {/* Language Selector */}
          <div className="md:flex gap-8 hidden items-center font-semibold relative">
            <a href="#">Login</a>
            <div
              className="flex items-center cursor-pointer relative"
              onClick={() => setLanguageOpen(!languageOpen)}
            >
              <RiGlobalLine size={20} className="mr-2" />
              <span>{selectedLanguage}</span>
              <RiArrowDropDownLine size={30} />
              {languageOpen && (
                <ul className="absolute top-full right-0 mt-2 bg-white text-black rounded shadow-lg z-50 py-2 w-32">
                  {["English", "Punjabi", "Chinese", "French"].map((lang) => (
                    <li
                      key={lang}
                      className="px-4 py-2 text-center hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setLanguageOpen(false);
                      }}
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="md:bg-[#111111]   text-white 2xl:px-[30px] px-5  py-3">
        <div className="2xl:w-[85%] w-full  mx-auto flex justify-between items-center">
          <Link to="/">
          <h1 className="xl:text-3xl text-2xl font-bold md:mb-3 hover:cursor-pointer">
            auth0
          </h1>
          </Link>

          {/* Navigation Items */}
          <ul className="lg:flex gap-3 xl:gap-6 items-center hidden">
            {/* Developers */}
            <li className="relative group cursor-pointer">
              <span className="flex items-center hover:text-purple-500 gap-1 font-semibold pb-[15px]">
                Developers <RiArrowDropDownLine size={30} />
              </span>
              <div className="absolute -left-20 top-10 mt-3 hidden group-hover:flex bg-[#1a1a1a] min-w-[900px] z-50 rounded-xl shadow-lg gap-6">
                {/* Column 1 */}
                <div className="px-5 py-10 pr-15 border-r border-gray-800">
                  <h3 className="text-gray-400 font-bold uppercase text-xl tracking-wider mb-3">
                    DEVELOPERS
                  </h3>
                  <ul className="space-y-4 text-sm flex flex-col">
                    <Link to="/developer" className="text-white font-semibold hover:text-purple-400 cursor-pointer">
                      Developer Center
                    </Link>
                    <Link to="/sample" className="text-white font-semibold hover:text-purple-400 cursor-pointer">
                      CODE SAMPLES
                    </Link>
                    
                    <Link to="/podcast" className="text-white font-semibold hover:text-purple-400 cursor-pointer">
                      Identity Unlocked-Podcasts
                    </Link>
                    <Link to="/sample" className="text-white font-semibold hover:text-purple-400 cursor-pointer">
                      Guides
                    </Link>
                    <li className="text-white font-semibold hover:text-purple-400 cursor-pointer">
                      Zero Index Newsletter
                    </li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="px-5 py-10 pr-15 border-r border-gray-800">
                  <h3 className="text-gray-400 font-bold uppercase text-xl tracking-wider mb-3">
                    DEVELOPER TOOLS
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li className="text-white font-semibold hover:text-purple-400 cursor-pointer">
                      OIDC Connect Playground
                    </li>
                    <li className="text-white font-semibold hover:text-purple-400 cursor-pointer">
                      SAML Tool
                    </li>
                    <li className="text-white font-semibold hover:text-purple-400cursor-pointer">
                      JWT.io
                    </li>
                    <li className="text-white font-semibold hover:text-purple-400 cursor-pointer">
                      Webauthn.me
                    </li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="px-5 py-10 pr-15">
                  <h3 className="text-gray-400 font-bold uppercase text-xl tracking-wider mb-3">
                    GET INVOLVED
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li className="text-white font-semibold hover:text-purple-400 cursor-pointer">
                      Events
                    </li>
                    <li className="text-white font-semibold hover:text-purple-400 cursor-pointer">
                      Auth0 Research Program
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Documentation */}
            <li className="relative group cursor-pointer ">
              <span className="flex items-center hover:text-purple-500 font-semibold gap-1 pb-[15px]">
                Documentation <RiArrowDropDownLine size={30} />
              </span>

              <div className="absolute -left-20 top-full mt-3 hidden group-hover:flex items-stretch bg-[#1a1a1a] w-[950px] z-50 rounded-xl shadow-lg   ">
                {/* Column 1: Documentation */}
                <div className="h-full pr-10 py-10">
                  <div className="px-5">
                    <h3 className="text-gray-400 font-bold uppercase text-xl tracking-wider mb-3">
                      DOCUMENTATION
                    </h3>
                    <ul className="space-y-4 text-sm">
                      
                        <li className="text-white font-semibold hover:text-purple-400 cursor-pointer">
                          Auth0 Docs
                        </li>
                     
                      <li className="text-white font-semibold hover:text-purple-400 cursor-pointer">
                        Articles
                      </li>
                      <li className="text-white font-semibold hover:text-purple-400 cursor-pointer">
                        Quickstarts
                      </li>
                      <li className="text-white font-semibold hover:text-purple-400 cursor-pointer">
                        APIs
                      </li>
                      <li className="text-white font-semibold hover:text-purple-400 cursor-pointer">
                        SDK Libraries
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Column 2: Support Center */}
                <div className="h-full  border-l border-gray-800  min-w-[300px] py-10">
                  <div className="px-5">
                    <h3 className="text-gray-300 font-bold uppercase text-xl tracking-wider mb-3">
                      SUPPORT CENTER
                    </h3>
                    <ul className="space-y-4 text-sm">
                      <li className="text-white font-semibold hover:text-purple-400 cursor-pointer whitespace-nowrap">
                        Community
                      </li>
                      <li className="text-white font-semibold hover:text-purple-400 cursor-pointer whitespace-nowrap">
                        Support
                      </li>
                      <li className="text-white font-semibold hover:text-purple-400 cursor-pointer whitespace-nowrap">
                        Help
                      </li>
                      <li className="text-white font-semibold hover:text-purple-400 cursor-pointer whitespace-nowrap">
                        FAQs
                      </li>
                      <li className="text-white font-semibold hover:text-purple-400 cursor-pointer whitespace-nowrap">
                        Auth0 Marketplace
                      </li>
                      <li className="text-white font-semibold hover:text-purple-400 cursor-pointer whitespace-nowrap">
                        Resources
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Column 3: Blog */}
                <div className=" w-[100%] border-l border-gray-800 py-10">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 px-6  border-b border-gray-700 pb-4 mb-4">
                      <img
                        src="blog-thumbnail.png"
                        alt="Blog Thumbnail"
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex flex-col">
                        <h3 className="text-gray-400 font-bold uppercase text-xl tracking-wider mb-1 ">
                          BLOG
                        </h3>
                        <p className="text-sm text-white w-55">
                          Getting Unlimited Scalability with Okta Fine-Grained
                          Authorization
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-4 text-sm px-6 ">
                      <li className="text-white font-semibold hover:text-purple-400 cursor-pointer transition">
                        React
                      </li>
                      <li className="text-white font-semibold hover:text-purple-400 cursor-pointer transition">
                        Vue
                      </li>
                      <li className="text-white font-semibold hover:text-purple-400 cursor-pointer transition">
                        Angular
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Company */}
            <li className="relative group cursor-pointer ">
              <span className="flex items-center hover:text-purple-500 gap-1 font-semibold pb-[15px]">
                Product <RiArrowDropDownLine size={30} />
              </span>

              <div className="absolute -left-20 top-8 mt-3 hidden group-hover:flex bg-[#1a1a1a] min-w-[900px] z-50 rounded-xl shadow-lg gap-8 ">
                {/* Column 1: Platform */}
                <div className="w-1/3 px-6 border-r border-gray-800 pt-10 pb-5">
                  <h3 className="text-gray-400 font-bold uppercase text-sm tracking-wider mb-6">
                    Platform
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Access Management
                    </li>
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Extensibility
                    </li>
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Security
                    </li>
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      User Management
                    </li>
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Authentication
                    </li>
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Fine-Grained Authorization
                    </li>
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Auth for GenAI
                    </li>
                  </ul>
                  <div className="mt-6 border-t border-gray-800 pt-4">
                    <span className="text-blue-400 text-sm font-semibold cursor-pointer">
                      View platform →
                    </span>
                  </div>
                </div>

                {/* Column 2: Features */}
                <div className="w-1/3 pr-6 pt-10 pb-5">
                  <h3 className="text-gray-400 font-bold uppercase text-sm tracking-wider mb-6">
                    Features
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Universal Login
                    </li>
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Single Sign On
                    </li>
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Multifactor Authentication
                    </li>
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Actions
                    </li>
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Machine to Machine
                    </li>
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Passwordless
                    </li>
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Breached Passwords
                    </li>
                  </ul>
                  <div className="mt-6 border-t border-gray-800 pt-4">
                    <span className="text-blue-400 text-sm font-semibold cursor-pointer">
                      View features →
                    </span>
                  </div>
                </div>

                {/* Column 3: Resources */}
                <div className="w-1/3 space-y-6 pt-10 pb-5 border-l border-gray-800">
                  <div className="px-2">
                    <h4 className="text-white font-semibold mb-1 ">
                      Technology Overview
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Watch a walkthrough of the Auth0 Platform
                    </p>
                  </div>
                  <div className="border-t border-b border-gray-800 py-10 px-2">
                    <h4 className="text-white font-semibold mb-1">
                      Cloud Deployments
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Deploy to the cloud, your way
                    </p>
                  </div>
                  <div className="px-2">
                    <h4 className="text-white font-semibold mb-1">
                      Auth0 Marketplace
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Discover the integrations you need to solve identity
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li className="relative group cursor-pointer ">
              <span className="flex items-center gap-1 hover:text-purple-500 font-semibold pb-[15px]">
                Solutions <RiArrowDropDownLine size={30} />
              </span>
              <div className="absolute -left-50 top-full mt-3 hidden group-hover:flex bg-[#1a1a1a] min-w-[900px] z-50 rounded-xl shadow-lg gap-6">
                {/* Column 1 */}
                <div className="px-5 py-10 pr-10 w-[30%] border-r border-gray-800">
                  <h3 className="text-gray-400  font-bold uppercase text-md tracking-wider mb-3">
                    INDUSTRIES
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Retail
                    </li>
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Finacial Services
                    </li>
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Nonprofit & Charties
                    </li>
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Startups
                    </li>
                  </ul>

                  <h3 className="text-gray-400 font-bold uppercase text-md tracking-wider mt-8 mb-3">
                    YOUR GOALS
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Enterprise-Grade identity at Grade Scale
                    </li>
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      &lt;/secure smarter&gt;
                    </li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="px-5 py-10 pr-10 w-[30%] border-r border-gray-800">
                  <h3 className="text-gray-400 font-bold uppercase text-md tracking-wider mb-3">
                    USE CASES
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Consumer Applications
                    </li>
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Case Studies
                    </li>
                  </ul>

                  <h3 className="text-gray-400 font-bold uppercase text-md tracking-wider mt-8 mb-3">
                    CASE STUDIES
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li className="text-white font-semibold hover:text-purple-500 cursor-pointer">
                      Read our customers stories
                    </li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className=" py-10 pr-10 w-[55%]">
                  <div className="flex items-start gap-3">
                    <img
                      src="roi.png"
                      alt="Blog Thumbnail"
                      className="w-35 object-cover rounded"
                    />
                    <div>
                      <h3 className="text-gray-400 font-bold uppercase text-md tracking-wider">
                        CIAM ROI Calculator
                      </h3>
                      <p className="text-md text-white">
                        Estimate the revenue impact to your customer-facing
                        business
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Static Links */}
            <li className="cursor-pointer font-semibold hover:text-purple-500 pb-[15px]">
              Blog
            </li>
            <li className="cursor-pointer font-semibold hover:text-purple-500 pb-[15px]">
              Price
            </li>
          </ul>

          {/* Buttons */}
          <div className="xl:flex gap-2 hidden">
            <button className="bg-[#E1E1E1] px-6 py-2 text-black hover:cursor-pointer font-semibold rounded">
              Sign up
            </button>
            <button
              className="relative px-8 py-2 text-white hover:cursor-pointer font-semibold rounded overflow-hidden z-0 transition-all duration-300 hover:shadow-lg border border-white/20 backdrop-blur-sm"
              style={{
                background:
                  "linear-gradient(26deg, rgba(255, 255, 255, 0.15) -32.04%, rgba(255, 255, 255, 0) 133.43%)",
              }}
            >
              <span className="relative z-10">Contact Sales</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-10 transition-opacity duration-300 z-0"></span>
            </button>
          </div>

          {/* menu icon */}
          <div className="lg:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <GiHamburgerMenu size={30} />
        </button>
      </div>
          
        </div>

        {isMobileMenuOpen && (
        <ul className="flex flex-col  gap-4 mt-4 lg:hidden">
          
          <li className="cursor-pointer">Developers</li>
          <li className="cursor-pointer">Documentation</li>
          <li className="cursor-pointer">Product</li>
          <li className="cursor-pointer">Solutions</li>
          {/* Add more if needed */}
        </ul>
      )}
      </nav>
    </header>
  );
};

export default Header;
