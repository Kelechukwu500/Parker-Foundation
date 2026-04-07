import React from "react";
import { FaCookieBite, FaInfoCircle, FaShieldAlt } from "react-icons/fa";

const CookiesPolicy = () => {
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
            Cookies Policy
          </h1>
          <p className="text-lg text-gray-600">
            This policy explains how Charlie Parker C. Global Foundation uses
            cookies on our website.
          </p>
        </header>

        {/* Section: Introduction */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaCookieBite className="text-3xl text-teal-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Introduction
            </h2>
          </div>
          <p className="text-gray-700">
            Cookies are small text files placed on your device when you visit
            our website. They help enhance your browsing experience and allow us
            to understand website usage patterns.
          </p>
        </div>

        {/* Section: Types of Cookies */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaInfoCircle className="text-3xl text-teal-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Types of Cookies We Use
            </h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Necessary for website
              functionality and cannot be switched off.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Help us understand website
              usage to improve performance.
            </li>
            <li>
              <strong>Functional Cookies:</strong> Remember preferences to
              provide a personalized experience.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help track visitor activity
              anonymously to enhance the website experience.
            </li>
          </ul>
        </div>

        {/* Section: How We Use Cookies */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaShieldAlt className="text-3xl text-teal-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              How We Use Cookies
            </h2>
          </div>
          <p className="text-gray-700">We use cookies to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Enhance website performance</li>
            <li>Remember your preferences and settings</li>
            <li>Analyze site usage to improve user experience</li>
            <li>Ensure website security</li>
          </ul>
        </div>

        {/* Section: Managing Cookies */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Managing Cookies
          </h2>
          <p className="text-gray-700">
            You can control and manage cookies via your browser settings. Please
            note that disabling cookies may affect website functionality and
            your browsing experience.
          </p>
        </div>

        {/* Section: Updates to Cookies Policy */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Updates to This Policy
          </h2>
          <p className="text-gray-700">
            We may update this Cookies Policy from time to time to reflect
            changes in our practices. Updates will be posted on this page.
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

export default CookiesPolicy;
