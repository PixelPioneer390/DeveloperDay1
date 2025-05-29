import { useState, useEffect } from "react";

function TimeBlock({ value, label }) {
  return (
    <div className="text-center bg-gradient-to-r from-[#171717] to-[#111111]  md:px-6 py-8 rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
      <div className="xl:text-8xl lg:text-4xl text-2xl ">{value}</div>
      <div className="xl:text-lg lg:text-md text-xs text-gray-300 mt-2.5 font-semibold">{label}</div>
    </div>
  );
}

export default function DevDayLanding() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Safe date format: June = 5 (month is 0-indexed)
    const eventDate = new Date(2025, 5, 18, 0, 0, 0).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="2xl:my-15  border-b-[0.2rem] text-white flex flex-col items-center justify-center p-8 2xl:w-[85%] mx-auto"
    style={{
          borderImageSlice: 1,
          borderImageSource:
            "linear-gradient(135deg, rgb(76, 183, 163) 0%, rgb(63, 89, 228) 50%, rgb(64, 22, 160) 100%)",
          borderStyle: "solid",
        }}>
      <div className=" w-full flex flex-col md:flex-row md:justify-evenly">
        <div className="flex flex-col items-start">
          <h1 className="text-5xl xl:text-6xl font-semibold mb-6">
            dev_day<span className="bg-gradient-to-b from-[#4AAAAD] font-normal to-indigo-700 text-transparent bg-clip-text">(</span>
            25<span className="bg-gradient-to-b from-[#4AAAAD] to-indigo-700 text-transparent bg-clip-text font-normal">)</span>
          </h1>
          <p className="text-lg lg:text-xl md:max-w-xl">
            Grab your popcorn and join us on June 18th to learn about building auth for humans and AI agents.
          </p>
        <button className="bg-custom-gradient hover:cursor-pointer glow-hover text-white px-8 lg:px-10 py-3 rounded-md text-lg font-medium transition duration-300 my-4">
  Save your spot
</button>

        </div>

        <div className="lg:mb-8">
          <p className="text-sm xl:text-lg tracking-widest uppercase text-gray-400 font-semibold mb-6">
            JUNE 18, 2025 &nbsp; • &nbsp; VIRTUAL LIVESTREAM
          </p>

          <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 w-full">
            <TimeBlock value={String(timeLeft.days).padStart(2, "0")} label="DAYS" className="px-5 py-10 "/>
            <TimeBlock value={String(timeLeft.hours).padStart(2, "5")} label="HOURS" className="px-5 py-10 "/>
            <TimeBlock value={String(timeLeft.minutes).padStart(2, "0")} label="MINUTES" className="px-5 py-10"/>
            <TimeBlock value={String(timeLeft.seconds).padStart(2, "0")} label="SECONDS" className="px-5 py-10 "/>
          </div>
        </div>

      </div>
    </div>
  );
}
