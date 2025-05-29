import React from "react";

const Resources = () => {
  return (
    <section className=" text-white md:px-6 px-2 py-5 xl:py-12 ">
      <div className="xl:w-7xl mx-auto xl:my-15">
        {/* Heading */}
        <h2 className="uppercase text-md text-gray-400 tracking-widest mb-3 ">
          Resources
        </h2>
        <hr className="text-gray-800 mb-10" />
        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 r">
          {/* Big Left Card */}
          <div
            className="md:col-span-1 rounded-2xl  py-8 px-6 shadow-lg text-white"
            style={{
              backgroundImage:
                "linear-gradient(136deg, rgb(17, 17, 17) -47.25%, rgb(30, 30, 30) 11.1%, rgb(64, 22, 160) 93.37%, rgb(63, 89, 228) 178.71%)",
            }}
          >
            <p className="text-xs uppercase text-gray-300 mb-2">Blog</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Auth0 Announces <br />{" "}
              <span className="underline">Auth for GenAI →</span>
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Learn how Auth for GenAI helps secure your GenAI apps.
            </p>
            {/* Illustration section */}
            <div className="flex items-center justify-between mt-6">
              <img src="/GenAI.svg" alt="GenAI" className="lg:w-90 mx-auto w-120" />
              {/* Replace with your own image or SVG */}
            </div>
          </div>

          {/* Right Top Card */}
          <div className="flex flex-col gap-5 ">
            <div
              className="bg-[#191919] rounded-2xl md:py-10 py-7 md:px-6 px-3 shadow-md flex flex-col justify-between relative overflow-hidden  bg-no-repeat bg-right"
              style={{
                backgroundImage: "url('/background1.svg')",
                backgroundPosition: "right 0px top 0px",
                backgroundSize: "178px",
              }}
            >
              <p
                className="text-xs uppercase mb-2"
                style={{ color: "rgb(182, 202, 255)" }}
              >
                Blog
              </p>
              <h4 className="md:text-lg text-md font-semibold mb-2">
                Why Auth0? →
              </h4>
              <p className="md:text-md text-sm text-gray-400 md:w-full w-50">
                How to evaluate a Customer Identity and{" "}
                <br className="hidden md:block" /> Auth solution.
              </p>
            </div>

            {/* Right Bottom Card */}
            <div
              className="bg-[#191919] rounded-2xl md:py-10 py-7 md:px-6 px-3 shadow-md flex flex-col justify-between relative overflow-hidden bg-no-repeat bg-right"
              style={{
                backgroundImage: "url('/background2.svg')",
                backgroundPosition: "right -30px top 50px",
                backgroundSize: "135px", // Adjust Y-axis here
              }}
            >
              <p
                className="text-xs uppercase  mb-2"
                style={{ color: "rgb(182, 202, 255)" }}
              >
                Whitepaper
              </p>
              <h4 className="md:text-lg text-md font-semibold mb-2 md:w-full w-55">
                Build vs. Buy: Guide to Evaluating{" "}
                <br className="hidden md:block" /> Identity Management →
              </h4>
              <p className="md:text-md text-sm text-gray-400 w-58 md:w-full">
                6 signs you need to move from DIY to an{" "}
                <br className="hidden md:block" /> identity management solution.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0f0f0f] py-16 px-4 md:max-w-7xl max-w-full mx-auto">
        <h2 className="text-white text-3xl md:text-6xl mb-10">
          Start building for free
        </h2>

        <form className="mx-auto w-full flex flex-col  md:flex-row md:gap-0 gap-4 items-center md:border py-3 px-5 border-gray-600 rounded-3xl overflow-hidden">
          <input
            type="email"
            placeholder="Your work email"
            className="flex-1 bg-transparent text-white md:px-4 md:py-4 focus:outline-none md:outline-0 outline-1 rounded-lg outline-amber-50 px-4 py-2 placeholder-gray-400"
          />
          <button
            type="submit"
            className="bgm text-white font-semibold bmw text-3xl md:px-9 px-12 py-2 md:py-6 m-1 hover:cursor-pointer glow-hover rounded-2xl border-2 border-gray-600"
          >
            Get started →
          </button>
        </form>
      </div>
    </section>
  );
};

export default Resources;
