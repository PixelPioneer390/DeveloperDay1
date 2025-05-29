import React from "react";
import { Search } from "lucide-react";

const Sidebar = ({ filters, onFilterChange, searchQuery, onSearchChange }) => {
  return (
    <div>
      <div className="h-screen overflow-y-scroll border-r border-gray-800 py-6 px-3">
        <div className="mb-8">
            <div className="relative px-6 pt-4">
            <Search className="absolute left-9 top-[60%] transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search code samples"
              className="w-full bg-gray-800/50 rounded-md py-2 pl-10 pr-4 text-sm text-gray-300"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        {/* Application Type */}
        <div className="mb-8">
          <h3 className="text-xs font-bold tracking-wider uppercase mb-4 py-2 border-b border-gray-800">
            Application Type
          </h3>
          <div className="space-y-3">
            {["Backend/API", "Regular Web App", "Single-Page App"].map((type) => (
              <label key={type} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="rounded border-gray-600 text-blue-600"
                  checked={filters.applicationType.includes(type)}
                  onChange={() => onFilterChange("applicationType", type)}
                />
                <span className="text-sm text-gray-400">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Language */}
        <div className="mb-8">
          <h3 className="text-xs font-bold tracking-wider uppercase mb-4 py-2 border-b border-gray-800">
            Language
          </h3>
          <div className="space-y-3">
            {[
              "C#",
              "Elixir",
              "Golang",
              "Java",
              "JavaScript",
              "PHP",
              "Python",
              "Ruby",
              "Rust",
              "TypeScript",
            ].map((lang) => (
              <label key={lang} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="rounded border-gray-600 text-blue-600"
                  checked={filters.language.includes(lang)}
                  onChange={() => onFilterChange("language", lang)}
                />
                <span className="text-sm text-gray-400">{lang}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Framework */}
        <div className="mb-8">
          <h3 className="text-xs font-bold tracking-wider uppercase mb-4 py-2 border-b border-gray-800">
            Framework
          </h3>
          <div className="space-y-3">
            {[
              "Actix Web",
              "Angular",
              "ASP.NET Core",
              "Django",
              "Express.js",
              "FastAPI",
              "Flask",
              "Laravel",
              "Lumen",
              "NextJS",
              "Phoenix",
              "Rails",
              "React",
              "Spring",
              "Spring WebFlux",
              "Standard Library",
              "Svelte",
              "Symfony",
              "Vue",
            ].map((framework) => (
              <label key={framework} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="rounded border-gray-600 text-blue-600"
                  checked={filters.framework.includes(framework)}
                  onChange={() => onFilterChange("framework", framework)}
                />
                <span className="text-sm text-gray-400">{framework}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
