import React from "react";

const GoldTier = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center text-yellow-600 mb-6">
        Gold Tier - Corporate Giving
      </h2>

      <p className="text-center text-gray-700 mb-6 max-w-2xl">
        Partner for multiple initiatives and employee engagement programs. Gold
        Tier provides premium recognition and VIP access to events.
      </p>

      {/* Features */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mb-6 w-full">
        <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
          Gold Tier Benefits
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Minimum donation: $5,000</li>
          <li>Recognition in annual reports, social media, and website</li>
          <li>
            Partner for multiple initiatives and employee engagement programs
          </li>
          <li>VIP invitations to corporate events</li>
          <li>Exclusive project updates and success stories</li>
        </ul>
      </div>

      {/* Call-to-Action */}
      <a
        href="/gold-tier-partner-form"
        className="px-8 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
      >
        Become a Gold Tier Partner
      </a>
    </div>
  );
};

export default GoldTier;
