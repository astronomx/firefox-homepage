"use client";
import React, { useState } from "react";

export default function Cards() {
  const [showProgramming, setShowProgramming] = useState(false);
  const [showWorkingTools, setShowWorkingTools] = useState(false);
  const [showEntertainment, setShowEntertainment] = useState(false);

  const toggleProgramming = () => setShowProgramming(!showProgramming);
  const toggleWorkingTools = () => setShowWorkingTools(!showWorkingTools);
  const toggleEntertainment = () => setShowEntertainment(!showEntertainment);

  return (
    <>
      <div className="flex flex-row space-x-12">
        {/* Programming Dropdown */}
        <div className="relative">
          <button
            onClick={toggleProgramming}
            className="card-toggle-button border-b-2 border-white text-2xl font-bold"
          >
            Programming
          </button>
          {showProgramming && (
            <div className="dropdown bg-[#FF9EFF] rounded-xl p-4 absolute left-0 mt-2">
              {/* Programming card content here */}
            </div>
          )}
        </div>

        {/* Working Tools Dropdown */}
        <div className="relative">
          <button onClick={toggleWorkingTools} className="card-toggle-button">
            Working Tools
          </button>
          {showWorkingTools && (
            <div className="dropdown bg-[#FF9EFF] rounded-xl p-4 absolute left-0 mt-2">
              {/* Working Tools card content here */}
            </div>
          )}
        </div>

        {/* Entertainment Dropdown */}
        <div className="relative">
          <button onClick={toggleEntertainment} className="card-toggle-button">
            Entertainment
          </button>
          {showEntertainment && (
            <div className="dropdown bg-[#FF9EFF] rounded-xl p-4 absolute left-0 mt-2">
              {/* Entertainment card content here */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
