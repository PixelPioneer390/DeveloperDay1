import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Auth0Banner from './Auth0Banner';

const CodeSamples = () => {
  const [filters, setFilters] = useState({
    applicationType: [],
    language: [],
    framework: [],
  });

  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (category, value) => {
    setFilters((prev) => {
      const currentValues = prev[category];
      return {
        ...prev,
        [category]: currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value],
      };
    });
  };

  return (
    <div className="min-h-screen  text-white px-5">
      <div className="flex max-w-7xl mx-auto gap-10">
        {/* Sidebar */}
        <Sidebar
          filters={filters}
          onFilterChange={handleFilterChange}
          searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        />

        {/* Main Content */}
        <div className="flex flex-col flex-1 py-6 pr-6">
          <Main filters={filters} searchQuery={searchQuery} />
          <div className="mt-12">
            <Auth0Banner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeSamples;
