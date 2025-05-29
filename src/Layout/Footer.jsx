import React, { useState } from 'react';
import { FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { RiGlobalLine, RiArrowDropDownLine } from "react-icons/ri";

const Footer = () => {
    const [languageOpen, setLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("English");

  const sections = [
    {
      heading: 'DEVELOPERS',
      links: ['Developer Hub', 'Code Samples and Guides', 'Blog posts', 'Identity Unlocked - Podcasts', 'Zero Index Newsletter'],
    },
    {
      heading: 'DOCUMENTATION',
      links: ['Articles', 'Quickstarts', 'APIs', 'SDK Libraries', 'Blog', 'Reports', 'Webinars'],
    },
    {
      heading: 'SUPPORT CENTER',
      links: ['Community', 'Support', 'Help', 'FAQs', 'Auth0 Marketplace'],
    },
    {
      heading: 'COMPANY',
      links: ['Our Customers', 'Compliance - Ensuring privacy and security', 'Partners', 'Careers', 'About us'],
      highlight: 'Careers',
    },
    {
      heading: 'GET INVOLVED',
      links: ['Events', 'Auth0 Research Program'],
    },
    {
      heading: 'LEARNING',
      links: ['Learn', 'Intro to IAM (CIAM)', 'Blog'],
    },
    {
      heading: 'PLATFORM',
      links: ['Access Management', 'Extensibility', 'Security', 'User Management', 'Authentication', 'Cloud deployments', 'Fine-Grained Authorization', 'Auth for GenAI'],
    },
    {
      heading: 'FEATURES',
      links: ['Universal Login', 'Single Sign On', 'Multifactor Authentication', 'Actions', 'Machine to Machine', 'Passwordless', 'Breached Passwords'],
    },
  ];

    

  return (
    <footer className=" text-white text-sm px-6 md:px-12 md:pt-5 pb-10">
      <div className="max-w-7xl border-t border-gray-600 pt-20  mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 mb-16">
          {sections.map((section, i) => (
            <div key={i}>
              <h4 className="text-gray-400 font-medium text-xs mb-3 tracking-widest">
                {section.heading}
              </h4>
              <ul className="space-y-1">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className={`hover:underline ${
                        section.highlight === link
                          ? 'inline-flex items-center'
                          : ''
                      }`}
                    >
                      {link}
                      {section.highlight === link && (
                        <span className="ml-2 text-xs bg-blue-600 text-white px-1.5 py-0.5 rounded-md">
                          We’re hiring!
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row md:justify-between items-center gap-6 text-gray-400 text-xs">
          {/* Socials */}
          <div className="flex space-x-4">
            <FaXTwitter className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
          </div>

          {/* Legal */}
          <div className="text-center space-x-2">
            <span>Status</span>•<span>Legal</span>•<span>Privacy</span>•<span>Terms</span>•
            <span>Your Privacy Choices</span>
          </div>

          {/* Language */}
          <div className="flex gap-8 items-center font-semibold relative">
                     <a href="#">Login</a>
                     <div
                       className="flex items-center cursor-pointer relative"
                       onClick={() => setLanguageOpen(!languageOpen)}
                     >
                       <RiGlobalLine size={20} className="mr-2" />
                       <span>{selectedLanguage}</span>
                       <RiArrowDropDownLine size={30} />
                       {languageOpen && (
                         <ul className="absolute bottom-full right-0  mt-2 bg-white text-black rounded shadow-lg z-50 py-2 w-32">
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

        <p className="mt-6 text-xs text-center text-gray-600">
          © 2025 Okta, Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
