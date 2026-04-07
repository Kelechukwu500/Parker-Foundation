import React from "react";
import Care from "../../assets/care.jpg"; // Replace with your image path
import HandbookPDF from "../HandbookPDF.jsx"; // PDF download component
import { Link } from "react-router-dom";
const Handbook = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start gap-12">
        {/* Left Side - Write Ups */}
        <div className="lg:w-2/3 flex flex-col gap-6">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-blue-500">Handbook</h2>

          {/* Subheading */}
          <p className="text-lg italic text-gray-600">
            Your guide to our programs, policies, and best practices.
          </p>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            The <strong>Charlie Parker C. Global Foundation</strong> Handbook
            serves as a comprehensive resource for staff, volunteers, and
            program participants. It provides key information on our programs,
            policies, procedures, and guidelines to ensure everyone is
            empowered, informed, and aligned with our mission.
          </p>

          {/* Sections / Chapters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                About Us
              </h3>
              <p className="text-gray-600">
                Mission, vision, values, and organizational structure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Programs Overview
              </h3>
              <p className="text-gray-600">
                Details of programs and services offered by the foundation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Volunteer Guidelines
              </h3>
              <p className="text-gray-600">
                Roles, responsibilities, and expectations for volunteers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Safety & Protection Policies
              </h3>
              <p className="text-gray-600">
                Child safeguarding, emergency procedures, and ethical
                guidelines.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Communication & Reporting
              </h3>
              <p className="text-gray-600">
                How to report concerns, provide feedback, and internal
                communication protocols.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Resources & Tools
              </h3>
              <p className="text-gray-600">
                Forms, templates, training materials, and links to relevant
                resources.
              </p>
            </div>
          </div>

          {/* Downloadable / Interactive Elements */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            {/* Render PDF download button component */}
            <HandbookPDF />

           
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/3 relative">
          <img
            src={Care}
            alt="Handbook"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Handbook;
