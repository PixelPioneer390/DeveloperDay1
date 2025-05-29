import React from 'react'
import { ChevronRight } from "lucide-react"
import Auth0Banner from "./Auth0Banner"

const Main1 = () => {
  return (
    <div>
      <div className="flex-1 pl-20 py-6 overflow-auto">
        <div className="w-full mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm">
            <span className="text-gray-400">Resources</span>
            <span className="mx-2 text-gray-600">/</span>
            <span>Code Samples</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Code Samples</h1>
            <p className="text-gray-400">Experience the identity and security features of Auth0</p>
          </div>

          {/* Divider */}
          <div className="border-b border-white"></div>

          {/* Browse by Application Type */}
          <div className="mb-8 mt-3">
            <h2 className="text-sm font-bold tracking-wider uppercase mb-4">Browse by Application Type</h2>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-transparent border border-gray-700 rounded-md text-sm hover:bg-gray-800 transition-colors">
                Backend/API
              </button>
              <button className="px-4 py-2 bg-transparent border border-gray-700 rounded-md text-sm hover:bg-gray-800 transition-colors">
                Single-Page App
              </button>
              <button className="px-4 py-2 bg-transparent border border-gray-700 rounded-md text-sm hover:bg-gray-800 transition-colors">
                Regular Web App
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-b border-white mb-8"></div>

          {/* Code Sample Cards */}
          <div className="space-y-6">
            {/* Actix Web/Rust API: Authorization Code Sample */}
            <CodeSampleCard
              icon={<RustIcon />}
              title="Actix Web/Rust API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Actix Web server that implements token-based authorization using Auth0."
            />

            {/* Divider */}
            <div className="border-b border-white"></div>

            {/* Actix Web/Rust API: Role-Based Access Control Code Sample */}
            <CodeSampleCard
              icon={<RustIcon />}
              title="Actix Web/Rust API:"
              subtitle="Role-Based Access Control Code Sample"
              description="Code sample of a simple Actix Web server that implements Role-Based Access Control (RBAC) using Auth0."
            />

            {/* Divider */}
            <div className="border-b border-white"></div>

            {/* ASP.NET Core Code Sample: Web API Authorization */}
            <CodeSampleCard
              icon={<DotNetIcon />}
              title="ASP.NET Core Code Sample:"
              subtitle="Web API Authorization"
              description="Code sample of a simple ASP.NET Core server that implements token-based authorization using Auth0."
            />

            {/* Divider */}
            <div className="border-b border-white"></div>

            {/* Choose your own stack */}
            <div className="bg-[#5468FF] rounded-lg p-6 flex items-center">
              <div className="bg-white rounded-full p-4 flex items-center justify-center">
                <PlusIcon />
              </div>
              <div className="ml-6 flex-1">
                <h3 className="text-xl font-bold">Choose your own stack</h3>
                <p className="text-white/80">
                  Pick a frontend. Pick a backend. See how Auth0 integrates with a full-stack application of your
                  choice.
                </p>
              </div>
              <ChevronRight className="h-6 w-6 text-white/80" />
            </div>

            {/* Divider */}
            <div className="border-b border-white"></div>

            {/* ASP.NET Core v5 Code Sample: Web API Authorization */}
            <CodeSampleCard
              icon={<DotNetIcon />}
              title="ASP.NET Core v5 Code Sample:"
              subtitle="Web API Authorization"
              description="Code sample of a simple ASP.NET Core v5.0 server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<DotNetIcon />}
              title="ASP.NET Core v5 Code Sample:"
              subtitle="Web API Authorization"
              description="Code sample of a simple ASP.NET Core v5.0 server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<DotNetIcon />}
              title="ASP.NET Core v5 Code Sample:"
              subtitle="Web API Authorization"
              description="Code sample of a simple ASP.NET Core v5.0 server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Jang />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Jang />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<NJS />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<TS />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
             <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<NJS />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
             <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Fast />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
             <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Fast />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
             <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Flask />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
             <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Flask />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
             <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Larvel />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
             <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Larvel />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
             <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Larvel />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
             <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Larvel />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
             <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Lig />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
             <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Lig />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
             <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Next />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
             <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Next />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
             <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Phoenix />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Phoenix />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Rails />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Rails />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Java />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Java />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Java />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Java />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Java />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Java />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Go />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Go />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Symfony />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Symfony />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Ang />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Ang />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<React1 />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<ReactTS />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<React1 />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<ReactTS />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Svelte />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Vue />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Vue />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Vue />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<DotNetIcon />}
              title="ASP.NET Core v5 Code Sample:"
              subtitle="Web API Authorization"
              description="Code sample of a simple ASP.NET Core v5.0 server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<DotNetIcon />}
              title="ASP.NET Core v5 Code Sample:"
              subtitle="Web API Authorization"
              description="Code sample of a simple ASP.NET Core v5.0 server that implements token-based authorization using Auth0."
            />
             <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Larvel />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
             <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Nextjs />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
             <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Nextjs />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
             <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Nextts />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Rails />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Java />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
            <div className="border-b border-white"></div>
            <CodeSampleCard
              icon={<Symfony />}
              title="Django/Python API:"
              subtitle="Authorization Code Sample"
              description="Code sample of a simple Django server that implements token-based authorization using Auth0."
            />
          </div>
        </div>
      </div>
      <Auth0Banner/>
    </div>
  )
}

