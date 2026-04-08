// NewestProjects.jsx
import React from "react";
import Aisha from "../assets/aisha.jpg";
import Women from "../assets/women.jpg";
import SafeSpace from "../assets/safespace.jpg";
import WomenPower from "../assets/womenpower.jpg";
import Hygiene from "../assets/hygiene.jpg";
import Entrepreneur from "../assets/entrepreneur.jpg";
import { Link } from "react-router-dom";

// Sample data for newest Gender Equality projects
const projects = [
  {
    id: 1,
    name: "Girls Education Initiative",
    description:
      "Empowering girls in underserved communities by providing scholarships, mentorship, and access to quality education.",
    image: Aisha,
    goal: 20000,
    raised: 4000,
    donors: 20,
    impact: "100+ girls",
    category: "Gender Equality",
    location: "Nigeria",
    status: "New",
  },
  {
    id: 2,
    name: "Women in Leadership Program",
    description:
      "Training and mentoring young women to become leaders in their communities and workplaces.",
    image: Women,
    goal: 25000,
    raised: 5000,
    donors: 20,
    impact: "50+ women",
    category: "Gender Equality",
    location: "Kenya",
    status: "New",
  },
  {
    id: 3,
    name: "Safe Spaces for Women",
    description:
      "Creating safe spaces in communities for women to gather, learn skills, and access support networks.",
    image: SafeSpace,
    goal: 15000,
    raised:6000,
    donors: 15,
    impact: "100+ women",
    category: "Gender Equality",
    location: "South Africa",
    status: "New",
  },
  {
    id: 4,
    name: "Women Empowerment Workshops",
    description:
      "Conducting workshops on entrepreneurship, financial literacy, and personal development for women.",
    image: WomenPower,
    goal: 18000,
    raised: 4000,
    donors: 15,
    impact: "50+ women",
    category: "Gender Equality",
    location: "Uganda",
    status: "New",
  },
  {
    id: 5,
    name: "Health & Hygiene Awareness",
    description:
      "Educating women on health, hygiene, and reproductive rights to improve overall well-being and community health.",
    image: Hygiene,
    goal: 12000,
    raised: 5000,
    donors: 21,
    impact: "150+ women reached",
    category: "Gender Equality",
    location: "Ghana",
    status: "New",
  },
  {
    id: 6,
    name: "Entrepreneurship Support Program",
    description:
      "Providing training, mentorship, and micro-grants to women entrepreneurs to start or grow their businesses.",
    image: Entrepreneur,
    goal: 22000,
    raised: 7000,
    donors: 100,
    impact: "75+ women empowered",
    category: "Gender Equality",
    location: "Nigeria",
    status: "New",
  },
];

export default function NewestProjects() {
  return (
    <div className="py-12 bg-gray-200">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
        Newest Gender Equality Projects 
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const progress = Math.min(
              Math.round((project.raised / project.goal) * 100),
              100
            );

            return (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image Holder */}
                <div className="lg:w-full h-85 relative bg-gray-100 rounded-t-lg flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  ) : (
                    <span className="text-gray-400 font-semibold">
                      Image Placeholder
                    </span>
                  )}

                  {/* Status Badge */}
                  {project.status && (
                    <span className="absolute top-3 right-3 bg-green-600 text-white font-semibold px-3 py-1 rounded-full text-sm">
                      {project.status}
                    </span>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Category & Location */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span>{project.location}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 h-3 rounded-full">
                      <div
                        className={`h-3 rounded-full ${
                          progress === 100 ? "bg-green-600" : "bg-green-400"
                        }`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Raised ${project.raised.toLocaleString()} of $
                      {project.goal.toLocaleString()} ({progress}%)
                    </p>
                  </div>

                  {/* Impact Stats */}
                  <div className="flex justify-between text-gray-700 text-sm mb-4">
                    <span>{project.donors} Donors</span>
                    <span>Impact: {project.impact}</span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <Link to="/donate">
                    <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                      Donate Now
                    </button>
                    </Link>
                   
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
