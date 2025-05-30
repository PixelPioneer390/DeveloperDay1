import { Play } from "lucide-react"
import AudioPopup from "./Songs/Regerts"
import JholAnjum from "./Songs/JholAnjum"
import Buraraha from "./Songs/Buraraha"
import SharnxBohemia from "./Songs/SharnxBohemia"

import Lejawab from "./Songs/Lejawab"
import Shikwa from "./Songs/Shikwa"
// import Jani from "./Songs/Jani"

export default function PodcastPage() {
  return (
    <div className="xl:max-w-[80%] mx-auto px-4 py-8 font-sans">
      <div className="flex flex-col md:flex-row gap-8">
        {/* RECENT EPISODES SECTION */}
        <div className="w-full">
          <h2 className="text-lg font-bold uppercase mb-6">RECENT EPISODES</h2>

          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase ml-3 mb-4">SEASON 4</h3>

            {/* Episode 1 */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:items-center px-5 py-3 mb-2 shadow-sm">
              <div className="w-20 h-20 flex-shrink-0 relative mr-4 overflow-hidden">
                <img
                  src="/podcast.png"
                  alt="Identity Unlocked"
                  width={80}
                  height={80}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-end p-1">
                  <div className="bg-white px-1 text-[8px]  uppercase font-bold">Identity Unlocked</div>
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="font-medium mb-1 text-gray-600 text-sm">SAML with Joni Brennan, Paul Madsen and Prateek Mishra</h4>
                <p className="text-sm text-gray-600 mb-2">41:35 | 08.31.2022</p>
              </div>
              <div className="md:ml-4 ">
               <Shikwa/>
              </div>
            </div>

            {/* Episode 2 */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:items-center px-5 mb-2 py-3 shadow-sm">
              <div className="w-20 h-20 flex-shrink-0 relative mr-4 overflow-hidden">
                <img
                  src="/podcast.png"
                  alt="Identity Unlocked"
                  width={80}
                  height={80}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-end p-1">
                  <div className="bg-white px-1 text-[8px] uppercase font-bold">Identity Unlocked</div>
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="font-medium mb-1 text-gray-600">Windows CardSpace with Stuart Kwan</h4>
                <p className="text-sm text-gray-600 mb-2">56:46 | 07.14.2022</p>
              </div>
              <div className="md:ml-4">
                <Lejawab/>
              </div>
            </div>

            {/* Episode 3 */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:items-center mb-6 px-5 py-3 shadow-sm">
              <div className="w-20 h-20 flex-shrink-0 relative mr-4 overflow-hidden">
                <img
                  src="/podcast.png"
                  alt="Identity Unlocked"
                  width={80}
                  height={80}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-end p-1">
                  <div className="bg-white px-1 text-[8px] uppercase font-bold">Identity Unlocked</div>
                </div>
              </div>
              <div className="flex-grow md:w-[55%]">
                <h4 className="font-medium mb-1 text-gray-600 ">FIDO Multi Device Credentials with Andrew Shikiar and Tim Cappalli</h4>
                <p className="text-sm text-gray-600 mb-2">41:26 | 06.14.2022</p>
              </div>
              <div className="md:ml-4">
                {/* <Jani/> */}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-bold ml-3 uppercase mb-4">SEASON 3</h3>

            {/* Episode 1 */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:items-center mb-2 px-5 py-3 shadow-sm ">
              <div className="w-20 h-20 flex-shrink-0 relative mr-4 overflow-hidden">
                <img
                  src="/track2.png"
                  alt="Identity Unlocked"
                  width={80}
                  height={80}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-end p-1">
                  <div className="bg-white px-1 text-[8px] uppercase font-bold">Identity Unlocked</div>
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="font-medium mb-1 text-gray-600">The Mobile Driving License Spec with Andrew Hughes</h4>
                <p className="text-sm text-gray-600 mb-2">34:15 | 01.10.2022</p>
              </div>
              <div className="md:ml-4">
                <SharnxBohemia/>
              </div>
            </div>

            {/* Episode 2 */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:items-center mb-2 px-5 py-3 shadow-sm">
              <div className="w-20 h-20 flex-shrink-0 relative mr-4 overflow-hidden">
                <img
                  src="/track2.png"
                  alt="Identity Unlocked"
                  width={80}
                  height={80}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-end p-1">
                  <div className="bg-white px-1 text-[8px] uppercase font-bold">Identity Unlocked</div>
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="font-medium mb-1 text-gray-600">OpenID Connect with Mike Jones</h4>
                <p className="text-sm text-gray-600 mb-2">43:24 | 12.20.2021</p>
              </div>
              <div className="md:ml-4 ">
                <Buraraha />
              </div>
            </div>

            {/* Episode 3 */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:items-center mb-2 px-5 py-3 shadow-sm">
              <div className="w-20 h-20 flex-shrink-0 relative mr-4 overflow-hidden">
                <img
                  src="/track2.png"
                  alt="Identity Unlocked"
                  width={80}
                  height={80}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-end p-1">
                  <div className="bg-white px-1 text-[8px] uppercase font-bold">Identity Unlocked</div>
                </div>
              </div>
              <div className="flex-grow md:w-[45%]">
                <h4 className="font-medium mb-1 text-gray-600 ">
                  Decentralized Identity and OpenID Connect with Kristina Yasuda and Oliver Terbu
                </h4>
                <p className="text-sm text-gray-600 mb-2">37:40 | 12.06.2021</p>
              </div>
              <div className="md:ml-4">
                <AudioPopup/>
              </div>
            </div>

            {/* Episode 4 */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:items-center mb-2 px-5 py-3 shadow-sm">
              <div className="w-20 h-20 flex-shrink-0 relative mr-4 overflow-hidden">
                <img
                  src="/track2.png"
                  alt="Identity Unlocked"
                  width={80}
                  height={80}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-end p-1">
                  <div className="bg-white px-1 text-[8px] uppercase font-bold">Identity Unlocked</div>
                </div>
              </div>
              <div className="flex-grow md:w-[45%]">
                <h4 className="font-medium mb-1 text-gray-600">
                  Global Assured Identity Network (GAIN) with Nat Sakimura and Torsten Lodderstedt
                </h4>
                <p className="text-sm text-gray-600 mb-2">27:25 | 11.10.2021</p>
              </div>
              <div className="md:ml-4">
                <JholAnjum/>
              </div>
            </div>
          </div>

           <div className="flex items-center justify-center py-4">
      <hr className="md:w-1/4 w-1/6 border-t border-gray-800" />
      <button className="px-4 py-2 font-bold text-gray-700 hover:cursor-pointer hover:text-gray-900 transition-colors">
        LOAD MORE EPISODES
      </button>
      <hr className="md:w-1/4 w-1/6 border-t border-gray-800" />
    </div>
        </div>

        {/* ABOUT THE SHOW SECTION */}
        <div className="w-full md:w-[50%] px-5 mt-12 ">
          <h2 className="text-lg font-bold uppercase mb-6 ">ABOUT THE SHOW</h2>
        <div className=" px-5 py-3 shadow-sm ">

          <div className="mb-8">
            <h3 className="text-md font-bold mb-2 ">IDENTITY, UNLOCKED.</h3>
            <p className="mb-12 text-sm font-bold">In Partnership with OpenID Foundation and IDPro</p>

            <div className="space-y-15 text-sm">
              <p>
                This is Identity, Unlocked with host Vittorio Bertocci. Identity, Unlocked is the podcast that discusses
                identity specs and trends from a developer perspective. Identity, Unlocked is powered by Auth0.
              </p>

              <p>
                Vittorio Bertocci is Principal Architect at Auth0 and applies his vast knowledge of the identity
                industry to Auth0 in all aspects of the company, including internal and external education, product
                innovation, and customer integration.
              </p>

              <p>
                Prior to Auth0, Bertocci spent 17 years at Microsoft, where he worked on the Azure Active Directory team
                and focused largely on improving the developer experience. As a published author of four identity books
                and a highly-trafficked blog, cloudidentity.com, his forward-thinking commentary has enabled him to
                speak at conferences, such as Identiverse, BUILD, PDC, TechEd, Cloud Identity Summit, and many other
                industry events around the world.
              </p>
            </div>
          </div>

          <div className="flex items-center mt-15">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
              <img
                  src="/khusra.png"
                  alt="Identity Unlocked"
                  width={80}
                  height={80}
                  className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold">Vittorio Bertocci</h4>
              <p className="text-sm font-bold">Principal Architect, Auth0</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
