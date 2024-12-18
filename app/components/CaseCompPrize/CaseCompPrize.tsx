"use client";
import React from "react";
import { FaTrophy } from "react-icons/fa";

const CaseCompPrize: React.FC = () => {
  return (
    <div className="bg-gray-200 shadow-md rounded-xl p-8 md:p-28 max-w-full mx-auto text-center border-t-8 border-[#9E2424]">
      <div className="flex items-center justify-center mb-6">
        <FaTrophy className="text-9xl text-yellow-500 mb-4" />
      </div>
      <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
        Win <span className="text-[#b52828]">$1000</span> in Prizes
      </h2>
      <p className="text-lg text-gray-800 mb-6">
        Participate for a chance to win up to $1000 in cash prizes. Showcase
        your skills and get recognized by industry leaders.
      </p>
      <button
        className="bg-[#b52828] hover:bg-[#E63946] text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        onClick={() =>
          window.open(
            "https://ca.cglink.me/2uc/r377381", // https://forms.office.com/r/DgCQWtMKgh
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        Register for Finals
      </button>
    </div>
  );
};

export default CaseCompPrize;
