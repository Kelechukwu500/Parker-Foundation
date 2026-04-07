import React from "react";
import { FaDatabase, FaShieldAlt, FaRegFileAlt, FaLock } from "react-icons/fa";

const DataTerms = () => {
  return (
    <section
      className="w-full min-h-screen p-8"
      style={{
        background: "linear-gradient(135deg, #07A3B2, #D9ECC7)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Data Terms & Policies
          </h1>
          <p className="text-lg text-white/90">
            Guidelines for collection, use, and protection of data at Charlie
            Parker C. Global Foundation.
          </p>
        </header>

        {/* Content Sections */}
        <div className="grid gap-10">
          {/* Data Collection */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex gap-4 items-start">
            <FaDatabase className="text-4xl text-teal-600 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Data Collection</h2>
              <p className="text-gray-700">
                We collect necessary information to improve our services and
                ensure better engagement with our community. All data collection
                is in compliance with applicable laws and regulations.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex gap-4 items-start">
            <FaShieldAlt className="text-4xl text-teal-600 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Data Security</h2>
              <p className="text-gray-700">
                We implement strict technical and organizational measures to
                protect personal and organizational data against unauthorized
                access, loss, or misuse.
              </p>
            </div>
          </div>

          {/* Data Usage */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex gap-4 items-start">
            <FaRegFileAlt className="text-4xl text-teal-600 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Data Usage</h2>
              <p className="text-gray-700">
                Data collected is used exclusively for advancing our mission,
                improving services, and providing transparency to stakeholders.
                No data is sold to third parties.
              </p>
            </div>
          </div>

          {/* Data Privacy */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex gap-4 items-start">
            <FaLock className="text-4xl text-teal-600 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Data Privacy</h2>
              <p className="text-gray-700">
                We respect user privacy and ensure that all personal information
                is handled securely and transparently, in compliance with
                applicable data privacy laws.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12">
          <p className="text-white/90">
            By using our services, you acknowledge and accept our Data Terms as
            part of Charlie Parker C. Global Foundation’s commitment to
            transparency and security.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default DataTerms;
