import React from "react";

const SilverTier = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Silver Tier - Corporate Giving
      </h2>

      <p className="text-center text-gray-700 mb-6 max-w-2xl">
        Fund a community project or mentorship program. Silver Tier donors enjoy
        recognition and networking opportunities.
      </p>

      {/* Features */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mb-6 w-full">
        <h3 className="text-2xl font-semibold text-gray-500 mb-4">
          Silver Tier Benefits
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Minimum donation: $2,500</li>
          <li>Recognition on website, newsletter, and select events</li>
          <li>Invitations to networking or volunteering opportunities</li>
          <li>Support medium-scale programs</li>
          <li>Enhanced donor updates and insights</li>
        </ul>
      </div>

      {/* Call-to-Action */}
      <a
        href="/silver-tier-form"
        className="px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
      >
        Become a Silver Tier Partner
      </a>
    </div>
  );
};

export default SilverTier;
