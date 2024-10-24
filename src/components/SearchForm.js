"use client";
import React, { useEffect } from "react";

export default function SearchForm({
  pokemonTypes,
  selectedType,
  setSelectedType,
  searchTerm,
  setSearchTerm,
  handleSearch,
}) {
  return (
    <div className="flex gap-4 items-center mb-6">
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="border border-gray-300 rounded-md p-2"
      >
        <option value="">Select Type</option>
        {pokemonTypes.map((type) => (
          <option key={type.type} value={type.url}>
            {type.type}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded-md p-2 flex-1"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Search
      </button>
    </div>
  );
}
