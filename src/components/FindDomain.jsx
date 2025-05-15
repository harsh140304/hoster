import React from "react";

const FindDomain = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Find Your Domain</h2>
      <p className="mb-6 text-gray-600">
        Search for your perfect domain name coming soon!
      </p>
      <input
        type="text"
        placeholder="Enter domain name"
        className="border p-3 rounded w-full mb-4"
        disabled
      />
      <button className="bg-gray-400 text-white rounded px-6 py-3 cursor-not-allowed" disabled>
        Search (Coming Soon)
      </button>
    </div>
  );
};

export default FindDomain;
