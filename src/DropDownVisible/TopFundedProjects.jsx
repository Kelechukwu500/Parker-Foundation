// TopFundedProjects.jsx
import React from "react";
import Photo10 from "../assets/Photo10.jpg";
import Photo5 from "../assets/Photo5.jpg";
import Care from "../assets/Care.jpg";
import Renovation from "../assets/Renovation.jpg";
import Lab from "../assets/Lab.jpg"; 
import Teachers from "../assets/Teachers.jpg"; 
import { Link } from "react-router-dom";

// Sample data for education projects with image URLs
const projects = [
  {
    id: 1,
    name: "School Supplies for Children",
    description:
      "Providing essential school supplies to children in underserved communities to enhance learning opportunities.",
    image: Photo10,
    goal: 15000,
    raised: 4000,
    donors: 30,
    impact: "500+ children",
    category: "Education",
    location: "Nigeria",
    status: "Trending",
  },
  {
    id: 2,
    name: "Digital Classrooms",
    description:
      "Equipping schools with computers and internet access to create modern digital learning environments.",
    image: Photo5,
    goal: 20000,
    raised: 2000,
    donors: 18,
    impact: "1000+ students",
    category: "Education",
    location: "Kenya",
    status: "Trending",
  },
  {
    id: 3,
    name: "Scholarship Program",
    description:
      "Supporting brilliant but underprivileged students with scholarships to pursue higher education.",
    image: Care,
    goal: 25000,
    raised: 4000,
    donors: 8,
    impact: "50+ students",
    category: "Education",
    location: "Nigeria",
    status: "Trending",
  },
  {
    id: 4,
    name: "Library Renovation",
    description:
      "Renovating school libraries to provide a better learning environment and access to books for all students.",
    image: Renovation,
    goal: 12000,
    raised: 2700,
    donors: 21,
    impact: "300+ students",
    category: "Education",
    location: "Uganda",
    status: "Trending",
  },
  {
    id: 5,
    name: "Teacher Training Program",
    description:
      "Training teachers in modern educational techniques to improve classroom learning outcomes.",
    image: Lab,
    goal: 18000,
    raised: 6000,
    donors: 25,
    impact: "50+ teachers",
    category: "Education",
    location: "Ghana",
    status: "Trending",
  },
  {
    id: 6,
    name: "STEM Lab Setup",
    description:
      "Creating STEM labs in schools to encourage hands-on learning in science, technology, engineering, and mathematics.",
    image: Teachers,
    goal: 22000,
    raised: 8000,
    donors: 40,
    impact: "400+ students",
    category: "Education",
    location: "Tanzania",
    status: "Trending",
  },
];

const TopFundedProjects = () => {
  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
        Top Funded Education Projects
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
                <div className="lg:w-full h-70 relative bg-gray-100 rounded-t-lg flex items-center justify-center">
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
                    <span className="absolute top-3 right-3 bg-blue-600 text-white font-semibold px-3 py-1 rounded-full text-sm">
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
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span>{project.location}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 h-3 rounded-full">
                      <div
                        className={`h-3 rounded-full ${
                          progress === 100 ? "bg-blue-600" : "bg-blue-400"
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
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
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
};

export default TopFundedProjects;
