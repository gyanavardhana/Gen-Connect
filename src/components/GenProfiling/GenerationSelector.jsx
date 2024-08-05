import React from "react";

const GenerationSelector = ({ selectedGeneration, onGenerationChange }) => {
  const generations = ["boomers", "millennials", "gen z", "gen alpha"];

  return (
    <div className="flex justify-center mb-12">
      <div className="bg-white p-2 rounded-full shadow-lg">
        {generations.map((generation, index) => (
          <button
            key={generation}
            onClick={() => onGenerationChange(generation)}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
              selectedGeneration === generation
                ? "bg-amber-500 text-white shadow-md transform scale-105"
                : "text-gray-600 hover:bg-gray-100"
            } ${index !== 0 ? "ml-2" : ""}`}
          >
            {generation.charAt(0).toUpperCase() + generation.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenerationSelector;
