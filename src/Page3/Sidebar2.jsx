import React from 'react'

import { Search, } from "lucide-react"
import { useState } from "react"

const Sidebar2 = () => {
    const [searchQuery, setSearchQuery] = useState("")
  return (
    <div className="w-[25%] h-screen overflow-y-scroll border-r border-gray-800 py-6 px-3">
  <div className="mb-8">
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <input
        type="text"
        placeholder="Search code samples"
        className="w-full bg-gray-800/50 rounded-md py-2 pl-10 pr-4 text-sm text-gray-300"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  </div>

  {/* Application Type */}
  <div className="mb-8">
    <h3 className="text-xs font-bold tracking-wider uppercase mb-4 py-2 border-b-1 border-gray-500">Application Type</h3>
    <div className="space-y-3">
      <label className="flex items-center space-x-3">
        <input type="checkbox" className="rounded border-gray-600 text-blue-600" />
        <span className="text-xs text-gray-400">Backend/API</span>
      </label>
      <label className="flex items-center space-x-3">
        <input type="checkbox" className="rounded border-gray-600 text-blue-600" />
        <span className="text-xs text-gray-400">Regular Web App</span>
      </label>
      <label className="flex items-center space-x-3">
        <input type="checkbox" className="rounded border-gray-600 text-blue-600" />
        <span className="text-xs text-gray-400">Single-Page App</span>
      </label>
    </div>
  </div>

  {/* Language */}
  <div className="mb-8">
    <h3 className="text-xs font-bold tracking-wider uppercase mb-4 py-2 border-b-1 border-gray-500">Language</h3>
    <div className="space-y-3">
      {["C#", "Elixir", "Golang", "Java", "JavaScript", "PHP", "Python", "Ruby", "Rust", "TypeScript"].map(
        (lang) => (
          <label key={lang} className="flex items-center space-x-3">
            <input type="checkbox" className="rounded border-gray-600 text-blue-600" />
            <span className="text-xs text-gray-400">{lang}</span>
          </label>
        )
      )}
    </div>
  </div>

  {/* Framework */}
  <div className="mb-8">
    <h3 className="text-xs font-bold tracking-wider uppercase mb-4 py-2 border-b-1 border-gray-500">Framework</h3>
    <div className="space-y-3">
      {[
        "Actix Web", "Angular", "ASP.NET Core", "Django", "Express.js", "FastAPI", "Flask",
        "Laravel", "Lumen", "NextJS", "Next.js", "Phoenix", "Rails", "React", "Spring",
        "Spring WebFlux", "Standard Library", "Svette", "Symfony", "Vue"
      ].map((framework) => (
        <label key={framework} className="flex items-center space-x-3">
          <input type="checkbox" className="rounded border-gray-600 text-blue-600" />
          <span className="text-xs text-gray-400">{framework}</span>
        </label>
      ))}
    </div>
  </div>
</div>
  )
}

export default Sidebar2
