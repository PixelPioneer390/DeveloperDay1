import { ArrowRight } from "lucide-react"
// import { Link } from "react-router-dom"


export default function Auth0Banner() {
  return (
    <div className="flex justify-center  items-center w-full p-4">
      <div className="max-w-2xl w-full bg-[#33363B] rounded-4xl p-6 shadow-lg flex items-center justify-between">
        <div className="w-[45%]">
        <h2 className="text-white text-xl font-medium mb-2">Ready to secure your apps?</h2>
        <p className="text-gray-300 text-sm mb-4">
          Get Auth0 for free with up to 7,500 active users and unlimited logins. No credit card required.
        </p>
        </div>
        <div className="flex  gap-3">
          <a
            href="#"
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md font-medium text-sm hover:bg-gray-100 transition-colors"
          >
            Start Building <ArrowRight size={16} />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 bg-[#6366f1] text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-[#5254cc] transition-colors"
          >
            Pricing <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}