export default Main1; 



function CodeSampleCard({ icon, title, subtitle, description }) {
  return (
    <div className="flex items-center group cursor-pointer">
      <div className="flex-shrink-0">{icon}</div>
      <div className="ml-6 flex-1">
        <h3 className="font-bold">
          {title}
          <br />
          {subtitle}
        </h3>
        <p className="text-gray-400 mt-1 w-[90%]">{description}</p>
      </div>
      <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
    </div>
  )
}

// Icons
function RustIcon() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
        <img src="/actix.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#333] rounded-full flex items-center justify-center">
        <img src="/rust-logo.svg" alt="" />
      </div>
    </div>
  )
}

function DotNetIcon() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center justify-center">
        <img src="/aspnet.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/csharp-logo.svg" alt="" />
      </div>
    </div>
  )
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
  )
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
  )
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
  )
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
  )
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
  )
}
function Svelte() {
  return (
    <div className="flex">
      <div className="w-12 h-12  rounded-full flex items-center z-10 justify-center">
        <img src="/svelte-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/js.webp" alt="" />
      </div>
    </div>
  )
}
function TS() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center justify-center">
        <img src="/nodejs-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/typescript-logo.svg" alt="" />
      </div>
    </div>
  )
}
function Ang() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center justify-center">
        <img src="/angular-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/typescript-logo.svg" alt="" />
      </div>
    </div>
  )
}
function Java() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center justify-center">
        <img src="/spring-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/java-logo.svg" alt="" />
      </div>
    </div>
  )
}
function Vue() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center justify-center">
        <img src="/vue-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/js.webp" alt="" />
      </div>
    </div>
  )
}
function Next() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center justify-center z-10">
        <img src="/nestjs-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/typescript-logo.svg" alt="" />
      </div>
    </div>
  )
}
function Larvel() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center justify-center">
        <img src="/laravel-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/php-logo.svg" alt="" />
      </div>
    </div>
  )
}
function Symfony() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center justify-center">
        <img src="/symfony-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/php-logo.svg" alt="" />
      </div>
    </div>
  )
}
function Rails() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center justify-center">
        <img src="/rails-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/ruby-logo.svg" alt="" />
      </div>
    </div>
  )
}
function Lig() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center justify-center">
        <img src="/lumen-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/php-logo.svg" alt="" />
      </div>
    </div>
  )
}
function Flask() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center justify-center">
        <img src="/flask-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/python-logo.svg" alt="" />
      </div>
    </div>
  )
}
function Go() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center justify-center">
        <img src="/standard-library-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/golang-logo.svg" alt="" />
      </div>
    </div>
  )
}
function Fast() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center justify-center">
        <img src="/fastapi-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/python-logo.svg" alt="" />
      </div>
    </div>
  )
}

function Jang() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center justify-center">
        <img src="/django-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/python-logo.svg" alt="" />
      </div>
    </div>
  )
}
function Phoenix() {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-[#512BD4] rounded-full flex items-center justify-center">
        <img src="/phoenix-logo.svg" alt="" />
      </div>
      <div className="w-12 h-12 -ml-4 bg-[#0078D7] rounded-full flex items-center justify-center">
        <img src="/elixir-logo.svg" alt="" />
      </div>
    </div>
  )
}





function PlusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5V19M5 12H19" stroke="#5468FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)
}



