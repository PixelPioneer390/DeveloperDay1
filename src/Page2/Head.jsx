"use client"

import { useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri"
import { HiOutlineArrowRight } from "react-icons/hi"
import { GiHamburgerMenu } from "react-icons/gi"
import Auth0Resources from "./Auth0Resources"
import Auth0Connect from "./Auth0Connect"
import DeveloperProductivity from "./Productivity"
import Content from "./Content"
import { Link } from "react-router-dom"

const cardData = [
  {
    title: "A Passwordless Future: Passkeys for Developers",
    description: "Passkeys and WebAuthn for developers. Learn how passkeys work and the benefits they provide.",
    image:
      "https://developer.auth0.com/_next/image?url=https%3A%2F%2Fcdn.auth0.com%2Fwebsite%2Fdevelopers%2Fhome%2Fpasskeys-castle.png&w=1080&q=75",
    link: "#",
  },
  {
    title: "Best of DevDay",
    description:
      "This webinar will give you the TL;DR on the most exciting announcements shared at dev_day(24) and Oktane, spotlighting the trending identity topics discussed this year.",
    image: "./dev-day-banner.jpg",
    link: "#",
  },
  {
    title: "Single Sign-On in 5 Minutes",
    description: "Quickly implement SSO with our guides and starter code for developers.",
    image: "./dev-keynote-banner.jpg",
    link: "#",
  },
]

const Head = () => {
  const [currentCard, setCurrentCard] = useState(0)

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % cardData.length)
  }

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + cardData.length) % cardData.length)
  }

  return (
    <>
    <div className="2xl:w-[75%] mx-auto relative">
      {/* Announcement Banner */}
      <div className="bg-black text-white py-2 xl:px-22 px-3 flex items-center justify-between">
        <h1 className="text-sm font-semibold">
          Missed DevDay24? Register for the Best
          <br className="md:hidden" /> of DevDay
        </h1>
        <h1 className="text-md font-semibold">x</h1>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between 2xl:px-22 px-3 bg-[#3A3E44] text-white py-3 border-b border-gray-500 relative z-20">
        <div>
          <h1 className="md:text-3xl text-2xl">auth0 Developers</h1>
        </div>
        <div className="lg:flex gap-7 hidden">
          <ul className="flex gap-5 items-center">
            <li className="relative group cursor-pointer hover:border-b-2 border-purple-500">
              <span className="flex items-center gap-1 ">
                Docus <RiArrowDropDownLine size={30} />
              </span>
              <div className="absolute -left-30 top-6 mt-3  hidden group-hover:flex bg-[#1a1a1a] min-w-[900px] z-50 rounded-xl shadow-lg gap-6">
                {/* Column 1 */}
                <div className="px-5 py-10 pr-15 border-r border-gray-800">
                  <h3 className="text-gray-400 font-bold uppercase text-xl tracking-wider mb-3">
                    DEVELOPERS
                  </h3>
                  <ul className="space-y-4 text-sm flex flex-col">
                    <Link to="/developer" className="text-white font-semibold hover:text-white cursor-pointer">
                      Developer Center
                    </Link>
                    <Link to="/sample" className="text-white font-semibold hover:text-white cursor-pointer">
                      CODE SAMPLES
                    </Link>
                    
                    <Link to="/podcast" className="text-white font-semibold hover:text-white cursor-pointer">
                      Identity Unlocked-Podcasts
                    </Link>
                    <Link to="/sample" className="text-white font-semibold hover:text-white cursor-pointer">
                      Guides
                    </Link>
                    <li className="text-white font-semibold hover:text-white cursor-pointer">
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
                    <li className="text-white font-semibold hover:text-white cursor-pointer">
                      OIDC Connect Playground
                    </li>
                    <li className="text-white font-semibold hover:text-white cursor-pointer">
                      SAML Tool
                    </li>
                    <li className="text-white font-semibold hover:text-white cursor-pointer">
                      JWT.io
                    </li>
                    <li className="text-white font-semibold hover:text-white cursor-pointer">
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
                    <li className="text-white font-semibold hover:text-white cursor-pointer">
                      Events
                    </li>
                    <li className="text-white font-semibold hover:text-white cursor-pointer">
                      Auth0 Research Program
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="relative group cursor-pointer hover:border-b-2 border-purple-500">
                         <span className="flex items-center gap-1 ">
                           Resources <RiArrowDropDownLine size={30} />
                         </span>
           
                         <div className="absolute -left-20 top-full mt-3 hidden group-hover:flex items-stretch bg-[#1a1a1a] w-[600px] z-50 rounded-xl shadow-lg   ">
                           {/* Column 1: Documentation */}
                           <div className="h-full pr-10 py-10">
                             <div className="px-5">
                               <h3 className="text-gray-400 font-bold uppercase text-xl tracking-wider mb-3">
                                 DOCUMENTATION
                               </h3>
                               <ul className="space-y-4 text-sm">
                                 
                                   <li className="text-white font-semibold hover:text-white cursor-pointer">
                                     Auth0 Docs
                                   </li>
                                
                                 <li className="text-white font-semibold hover:text-white cursor-pointer">
                                   Articles
                                 </li>
                                 <li className="text-white font-semibold hover:text-white cursor-pointer">
                                   Quickstarts
                                 </li>
                                 <li className="text-white font-semibold hover:text-white cursor-pointer">
                                   APIs
                                 </li>
                                 <li className="text-white font-semibold hover:text-white cursor-pointer">
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
                                 <li className="text-white font-semibold hover:text-white cursor-pointer whitespace-nowrap">
                                   Community
                                 </li>
                                 <li className="text-white font-semibold hover:text-white cursor-pointer whitespace-nowrap">
                                   Support
                                 </li>
                                 <li className="text-white font-semibold hover:text-white cursor-pointer whitespace-nowrap">
                                   Help
                                 </li>
                                 <li className="text-white font-semibold hover:text-white cursor-pointer whitespace-nowrap">
                                   FAQs
                                 </li>
                                 <li className="text-white font-semibold hover:text-white cursor-pointer whitespace-nowrap">
                                   Auth0 Marketplace
                                 </li>
                                 <li className="text-white font-semibold hover:text-white cursor-pointer whitespace-nowrap">
                                   Resources
                                 </li>
                               </ul>
                             </div>
                           </div>
           
                           {/* Column 3: Blog */}
                          
                         </div>
                       </li>
            <li className="relative group cursor-pointer hover:border-b-2 border-purple-500">
                          <span className="flex items-center gap-1 ">
                            Community <RiArrowDropDownLine size={30} />
                          </span>
            
                          <div className="absolute -left-20 top-full mt-3 hidden group-hover:flex bg-[#1a1a1a] min-w-[600px] z-50 rounded-xl shadow-lg gap-8 ">
                            {/* Column 1: Platform */}
                            <div className="w-1/3 px-6  border-gray-800 pt-10 pb-5">
                              <h3 className="text-gray-400 font-bold uppercase text-sm tracking-wider mb-6">
                                Platform
                              </h3>
                              <ul className="space-y-4 text-sm">
                                <li className="text-white font-semibold hover:text-white cursor-pointer">
                                  Access Management
                                </li>
                                <li className="text-white font-semibold hover:text-white cursor-pointer">
                                  Extensibility
                                </li>
                                <li className="text-white font-semibold hover:text-white cursor-pointer">
                                  Security
                                </li>
                                <li className="text-white font-semibold hover:text-white cursor-pointer">
                                  User Management
                                </li>
                                <li className="text-white font-semibold hover:text-white cursor-pointer">
                                  Authentication
                                </li>
                                <li className="text-white font-semibold hover:text-white cursor-pointer">
                                  Fine-Grained Authorization
                                </li>
                                <li className="text-white font-semibold hover:text-white cursor-pointer">
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
           <li className="relative group cursor-pointer hover:border-b-2 border-purple-500">
                         <span className="flex items-center gap-1 ">
                           Solutions <RiArrowDropDownLine size={30} />
                         </span>
                         <div className="absolute -left-20 top-full mt-3 hidden group-hover:flex bg-[#1a1a1a] min-w-[500px] z-50 rounded-xl shadow-lg gap-6">
                           {/* Column 1 */}
                           <div className="px-5 py-10 pr-10 w-[50%] border-r border-gray-800">
                             <h3 className="text-gray-400 font-bold uppercase text-md tracking-wider mb-3">
                               INDUSTRIES
                             </h3>
                             <ul className="space-y-4 text-sm">
                               <li className="text-white font-semibold hover:text-white cursor-pointer">
                                 Retail
                               </li>
                               <li className="text-white font-semibold hover:text-white cursor-pointer">
                                 Finacial Services
                               </li>
                               <li className="text-white font-semibold hover:text-white cursor-pointer">
                                 Nonprofit & Charties
                               </li>
                               <li className="text-white font-semibold hover:text-white cursor-pointer">
                                 Startups
                               </li>
                             </ul>
           
                             <h3 className="text-gray-400 font-bold uppercase text-md tracking-wider mt-8 mb-3">
                               YOUR GOALS
                             </h3>
                             <ul className="space-y-4 text-sm">
                               <li className="text-white font-semibold hover:text-white cursor-pointer">
                                 Enterprise-Grade identity at Grade Scale
                               </li>
                               <li className="text-white font-semibold hover:text-white cursor-pointer">
                                 &lt;/secure smarter&gt;
                               </li>
                             </ul>
                           </div>
           
                           {/* Column 2 */}
                           <div className="px-5 py-10 pr-10 w-[30%] border-gray-800">
                             <h3 className="text-gray-400 font-bold uppercase text-md tracking-wider mb-3">
                               USE CASES
                             </h3>
                             <ul className="space-y-4 text-sm">
                               <li className="text-white font-semibold hover:text-white cursor-pointer">
                                 Consumer Applications
                               </li>
                               <li className="text-white font-semibold hover:text-white cursor-pointer">
                                 Case Studies
                               </li>
                             </ul>
           
                             <h3 className="text-gray-400 font-bold uppercase text-md tracking-wider mt-8 mb-3">
                               CASE STUDIES
                             </h3>
                             <ul className="space-y-4 text-sm">
                               <li className="text-white font-semibold hover:text-white cursor-pointer">
                                 Read our customers stories
                               </li>
                             </ul>
                           </div>
           
                           {/* Column 3 */}
                           
                         </div>
                       </li>
          </ul>
          <button className="bg-transparent px-5 font-semibold border-2 border-[#BDC4CF] rounded-md">Log in</button>
          <button className="bg-[#635DFF] px-5 font-semibold rounded-md">Sign up</button>
        </div>
        <div className="lg:hidden">
          <GiHamburgerMenu size={30} />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="xl:px-20 px-3 md:py-22 py-3 bg-[#3A3E44] text-white flex flex-col md:gap-0 gap-5 md:flex-row justify-between rounded-b-4xl relative">
        <div className="md:w-[20%] flex flex-col gap-2 md:gap-4">
          <h1 className="md:text-5xl text-4xl font-bold md:leading-15">Developer Center</h1>
          <p className="md:text-xl text-lg">
            Learn about Auth0, explore tutorials, download code samples, connect with us, find resources, and more.
          </p>
        </div>

        {/* Slider Container */}
        <div className="md:w-[70%] overflow-hidden rounded-4xl relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentCard * 100}%)` }}
          >
            {cardData.map((card, index) => (
              <div
                key={index}
                className="min-w-full bg-[#BDC4CF] flex flex-row justify-between px-3 py-3 gap-4 md:gap-10"
              >
                <div className="xl:w-[85%]">
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    className=" h-110 rounded-3xl"
                  />
                </div>
                <div className="flex flex-col items-start justify-between text-black md:py-10 md:pr-12  lg:pr-20 w-[60%] lg:w-[90%]">
                  <div className="flex gap-5 flex-col">
                    <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold">{card.title}</h1>
                    <p className="text-lg">{card.description}</p>
                  </div>
                  <div>
                    <h3 className="text-xl flex items-center gap-2 hover:underline">
                      <a href={card.link}>Learn more</a>
                      <HiOutlineArrowRight className="mt-1" />
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows (outside the card) */}
        </div>
        <div className="absolute bottom-5 left-[30%]  transform -translate-x-1/2 z-30">
          <button onClick={handlePrev} className="text-white p-1 text-4xl">
            &larr;
          </button>
        </div>
        <div className="absolute bottom-5 left-[34%] transform -translate-x-1/2 z-30">
          <button onClick={handleNext} className="text-white p-1 text-4xl">
            &rarr;
          </button>
        </div>
      </div>
    </div>
     <Auth0Resources/>
          <Auth0Connect/>
          <DeveloperProductivity/>
          <Content/>

          </>
  )
}

export default Head
