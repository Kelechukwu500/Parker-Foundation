import React from "react";

const BronzeTier = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">
        Bronze Tier - Corporate Giving
      </h2>

      <p className="text-center text-gray-700 mb-6 max-w-2xl">
        Support one student’s education for a year and help create lasting
        impact. Bronze Tier is perfect for first-time corporate donors looking
        to make a meaningful contribution.
      </p>

      {/* Features */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mb-6 w-full">
        <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
          Bronze Tier Benefits
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Minimum donation: $500</li>
          <li>Recognition on website & newsletter</li>
          <li>Support one student’s education for a year</li>
          <li>Entry-level perks for first-time corporate donors</li>
          <li>Examples of programs funded by Bronze contributions</li>
        </ul>
      </div>

      {/* Call-to-Action Button */}
      <a
        href="/bronze-tier-partner-form"
        className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 transition mt-8"
      >
        Become a Bronze Tier Partner
      </a>
    </div>
  );
};

export default BronzeTier;
