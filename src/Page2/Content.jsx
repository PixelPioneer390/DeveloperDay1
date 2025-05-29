"use client"
import { ArrowRight } from "lucide-react"

export default function Content() {
  return (
    <div className=" text-white min-h-screen py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Latest Content Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">OUR LATEST CONTENT</h2>
          <div className="h-px bg-gray-700 w-full"></div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {/* Card 1 */}
          <div className="bg-[#222530] rounded-lg overflow-hidden hover:translate-y-[-4px] transition-transform duration-200">
            <div className="aspect-video overflow-hidden">
              <img
                src="/blazor-logo.webp"
                alt="Dual-write problem illustration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-medium mb-2">
                Implementing Role-Based Access Control in Your Blazor B2B SaaS Application
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-4">
                Learn how to add Role-Based Access Control (RBAC) to your B2B SaaS application that leverages Auth0...
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#222530] rounded-lg overflow-hidden hover:translate-y-[-4px] transition-transform duration-200">
            <div className="aspect-video bg-teal-800 p-2 sm:p-4">
              <img
                src="/Passwordless.webp"
                alt="Dual-write problem illustration"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-medium mb-2">Handling the Dual-Write Problem in Distributed Systems</h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-4">
                The dual-write problem exists in distributed systems. Let's look at what it is and some of the most
                common strategies...
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#222530] rounded-lg overflow-hidden hover:translate-y-[-4px] transition-transform duration-200">
            <div className="aspect-video bg-red-400 p-2 sm:p-4">
              <img
                src="/Whatisandhowdoes.webp"
                alt="Enterprise readiness illustration"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-medium mb-2">
                Unlock Enterprise Readiness: How to Add Self-Service SSO to Your SaaS App
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-4">
                In this blog, we will add a capability to add Self-service SSO capability to your SaaS application.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#222530] rounded-lg overflow-hidden hover:translate-y-[-4px] transition-transform duration-200">
            <div className="aspect-video">
              <img
                src="/blazor-logo.webp"
                alt="Dual-write problem illustration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-medium mb-2">
                Enforce Customer Email Verification in Your B2B Blazor Web App
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-4">
                Checking your customers' email addresses is a basic rule for securely onboarding them in your B2B SaaS
                application...
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 w-full mb-8 sm:mb-12"></div>

        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-around gap-6 sm:gap-5">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Sign up for Zero Index</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Get your monthly update from the Auth0 Developer Relations team
            </p>
          </div>
          <div className="w-full relative md:w-1/2">
            <div className="relative">
              <input
                type="email"
                placeholder="Your best email"
                className="bg-[#222530] border border-gray-700 rounded-3xl px-4 sm:px-6 py-3 sm:py-7 w-full text-white text-sm sm:text-base"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white md:rounded-2xl rounded-3xl absolute right-1 top-1 sm:right-4 sm:top-4 px-4 py-2 sm:px-6 sm:py-3 flex items-center justify-center gap-2 transition-colors text-sm sm:text-base">
                Register now
                <ArrowRight size={16} className="hidden sm:block" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}