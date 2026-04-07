import React from "react";
import { FaLock, FaUserShield, FaShieldAlt } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <section
      className="w-full min-h-screen p-8"
      style={{
        background: "linear-gradient(135deg, #07A3B2, #D9ECC7)",
      }}
    >
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Protecting your privacy is our priority at Charlie Parker C. Global
            Foundation.
          </p>
        </header>

        {/* Section: Introduction */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaLock className="text-3xl text-teal-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Introduction
            </h2>
          </div>
          <p className="text-gray-700">
            We respect your privacy and are committed to protecting your
            personal information. This privacy policy explains how we collect,
            use, and safeguard your information when you visit our website or
            interact with our services.
          </p>
        </div>

        {/* Section: Data Collection */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaUserShield className="text-3xl text-teal-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Data We Collect
            </h2>
          </div>
          <p className="text-gray-700 mb-2">
            We may collect information that you voluntarily provide when you:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Sign up for newsletters</li>
            <li>Make donations</li>
            <li>Fill contact forms</li>
          </ul>
        </div>

        {/* Section: How We Use Your Data */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaShieldAlt className="text-3xl text-teal-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              How We Use Your Data
            </h2>
          </div>
          <p className="text-gray-700">Your information is used to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Improve our services</li>
            <li>Process donations securely</li>
            <li>Send important updates and newsletters</li>
            <li>Respond to inquiries</li>
          </ul>
        </div>

        {/* Section: Data Security */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Data Security
          </h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational measures to
            protect your personal data against unauthorized access, alteration,
            disclosure, or destruction.
          </p>
        </div>

        {/* Section: Your Rights */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Your Rights
          </h2>
          <p className="text-gray-700">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Access your personal data</li>
            <li>Request corrections</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent</li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="text-center mt-10 border-t border-gray-300 pt-6">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Charlie Parker C. Global Foundation.
            All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
