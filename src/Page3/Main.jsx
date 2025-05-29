import React from "react";
import { ChevronRight } from "lucide-react";

const codeSamples = [
  {
    id: 1,
    title: "Actix Web/Rust API:",
    subtitle: "Authorization Code Sample",
    description:
      "Code sample of a simple Actix Web server that implements token-based authorization using Auth0.",
    applicationType: "Backend/API",
    language: "Rust",
    framework: "Actix Web",
    icon: <RustIcon />,
  },
  {
    id: 2,
    title: "Actix Web/Rust API:",
    subtitle: "Role-Based Access Control Code Sample",
    description:
      "Code sample of a simple Actix Web server that implements Role-Based Access Control (RBAC) using Auth0.",
    applicationType: "Backend/API",
    language: "Rust",
    framework: "Actix Web",
    icon: <RustIcon />,
  },
  {
    id: 3,
    title: "ASP.NET Core API:",
    subtitle: "Web API Authorization",
    description:
      "Code sample of an ASP.NET Core API with token-based authorization using Auth0.",
    applicationType: "Backend/API",
    language: "C#",
    framework: "ASP.NET Core",
    icon: <DotNetIcon />,
  },
  {
    id: 4,
    title: "Next.js Application:",
    subtitle: "Auth0 Login Integration",
    description:
      "Example of how to use Auth0 authentication in a Next.js frontend app.",
    applicationType: "Frontend/Web App",
    language: "JavaScript",
    framework: "Next.js",
    icon: <Nextjs />,
  },
  {
    id: 5,
    title: "React Application:",
    subtitle: "Auth0 Login Integration",
    description:
      "React sample app demonstrating login and token management using Auth0.",
    applicationType: "Frontend/Web App",
    language: "JavaScript",
    framework: "React",
    icon: <React1 />,
  },
  {
    id: 6,
    title: "React + TypeScript App:",
    subtitle: "Role-Based Access Control",
    description:
      "RBAC example in a React app using TypeScript and Auth0.",
    applicationType: "Frontend/Web App",
    language: "TypeScript",
    framework: "React",
    icon: <ReactTS />,
  },
  {
    id: 7,
    title: "Node.js API:",
    subtitle: "JWT Authorization with Auth0",
    description:
      "Node.js backend API using JWTs for secure access via Auth0.",
    applicationType: "Backend/API",
    language: "JavaScript",
    framework: "Express.js",
    icon: <NJS />,
  },
  {
    id: 8,
    title: "Next.js + TypeScript App:",
    subtitle: "Secure Auth0 Integration",
    description:
      "Next.js frontend using TypeScript with secure Auth0 login flow.",
    applicationType: "Frontend/Web App",
    language: "TypeScript",
    framework: "Next.js",
    icon: <Nextts />,
  },
  {
    id: 9,
    title: "Django/Python API:",
    subtitle: "Authorization Code Sample",
    description:
      "Code sample of a simple Django server that implements token-based authorization using Auth0.",
    applicationType: "Backend/API",
    language: "Python",
    framework: "Django",
    icon: <Svelte />,
  }
];

