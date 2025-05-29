
import Cards from "../Layout/Cards"
import IntegrationSection from "../Layout/IntegrationSection"
import DevDayLanding from "../Layout/Timer"
import SwipeSpan from "./SwipeSpan"
import Marquee from "../Layout/Marquee"
import Resources from "../Layout/Resources"
import IdentityDashboard from "../Layout/identify2"
import Video from "../Layout/Video"

const HeroSection = () => {
  const customersPhrases = ["customers", "everyone", "medical patients", "developers", "online shoppers"]
  const badActorsPhrases = ["scammers", "attackers", "bad actors", "identity thieves"]

  

  return (
    <>
    <div className="w-full  2xl:w-[85%] h-[75vh]  2xl:h-[75vh]  mx-auto relative bg-[linear-gradient(to_top_right,_#3F2BB5,_#251844,_#111111,_#111111)] flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-15 pb-10 md:pb-20 lg:pb-30 md:pt-10 py-5 rounded-b-2xl lg:rounded-b-3xl overflow-hidden text-white font-sans">
      {/* Background SVG */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right-bottom pointer-events-none  opacity-80 md:opacity-100"
        style={{ backgroundImage: "url('/facets.svg')",
          backgroundSize:"350px"
        
        }}
      ></div>

      {/* Left Content */}
      <div className="w-full md:max-w-lg lg:max-w-xl xl:max-w-2xl relative z-10 mb-12 md:mb-0">
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ">
          Secure access <br className="md:block" />
          <span className="flex items-center gap-3">
          for <SwipeSpan phrases={customersPhrases} className="border-indigo-400" /></span>
          <p className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 ">
            <span className="flex items-center gap-3">
            But not <SwipeSpan phrases={badActorsPhrases} className="border-blue-400 " />
            </span>
          </p>
        </h1>

        {/* Email Input + Button */}
        <div className="mt-6 md:mt-8 lg:mt-10 flex flex-col sm:flex-row w-[70%] md:bg-black/80 rounded-xl md:rounded-2xl py-3 md:py-4 md:px-2 px-1 overflow-hidden md:shadow-lg">
          <input
            type="email"
            placeholder="Your work email"
            className="flex-1 md:bg-transparent px-5 rounded-lg bg-black/10 md:px-5 py-3 w-full text-white placeholder-white md:placeholder-gray-400 md:outline-none outline-1 outline-gray-400 mb-2 sm:mb-0"
            
          />
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 md:px-8 lg:px-10 py-3 rounded-md font-semibold hover:cursor-pointer w-full sm:w-auto">
            Get started
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="xl:w-[290px]  md:w-[250px] w-[140px] absolute right-50 md:right-25 lg:right-30 xl:right-55 2xl:top-42 -bottom-25 z-10 overflow-hidden">
        <img
          src="login-box.svg"
          alt="Login UI"
          className="w-full h-auto border-2 border-gray-400 px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 rounded-xl md:rounded-2xl bg-white/20"
          style={{background:"linear-gradient(26deg, rgba(255, 255, 255, 0.25) -32.04%, rgba(255, 255, 255, 0) 133.43%"}}
        />
      </div>

    </div>
      <DevDayLanding/>
      <Cards/>
      <IntegrationSection/>
      <Video/>
      <Marquee/>
      <IdentityDashboard/>
      
      <Resources/>
      </>
  )
}

export default HeroSection
