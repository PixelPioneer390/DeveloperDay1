import React from 'react';

const Cards = () => {
  return (
    <div
  className="2xl:w-[85%] w-full mx-auto xl:py-20 py-5 px-2 md:px-4"
  style={{
    borderBottom: "4px solid", // you define it here instead of Tailwind class
    borderImageSlice: 1,
    borderImageSource: "linear-gradient(90deg, rgb(95, 91, 243), rgb(242, 172, 132))",
  }}
>


        <div className='mb-10'>
        <h1 className='text-white text-2xl md:text-5xl xl:w-[70%] text-center xl:text-start mb-5'>Auth0 is an easy to implement, adaptable authentication and authorization platform</h1>
        <p className='md:text-2xl text-md text-center xl:text-start text-white'>Basically, we make your login box awesome. Learn about our latest innovations:</p>
        </div>    
    <div className="flex  flex-col xl:flex-row gap-5   ">
      {/* Left Panel - Auth for GenAI */}
      <div className="w-full relative   xl:w-1/2 overflow-hidden bg-gradient-to-br from-[#111111] to-[#271155] py-2 px-4 md:py-8 md:px-10 flex flex-col items-start justify-between gap-5 md:gap-10 rounded-lg md:rounded-2xl">
      <img src="/GenAI.png" alt="" className='absolute md:w-85 w-35 right-1 -bottom-5 md:top-5'/>
        <div className='flex flex-col '>
          <span className="text-[#a78bfa] md:text-sm text-xs font-normal tracking-wider">
            DEVELOPER PREVIEW
          </span>
        

        
          <h1 className="md:text-3xl text-xl font-bold mb-4">
            <span className="text-white">Auth for </span>
            <span className="text-[#a78bfa]">GenAI</span>
          </h1>

          <p className="text-gray-300 md:text-lg text-sm max-w-xs">
            Enjoy securing your GenAI apps with the developer experience Auth0 is known for.
          </p>
          </div>
        

        <button className="border hover:cursor-pointer border-white text-white md:px-8 px-4 py-2 md:py-4 rounded md:w-45 hover:bg-white/10 transition-colors">
          Get started
        </button>
    </div>


      {/* Right Panel - Fine-Grained Authorization */}
      <div className="w-full relative  xl:w-1/2 bg-gradient-to-br overflow-hidden from-[#111111] to-[#271155] py-2 px-4 md:py-8 md:px-10 flex flex-col items-start justify-between gap-5 md:gap-10 rounded-lg md:rounded-2xl">
           <img src="/fga.png" alt="" className='absolute md:w-55 w-30 md:-right-2 -right-7 md:top-8 top-5 '/>
           <div className="flex flex-col ">
          <span className="text-[#a78bfa] md:text-sm text-xs font-normal tracking-wider">
            NOW GENERALLY AVAILABLE
          </span>
         
          <h1 className="md:text-3xl text-xl font-bold text-white mb-4">
            Fine-Grained Authorization
          </h1>

          <p className="text-gray-300 md:text-lg text-sm w-65 max-w-xs">
            Enable user collaboration and granular access control in your apps using developer-friendly APIs.
          </p>
            </div>
          {/* Code snippet mockup */}
         

          <button className="border hover:cursor-pointer border-white text-white md:px-8 px-4 py-2 md:py-4 rounded md:w-45 hover:bg-white/10 transition-colors">
            Learn more
          </button>
        
      </div>
    </div>
    </div>
  );
};

export default Cards;
