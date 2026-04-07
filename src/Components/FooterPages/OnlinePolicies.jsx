import React from "react";
import {
  FaLock,
  FaUserShield,
  FaShieldAlt,
  FaCookieBite,
  FaInfoCircle,
  FaFileContract,
  FaGavel,
  FaDatabase,
  FaRegFileAlt,
  FaChild,
  FaCreditCard,
  FaUndo,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

const OnlinePolicies = () => {
  return (
    <section
      className="w-full min-h-screen p-8 bg-gray-200">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-16">
        {/* ================= PRIVACY POLICY ================= */}
        <div id="privacy-policy">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              At Charlie Parker C. Global Foundation, protecting your personal
              information is our top priority. This document explains how we
              collect, use, and safeguard the data you share with us.
            </p>
          </header>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaLock className="text-3xl text-teal-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Introduction
              </h2>
            </div>
            <p className="text-gray-700 mb-2">
              We understand the importance of privacy and are committed to
              maintaining the confidentiality and integrity of your personal
              information. This policy outlines the types of information we
              collect, how it is used, and the measures we take to ensure its
              protection.
            </p>
            <p className="text-gray-700">
              By using our website or services, you consent to the practices
              described in this policy. We encourage you to read this policy
              carefully to understand our approach to data privacy.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaChild className="text-3xl text-teal-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Child Privacy Policy
              </h2>
            </div>
            <p className="text-gray-700 mb-2">
              Protecting children's privacy is a priority. Our website and
              services are not intended for children under the age of 13. We do
              not knowingly collect or solicit personal information from
              children.
            </p>
            <p className="text-gray-700">
              If we become aware that a child has provided personal information,
              we promptly take measures to delete such data. Parents or
              guardians who believe their child may have shared personal
              information with us can contact us to request its removal.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaUserShield className="text-3xl text-teal-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Online Privacy Policy
              </h2>
            </div>
            <p className="text-gray-700 mb-2">
              Our online privacy practices are designed to give you full control
              over your personal data. We collect information such as email
              addresses, names, and donation history only when voluntarily
              submitted through our website.
            </p>
            <p className="text-gray-700">
              We ensure that data is securely stored and not shared with third
              parties without explicit consent. Our website uses encryption and
              other security measures to protect sensitive data during
              transmission.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaShieldAlt className="text-3xl text-teal-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Security Policy
              </h2>
            </div>
            <p className="text-gray-700 mb-2">
              Security of your information is crucial. We use industry-standard
              safeguards including firewalls, encryption, and access controls to
              prevent unauthorized access, disclosure, or loss of your data.
            </p>
            <p className="text-gray-700">
              Our staff are trained on privacy best practices, and periodic
              audits are conducted to ensure ongoing protection. Despite these
              measures, we advise users to safeguard their personal accounts by
              using strong passwords and practicing caution online.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaCreditCard className="text-3xl text-teal-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Billing Policy
              </h2>
            </div>
            <p className="text-gray-700 mb-2">
              Payments for donations, events, or services are processed securely
              through trusted payment gateways. We comply with all relevant
              financial regulations to ensure the integrity of transactions.
            </p>
            <p className="text-gray-700">
              Receipts and transaction confirmations are automatically sent to
              your registered email. For any billing inquiries or discrepancies,
              our support team is available to provide assistance promptly.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaUndo className="text-3xl text-teal-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Return Policy
              </h2>
            </div>
            <p className="text-gray-700 mb-2">
              As a charitable organization, donations are non-refundable.
              However, we take all transaction errors seriously and will work to
              correct any issues that arise.
            </p>
            <p className="text-gray-700">
              Users should verify all transaction details before submitting. If
              you encounter a problem, contact our support team immediately for
              resolution. Transparency and accountability guide our return and
              correction policies.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaUser className="text-3xl text-teal-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Account Policy
              </h2>
            </div>
            <p className="text-gray-700 mb-2">
              User accounts help us provide personalized experiences. Users are
              responsible for maintaining the confidentiality of their login
              credentials and ensuring no unauthorized access occurs.
            </p>
            <p className="text-gray-700">
              Any suspicious activity should be reported immediately. We reserve
              the right to suspend or terminate accounts involved in violations
              of our terms or security policies.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FaEnvelope className="text-3xl text-teal-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Contacting Us
              </h2>
            </div>
            <p className="text-gray-700 mb-2">
              For inquiries, support, or feedback, you can contact us through
              any of our offices or via email. We strive to respond to all
              inquiries within 48 hours.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Nigeria Office:</strong> Plot 208 Zakari Maimalari
                Street, Gateway Plaza, Central Area, Abuja FCT, Nigeria.
                <br />
                <strong>Phone:</strong> +234 9035415114
              </li>
              <li>
                <strong>UK Office:</strong> 38 Richmond Road, Cardiff, United
                Kingdom.
                <br />
                <strong>Phone:</strong> +44 7708 456847
              </li>
              <li>
                <strong>Email:</strong> charleswings1@gmail.com
              </li>
            </ul>
            <p className="text-gray-700 mt-2">
              We welcome your questions and feedback on any aspect of our
              policies, programs, or services. Your trust and engagement help us
              operate transparently and effectively.
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="text-center mt-12 border-t border-gray-300 pt-6">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Charlie Parker C. Global Foundation.
            All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default OnlinePolicies;
