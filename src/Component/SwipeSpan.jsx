import React, { useState, useEffect, useRef } from "react";


const SwipeSpan = ({ phrases, className }) => {
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const containerRef = useRef(null);
  const phraseRefs = useRef([]);

  const extendedPhrases = [...phrases, phrases[0]]; // duplicate first phrase at end

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const current = phraseRefs.current[index];
    if (current) {
      setHeight(current.offsetHeight);
      setWidth(current.offsetWidth);
    }
  }, [index]);

  useEffect(() => {
    if (index === phrases.length) {
      // After animation completes, reset index to 0 without transition
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 1000); // match duration of animation
      return () => clearTimeout(timeout);
    } else {
      setIsTransitioning(true);
    }
  }, [index, phrases.length]);

  return (
    <div
      className={`inline-block overflow-hidden transition-all  duration-1000 ease-in-out border rounded-3xl ${className}`}
      style={{
        height: height ? `${height}px` : "auto",
        width: width ? `${width}px` : "auto",
      }}
    >
      <div
        ref={containerRef}
        className={`flex flex-col items-start ${
          isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""
        }`}
        style={{
          transform: `translateY(-${index * height}px)`,
        }}
      >
        {extendedPhrases.map((phrase, i) => (
          <div
            key={i}
            ref={(el) => (phraseRefs.current[i] = el)}
            className="md:px-5 md:py-4 px-3 py-1 whitespace-nowrap text-center text-base sm:text-xl md:text-5xl  xl:text-6xl font-medium"
            style={{
              background:
                "linear-gradient(76deg, rgb(63, 89, 228) 0%, rgb(242, 172, 132) 100%) text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {phrase}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwipeSpan;
