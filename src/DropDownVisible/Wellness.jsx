// Wellness.jsx
import React from "react";
import Photo23 from "../assets/photo23.jpg";
import Photo26 from "../assets/photo26.jpg";
import Photo2 from "../assets/photo2.jpg";
import MobileCamp from "../assets/mobilecamp.jpg";
import Vaccination from "../assets/vaccination.jpg";
import Photo25 from "../assets/photo25.jpg";
import { Link } from "react-router-dom";

// Sample data for Physical Health projects in Uganda
const projects = [
  {
    id: 1,
    name: "Community Health Clinics",
    description:
      "Setting up accessible community health clinics to provide preventive care, vaccinations, and essential medical services to underserved populations in Uganda.",
    image: Photo23,
    impact:
      "Over 5,000 residents received medical consultations and vaccinations.",
    category: "Physical Health",
    location: "Uganda",
    goal: 20000,
    raised: 10000,
    donors: 75,
    status: "Ongoing",
  },
  {
    id: 2,
    name: "Nutrition & Wellness Programs",
    description:
      "Educating communities on nutrition, healthy lifestyles, and disease prevention, helping families adopt better health practices and improve overall well-being.",
    image: Photo26,
    goal: 15000,
    raised: 8000,
    impact: "3,000+ individuals trained in nutrition and wellness practices.",
    category: "Physical Health",
    location: "Kenya",
    donors: 50,
    status: "Ongoing",
  },
  {
    id: 3,
    name: "Clean Water and Sanitation",
    description:
      "Providing clean water access and promoting sanitation to reduce waterborne diseases and improve community health outcomes.",
    image: Photo2,
    impact:
      "2,500+ households now have access to clean water and proper sanitation facilities.",
    category: "Physical Health",
    location: "Gambia",
    goal: 20000,
    raised: 10000,
    donors: 90,
    status: "Ongoing",
  },
  {
    id: 4,
    name: "Mobile Health Camps",
    description:
      "Organizing mobile health camps in remote areas to offer free medical checkups, health education, and early diagnosis of illnesses.",
    image: MobileCamp,
    impact:
      "Over 1,800 individuals reached through mobile health interventions.",
    category: "Physical Health",
    location: "Tanzania",
    goal: 20000,
    raised: 9500,
    donors: 70,
    status: "Ongoing",
  },
  {
    id: 5,
    name: "Vaccination Outreach Program",
    description:
      "Providing vaccinations to remote communities to prevent the spread of infectious diseases and protect children's health.",
    image: Vaccination,
    impact: "Over 2,000 children vaccinated across rural districts.",
    category: "Physical Health",
    location: "Nigeria",
    goal: 20000,
    raised: 8000,
    donors: 60,
    status: "Ongoing",
  },
  {
    id: 6,
    name: "Maternal & Child Health Workshops",
    description:
      "Conducting workshops for mothers on prenatal care, nutrition, and child health to improve overall maternal and infant well-being.",
    image: Photo25,
    impact: "500+ mothers and children benefited from training and resources.",
    category: "Physical Health",
    location: "Uganda",
    goal: 15000,
    raised: 7000,
    donors: 55,
    status: "Ongoing",
  },
];

const Wellness = () => {
  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
        Physical Health Projects 
      </h2>
      <p className="max-w-4xl mx-auto text-center text-gray-700 mb-10">
        Access to healthcare and wellness resources is critical for building
        healthy communities. The{" "}
        <strong>Charlie Parker C. Global Foundation</strong> is dedicated to
        improving physical health in Uganda by establishing clinics, promoting
        nutrition, providing clean water, and organizing mobile health camps to
        reach underserved populations.
      </p>

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
                <div className="lg:w-full h-80 relative bg-gray-100 rounded-t-lg flex items-center justify-center">
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
                    <span className="absolute top-3 right-3 bg-red-600 text-white font-semibold px-3 py-1 rounded-full text-sm">
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
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span>{project.location}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 h-3 rounded-full">
                      <div
                        className={`h-3 rounded-full ${
                          progress === 100 ? "bg-red-600" : "bg-blue-400"
                        }`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Raised ${project.raised.toLocaleString()} of $
                      {project.goal.toLocaleString()} ({progress}%)
                    </p>
                  </div>

                  {/* Impact & Donors */}
                  <div className="flex justify-between text-gray-700 text-sm mb-4">
                    <span>{project.donors} Donors</span>
                    <span>Impact: {project.impact}</span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <Link to="/donate">
                    <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
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

export default Wellness;
