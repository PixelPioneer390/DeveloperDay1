import { PiApplePodcastsLogoFill } from "react-icons/pi";
import { PiGooglePodcastsLogoBold } from "react-icons/pi";
import { FaSpotify } from "react-icons/fa6";
export default function Podfooter() {
  return (
    <footer className="bg-[#2A2E35]  py-10 px-10">
      <div className="md:w-[50%]  mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-white text-sm mb-4 md:mb-0">© 2025 AuthO</div>

        <div className="flex flex-col items-center">
          <h3 className="text-white font-bold text-sm tracking-wider mb-3">
            OTHER PLACES YOU CAN FIND US
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#"
              className="bg-white rounded-md flex flex-col items-center py-2 w-40"
            >
              <div className="flex items-center gap-2">
                <PiApplePodcastsLogoFill className="text-black" />

                <div>
                  <p className="text-[10px] text-gray-600 uppercase">
                    LISTEN ON
                  </p>
                  <h3 className="font-semibold">Apple Podcasts</h3>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="bg-white rounded-md flex flex-col items-center  py-2 w-40"
            >
              <div className="flex items-center gap-2">
                <div>
                  <PiGooglePodcastsLogoBold />
                </div>
                <div>
                  <p className="text-[10px] text-gray-600 uppercase">
                    LISTEN ON
                  </p>
                  <h3 className="font-semibold">Google Podcasts</h3>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="bg-white rounded-md flex flex-col items-center py-2 w-40 md:w-30"
            >
              <div className="flex items-center gap-2">
                <FaSpotify />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-600 uppercase">
                    LISTEN ON
                  </span>
                  <span className="font-semibold">Spotify</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="hidden md:block"></div>
      </div>
    </footer>
  );
}
