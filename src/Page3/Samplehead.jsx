import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Samplehead = () => {
  return (
    <div>
      <nav className="flex justify-between xl:w-[70%] mx-auto xl:rounded-b-3xl xl:px-22 px-3 bg-gray-800 text-white py-3 border-b border-gray-600 relative z-20">
        <div>
          <h1 className="md:text-3xl text-2xl font-semibold">Code Smaple</h1>
        </div>
        <div className="md:flex gap-7 hidden">
          <ul className="flex gap-5 items-center">
            <li className="relative group cursor-pointer hover:border-b-2 border-purple-500">
              <span className="flex items-center gap-1 ">
                Docus <RiArrowDropDownLine size={30} />
              </span>
              <div className="absolute -left-30 top-6 mt-3 hidden group-hover:flex bg-[#1a1a1a] min-w-[900px] z-50 rounded-xl shadow-lg gap-6">
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
        <div className="md:hidden">
          <GiHamburgerMenu size={30} />
        </div>
      </nav>
    </div>
  )
}

export default Samplehead
