import React from "react";

const PlatinumTier = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Platinum Tier - Corporate Giving
      </h2>

      <p className="text-center text-gray-700 mb-6 max-w-2xl">
        Comprehensive partnership including sponsorships, events, and brand
        visibility. Platinum Tier donors enjoy premium recognition and tailored
        engagement.
      </p>

      {/* Features */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mb-6 w-full">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Platinum Tier Benefits
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Minimum donation: $10,000+</li>
          <li>Custom partnership opportunities</li>
          <li>Naming rights for programs/events</li>
          <li>One-on-one engagement with leadership</li>
          <li>Priority access to media coverage and events</li>
          <li>Tailored impact reports for your organization</li>
        </ul>
      </div>

      {/* Call-to-Action */}
      <a
        href="/platinum-tier-partner-form"
        className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
      >
        Become a Platinum Tier Partner
      </a>
    </div>
  );
};

export default PlatinumTier;