const Main = ({ filters, searchQuery }) => {
  const filteredSamples = codeSamples.filter((sample) => {
    const hasApplicationTypeFilter = filters.applicationType.length > 0;
    const hasLanguageFilter = filters.language.length > 0;
    const hasFrameworkFilter = filters.framework.length > 0;

    const applicationTypeMatch =
      !hasApplicationTypeFilter || filters.applicationType.includes(sample.applicationType);
    const languageMatch =
      !hasLanguageFilter || filters.language.includes(sample.language);
    const frameworkMatch =
      !hasFrameworkFilter || filters.framework.includes(sample.framework);

    const searchMatch =
      searchQuery.trim() === "" ||
      sample.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sample.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sample.description.toLowerCase().includes(searchQuery.toLowerCase());

    return applicationTypeMatch && languageMatch && frameworkMatch && searchMatch;
  });




  return (
    <div className="h-screen ml-5 overflow-y-scroll hide-scrollbar">
      <div className="py-6 overflow-auto">
        <div className="w-full mx-auto">
          <div className="mb-8 text-sm">
            <span className="text-gray-400">Resources</span>
            <span className="mx-2 text-gray-600">/</span>
            <span>Code Samples</span>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Code Samples</h1>
            <p className="text-gray-400">
              Experience the identity and security features of Auth0
            </p>
          </div>

          <div className="border-b border-gray-600"></div>

          <div className="mb-8 mt-3">
            <h2 className="text-sm font-bold tracking-wider uppercase mb-4">
              Browse by Application Type
            </h2>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-transparent border border-gray-700 text-white rounded-md text-sm hover:bg-gray-800 transition-colors">
                Backend/API
              </button>
              <button className="px-4 py-2 bg-transparent border border-gray-700 text-white rounded-md text-sm hover:bg-gray-800 transition-colors">
                Single-Page App
              </button>
              <button className="px-4 py-2 bg-transparent border border-gray-700 text-white rounded-md text-sm hover:bg-gray-800 transition-colors">
                Regular Web App
              </button>
            </div>
          </div>

          <div className="border-b border-gray-600 mb-8"></div>

          <div className="space-y-6">
            {filteredSamples.map((sample, index) => (
              <React.Fragment key={sample.id}>
                <CodeSampleCard
                  icon={sample.icon}
                  title={sample.title}
                  subtitle={sample.subtitle}
                  description={sample.description}
                />
                {index < filteredSamples.length - 1 && (
                  <div className="border-b border-gray-600"></div>
                )}
              </React.Fragment>
            ))}

            <div className="border-t border-gray-600"></div>
            <div className="bg-[#5468FF] rounded-lg p-6 flex items-center">
              <div className="bg-white rounded-full p-4 flex items-center justify-center">
                <PlusIcon />
              </div>
              <div className="ml-6 flex-1">
                <h3 className="text-xl font-bold">Choose your own stack</h3>
                <p className="text-white/80">
                  Pick a frontend. Pick a backend. See how Auth0 integrates with
                  a full-stack application of your choice.
                </p>
              </div>
              <ChevronRight className="h-6 w-6 text-white/80" />
            </div>
            
            <div className="space-y-6">
            {filteredSamples.map((sample, index) => (
              <React.Fragment key={sample.id}>
                <CodeSampleCard
                  icon={sample.icon}
                  title={sample.title}
                  subtitle={sample.subtitle}
                  description={sample.description}
                />
                {index < filteredSamples.length - 1 && (
                  <div className="border-t border-gray-600"></div>
                )}
              </React.Fragment>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function CodeSampleCard({ icon, title, subtitle, description }) {
  return (
    <div className="flex items-center group cursor-pointer">
      <div className="flex-shrink-0">{icon}</div>
      <div className="ml-6 flex-1">
        <h3 className="font-bold text-white">
          {title}
          <br />
          {subtitle}
        </h3>
        <p className="text-gray-400 mt-1 w-[90%]">{description}</p>
      </div>
      <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
    </div>
  );
}

function RustIcon() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
        <img src="/actix.svg" alt="Actix" className="h-6 w-6" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#333] rounded-full flex items-center justify-center">
        <img src="/rust-logo.svg" alt="Rust" className="h-6 w-6" />
      </div>
    </div>
  );
}

function DotNetIcon() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center justify-center">
        <img src="/aspnet.svg" alt="ASP.NET" className="h-6 w-6" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/csharp-logo.svg" alt="C#" className="h-6 w-6" />
      </div>
    </div>
  );
}

function NJS() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center justify-center">
        <img src="/nodejs-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/js.webp" alt="" />
      </div>
    </div>
  );
}

function React1() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center z-10 justify-center">
        <img src="/react-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/js.webp" alt="" />
      </div>
    </div>
  );
}

function Nextjs() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center z-10 justify-center">
        <img src="/nextjs-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/js.webp" alt="" />
      </div>
    </div>
  );
}

function Nextts() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center z-10 justify-center">
        <img src="/nextjs-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/typescript-logo.svg" alt="" />
      </div>
    </div>
  );
}

function ReactTS() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center z-10 justify-center">
        <img src="/react-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/typescript-logo.svg" alt="" />
      </div>
    </div>
  );
}

function Svelte() {
  return (
    <div className="flex">
      <div className="w-12 h-12 rounded-full flex items-center z-10 justify-center">
        <img src="/svelte-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/js.webp" alt="" />
      </div>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19M5 12H19"
        stroke="#5468FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Main;
