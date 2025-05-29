import { ArrowRight } from "lucide-react";
import { Mail, Users } from "lucide-react"

export default function Auth0Connect() {
  return (
    <div className="min-h-screen bg-[#1E212A] text-white p-4 sm:p-6 md:p-12">
      <div className="max-w-6xl mx-auto py-10 md:py-20 border-t border-gray-500">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">
          Connect with Auth0
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left column - Events */}
          <div className="bg-white opacity-70 w-full lg:w-[65%] text-[#1c2026] rounded-lg p-4 md:p-6 lg:p-8">
            <h2 className="uppercase text-xs sm:text-sm font-bold tracking-wider mb-4 md:mb-6">
              Upcoming Events
            </h2>
            <div className="border-t border-gray-300 pt-4 md:pt-6 flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-20 items-start pb-6 md:pb-8">
              <div className="mb-4 md:mb-8 w-full md:w-auto">
                <img
                  src="https://developer.auth0.com/_next/image?url=https%3A%2F%2Fcdn.auth0.com%2Fwebsite%2Fdevelope-center%2Fassets%2Fboo-banner.png&w=3840&q=75"
                  alt="DevDay event"
                  className="w-full md:w-[250px] rounded-md bg-purple-800    "
                />

                <h3 className="text-sm md:text-md font-bold mb-1 mt-2 md:mt-3">Best of DevDay</h3>
                <a href="#" className="text-blue-700 text-xs sm:text-sm hover:underline">
                  Watch the webinar online
                </a>
              </div>
              <div className="w-full md:w-auto">
                <div className="py-2 md:py-4">
                  <h3 className="font-bold text-sm md:text-md mb-1">NDC Oslo 2025</h3>
                  <p className="text-xs sm:text-sm">Oslo • 19 - 23 May, 2025</p>
                </div>

                <div className="py-2 md:py-4">
                  <h3 className="border-t border-gray-300 text-sm md:text-md font-bold pt-3 md:pt-4">
                    Dublin Tech Summit
                  </h3>
                  <p className="text-xs sm:text-sm">Dublin • 28 - 29 May, 2025</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-500 pt-3 md:pt-4">
              <a
                href="#"
                className="inline-flex items-center text-xs sm:text-sm font-medium"
              >
                View more events
                <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>
          </div>

          {/* Right column - Advocates */}
          <div className="bg-[#2a2f36] rounded-lg p-4 md:p-6 lg:p-8 w-full lg:w-[35%]">
            <h2 className="uppercase text-xs sm:text-sm font-bold tracking-wider mb-4 md:mb-6">
              Meet our Auth0 Advocates
            </h2>
            <div className="border-t border-gray-700 pt-4 md:pt-6">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-gray-700">
                  <div className="flex-shrink-0">
                    <img
                      src="/carla_urrea.webp"
                      alt="Carla Urrea"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">Carla Urrea</h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Senior Developer Advocate
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-gray-700">
                  <div className="flex-shrink-0">
                    <img
                      src="/Ramona.jpeg"
                      alt="Ramona Schwering"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">Ramona Schwering</h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Developer Advocate, International
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-gray-700">
                  <div className="flex-shrink-0">
                    <img
                      src="/deepu.webp"
                      alt="Deepu K Sasidharan"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">Deepu K Sasidharan</h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Staff Developer Advocate
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-gray-700">
                  <div className="flex-shrink-0">
                    <img
                      src="/Nonsome.webp"
                      alt="Sam Bellen"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">Sam Bellen</h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Principal Developer Advocate
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src="/Daizen.webp"
                      alt="Daizen Ikehara"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">Daizen Ikehara</h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Principal Developer Advocate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12">
          <h2 className="uppercase text-xs sm:text-sm font-bold tracking-wider">
            Join the Community
          </h2>
          <div className="border-t border-gray-700 mt-2 md:mt-4"></div>
        </div>
       
        <div className="text-white py-6 md:py-8 px-0 md:px-4 mt-6 md:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Community Forum */}
            <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-[#1E212A]/50 rounded-lg">
              <div className="bg-[#5865F2]/20 p-2 rounded-md">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[#7C5DFA]" />
              </div>
              <div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <h3 className="font-medium text-sm sm:text-base">Community Forum</h3>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  Interact with other devs implementing innovative solutions with Auth0.
                </p>
              </div>
            </div>

            {/* Join Auth0 Lab Discord */}
            <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-[#1E212A]/50 rounded-lg">
              <div className="bg-[#5865F2]/20 p-2 rounded-md">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-sm sm:text-base">Join Auth0 Lab Discord</h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  Join our Discord community to learn more, share your thoughts and stay up to date on all the things
                  related to Auth0.
                </p>
              </div>
            </div>

            {/* Zero Index Newsletter */}
            <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-[#1E212A]/50 rounded-lg">
              <div className="bg-[#5865F2]/20 p-2 rounded-md">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#7C5DFA]" />
              </div>
              <div>
                <h3 className="font-medium text-sm sm:text-base">Zero Index Newsletter</h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  Get curated links to articles, videos, and developer productivity tips delivered to your inbox once a
                  month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}