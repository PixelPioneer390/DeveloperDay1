import React from 'react'

const Marquee = () => {
  return (
    <div>
       <div className="relative group overflow-hidden whitespace-nowrap h-24 mx-auto xl:w-7xl xl:my-15">
            <div className="flex gap-18 animate-marquee">
              <img src="/mazda.svg" alt="android" className="w-50  " />
              <img src="/pfizer.svg" alt="angularjs" className="w-50  " />
              <img src="/bluecross.svg" alt="css" className="w-50 " />
              <img src="/sage.svg" alt="ios" className="w-50" />
              <img src="/carrefour.svg" alt="javascript" className="w-50" />
              <img src="/1800flowers.svg" alt="node" className="w-50" />
              <img src="/polaris.svg" alt="android" className="w-50" />
              <img src="/mercado-libre.svg" alt="angularjs" className="w-50" />
              <img src="/generali.svg" alt="css" className="w-50" />
              <img src="/electrolux.svg" alt="ios" className="w-50" />
              <img src="/american-national.svg" alt="android" className="w-50" />
              <img src="/news-corp.svg" alt="angularjs" className="w-50" />
              <img src="/axa.svg" alt="css" className="w-50" />
              <img src="/mazda.svg" alt="ios" className="w-50  " />
              <img src="/pfizer.svg" alt="android" className="w-50" />
              <img src="/bluecross.svg" alt="angularjs" className="w-50 " />
              <img src="/sage.svg" alt="css" className="w-50" />
              <img src="/carrefour.svg" alt="ios" className="w-50 " />
              <img src="/1800flowers.svg" alt="css" className="w-50 " />
              <img src="/polaris.svg" alt="ios" className="w-50 " />
              <img src="/mercado-libre.svg" alt="android" className="w-50 " />
              <img src="/igenerali.svg" alt="angularjs" className="w-50 " />
              <img src="/electrolux.svg" alt="css" className="w-50 " />
              <img src="/american-national.svg" alt="ios" className="w-50 " />
            </div>

            {/* Hover Button */}
            <button className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-3 rounded-md font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              Learn More
            </button>
          </div>
    </div>
  )
}

export default Marquee
