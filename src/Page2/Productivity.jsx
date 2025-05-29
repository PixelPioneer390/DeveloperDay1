import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DeveloperProductivity() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth / 1.5;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1e2029] px-2 py-4 sm:p-6">
      <div className="w-full max-w-7xl bg-[#3D4047] rounded-3xl sm:rounded-4xl p-6 sm:p-10 md:p-16 lg:p-20 relative overflow-hidden">
        {/* Background decorative lines */}
        <div className="absolute right-0 top-1/2 w-1/2 h-40 opacity-20 pointer-events-none">
          <div className="absolute h-[1px] w-full bg-gradient-to-r from-purple-500 to-pink-500 transform rotate-3"></div>
          <div className="absolute h-[1px] w-full bg-gradient-to-r from-purple-500 to-pink-500 transform rotate-6 translate-y-6"></div>
          <div className="absolute h-[1px] w-full bg-gradient-to-r from-purple-500 to-pink-500 transform rotate-9 translate-y-12"></div>
        </div>

        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-15">
          Developer Productivity
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 sm:gap-6">
          {/* Left Column - Developer Tools */}
          <div className="bg-[#BDC4CF] rounded-2xl sm:rounded-3xl px-4 sm:px-6 pb-6 sm:pb-8 md:pb-10 lg:col-span-4">
            <h2 className="text-xs font-semibold text-black tracking-wider mb-3 sm:mb-4">
              DEVELOPER TOOLS
            </h2>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
              <div className="space-y-3 sm:space-y-4">
                <ToolCard
                  img="/devprod-jwt.svg"
                  title="JWT Tool"
                  description="Decode, verify, and debug JWTs."
                />
                <ToolCard
                  img="/devprod-2.svg"
                  title="WebAuthn Playground"
                  description="Interactive tutorial and WebAuthn debugger."
                />
                <ToolCard
                  img="/devprod-3.svg"
                  title="Passkeys Playground"
                  description="Learn how passkeys work using an interactive demo applications."
                />
                <ToolCard
                  img="/devprod-4.svg"
                  title="OpenID Connect Playground"
                  description="Learn how OpenID Connect works in an interactive environment."
                />
                <ToolCard
                  img="/devprod-5.svg"
                  title="SAML Tool"
                  description="Decode, inspect, and verify SAML messages."
                />
              </div>

              <div className="space-y-3 sm:space-y-4">
                <ToolCard
                  img="/devprod-r1.svg"
                  title="SDK Libraries"
                  description="Integrate Auth0 with your preferred language"
                />
                <ToolCard
                  img="/devprod-r2.svg"
                  title="Auth0 Deploy CLI"
                  description="Configure Auth0 from the terminal"
                />
                <ToolCard
                  img="/devprod-r3.svg"
                  title="Auth0 API"
                  description="Check the APIs for developers to consume in their applications."
                />
                <ToolCard
                  img="/devprod-r4.svg"
                  title="Auth0 Status Page"
                  description="Check the status of Auth0 services"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Integrations */}
          <div className="rounded-lg p-4 sm:p-6 lg:col-span-2">
            <h2 className="text-xs font-semibold text-gray-400 mb-3 sm:mb-4">
              INTEGRATIONS
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <IntegrationCard
                img="/devprod-marketplace.svg"
                title="Marketplace"
                description="Discover and enable the integrations you need to solve identity"
              />
              <IntegrationCard
                img="/code.svg"
                title="Code Samples"
                description="Experience the features of the Auth0 Identity Platform."
              />
              <IntegrationCard
                img="/guides.svg"
                title="Developer Guides"
                description="Learn how to secure apps with the Auth0 Identity Platform."
              />
            </div>
          </div>
        </div>

        {/* Language Section */}
        <div className="my-5 sm:mt-10 relative ">
          <h2 className="text-xs font-semibold text-gray-400 tracking-wider mb-4 sm:mb-6">
            GET STARTED WITH YOUR FAVORITE LANGUAGE
          </h2>

          {/* Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute md:-left-5 left-0 -bottom-15 sm:bottom-5 -translate-y-1/2 z-10 p-2 rounded-full text-white"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute md:-right-10 right-0 -bottom-15 sm:bottom-5  -translate-y-1/2 z-10 p-2 rounded-full text-white"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
            <div className="grid grid-flow-col auto-cols-[5rem] sm:auto-cols-[6rem] md:auto-cols-[7rem] lg:auto-cols-[8rem] gap-3 sm:gap-4 snap-x snap-mandatory px-2">
              <LanguageCard name="Angular" type="SINGLE PAGE APP" img="/angular.webp" className="snap-start" />
              <LanguageCard name="React" type="SINGLE PAGE APP" img="/react-logo.svg" className="snap-start" />
              <LanguageCard name="Vue (v3)" type="SINGLE PAGE APP" img="/vue.webp" className="snap-start" />
              <LanguageCard name="Python" type="BACKEND" img="/python.webp" className="snap-start" />
              <LanguageCard name="Node.js" type="BACKEND" img="/nodejs.webp" className="snap-start" />
              <LanguageCard name="ASP.NET Core" type="BACKEND" img="/net.webp" className="snap-start" />
              <LanguageCard name="Spring MVC" type="BACKEND" img="/spring.svg" className="snap-start" />
              <LanguageCard name="Express.js" type="BACKEND" img="/js.webp" className="snap-start" />
              <LanguageCard name="PHP" type="WEBAPP" img="/php.webp" animateOnScroll className="snap-start" />
              <LanguageCard name="iOS" type="MOBILE" img="/ios.webp" animateOnScroll className="snap-start" />
              <LanguageCard name="Android" type="MOBILE" img="/android.webp" animateOnScroll className="snap-start" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolCard({ img, title, description }) {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3 px-2 py-3 sm:py-4 mr-3 sm:mr-5 border-t border-gray-500 transition-colors">
      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="flex-grow">
        <h3 className="text-black text-xs sm:text-sm font-medium">{title}</h3>
        <p className="text-gray-700 text-[10px] sm:text-xs mt-1">{description}</p>
      </div>
    </div>
  );
}

function IntegrationCard({ img, title, description }) {
  return (
    <div className="flex items-start space-x-2 sm:space-x-3 border-t border-white py-3 sm:py-4 hover:bg-[#444652] transition-colors">
      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="flex-grow">
        <h3 className="text-white text-xs sm:text-sm font-medium">{title}</h3>
        <p className="text-gray-400 text-xs sm:text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}

function LanguageCard({ name, type, img, animateOnScroll = false, className = "" }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const content = (
    <div className={`flex flex-col items-center w-full ${className}`}>
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold mb-1 sm:mb-2">
        <img src={img} className="w-full h-full object-contain" alt={name} />
      </div>
      <span className="text-white text-xs sm:text-sm font-medium text-center">{name}</span>
      <span className="text-gray-500 text-[9px] sm:text-[10px] mt-1">{type}</span>
    </div>
  );

  return animateOnScroll ? (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {content}
    </motion.div>
  ) : (
    content
  );
}