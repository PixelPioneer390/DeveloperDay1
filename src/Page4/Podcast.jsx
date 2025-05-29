
import { Play } from "lucide-react"
import PodcastPage from "./PodcastPage"
import Podfooter from "./Postfooter"

export default function Podcast() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white py-6 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-around items-center">
          <div className="flex items-center">
            <img src="podcast-logo.png" alt="" className="w-85"/>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium uppercase text-lg">
              Listen on Apple Podcasts
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium uppercase text-lg">
              Blog
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium uppercase text-lg">
              Visit Auth0
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow ">
        <div className="relative overflow-hidden xl:h-[80vh]">
          {/* Background Gradient */}
          <div className="absolute  inset-0 bg-gradient-to-r from-red-900 to-red-800 -left-50  md:left-0 md:-top-140"
          style={{backgroundImage:"url(podcast.png)",backgroundSize:"cover"}}
          >
          </div>
             <div className="absolute xl:top-20 xl:right-70 right-10 bottom-5 z-100">
              <img src="/podcast.png" alt="" className="xl:w-90 w-60"/>
              </div> 

          {/* Curved Lines Overlay */}
          <div className="absolute inset-0 bg-[#2a2e35]/35"></div>

          <div className="max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-24 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-6">
                <div className="uppercase text-sm font-semibold tracking-wider">Episode 4 | 47:19 min</div>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  Daniel Fett on privacy-preserving measures and SD-JWT
                </h2>
                <div className="mt-6 text-gray-100 text-xs md:text-sm leading-relaxed">
                  <p>
                    In this episode, Dr. Daniel Fett, expert cryptographer, returns to the show to discuss the landscape
                    of privacy-preserving measures (such as selective disclosure, zero-knowledge proofs or ZKP, etc.)
                    that are emerging to augment existing technologies and enable new scenarios. The discussion gets
                    very concrete when Daniel describes selective disclosure JWT, or SD- JWT, a new IETF specification
                    he is coauthoring that offers a simple and easy-to-adopt approach to produce JWTs capable of
                    supporting selective disclosure. Here at Identity Unlocked, we are huge fans of this new
                    specification, and we hope this episode will help you get started!
                  </p>
                </div>
                <button className="mt-6 inline-flex items-center bg-white text-red-900 px-6 py-3 rounded-md font-medium">
                  <Play className="w-4 h-4 mr-2" />
                  PLAY NOW
                </button>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative w-full max-w-md">
                  {/* <Image
                    src="/podcast.png"
                    alt="Identity Unlocked Podcast Cover"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <PodcastPage/>
      <Podfooter/>
    </div>
  )
}
