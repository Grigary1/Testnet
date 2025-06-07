import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex items-center bg-white border-2 border-black rounded-full shadow-">
        
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent text-black px-4 py-3 focus:outline-none placeholder-gray-500"
        />
        <button className="px-6 py-3 bg-black hover:cursor-pointer text-white rounded-full transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white ml-4"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
