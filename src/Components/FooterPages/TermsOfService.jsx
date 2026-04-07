import React from "react";
import { FaFileContract, FaGavel, FaUserShield } from "react-icons/fa";

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Please read these terms of service carefully before using our
            website.
          </p>
        </header>

        {/* Section: Agreement */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaFileContract className="text-3xl text-teal-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Agreement</h2>
          </div>
          <p className="text-gray-700">
            By accessing or using the Charlie Parker C. Global Foundation
            website, you agree to be bound by these Terms of Service and all
            applicable laws and regulations. If you disagree with any part of
            the terms, you may not use our website.
          </p>
        </div>

        {/* Section: Use of Service */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaUserShield className="text-3xl text-teal-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Use of Service
            </h2>
          </div>
          <p className="text-gray-700">
            Our website and services are provided for lawful purposes only. You
            agree not to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Use the site for illegal or unauthorized purposes</li>
            <li>Interfere with or disrupt the site’s operation</li>
            <li>Access data without authorization</li>
          </ul>
        </div>

        {/* Section: Intellectual Property */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaGavel className="text-3xl text-teal-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Intellectual Property
            </h2>
          </div>
          <p className="text-gray-700">
            All content, trademarks, and data on this site, including text,
            graphics, logos, and software, are the property of Charlie Parker C.
            Global Foundation or its content suppliers and are protected by
            intellectual property laws.
          </p>
        </div>

        {/* Section: Limitation of Liability */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Limitation of Liability
          </h2>
          <p className="text-gray-700">
            Under no circumstances shall Charlie Parker C. Global Foundation be
            liable for any direct, indirect, incidental, consequential, or
            punitive damages arising from your access to or use of the website.
          </p>
        </div>

        {/* Section: Changes to Terms */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Changes to Terms
          </h2>
          <p className="text-gray-700">
            We reserve the right to modify these terms at any time. Updated
            terms will be posted on this page. Continued use of the website
            constitutes acceptance of the updated terms.
          </p>
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

export default TermsOfService;
