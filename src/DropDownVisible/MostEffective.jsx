// MostEffective.jsx
import React from "react";
import Gardens from "../assets/Gardens.jpg";
import SchoolFeeding from "../assets/SchoolFeeding.jpg";
import FarmingSupport from "../assets/FarmingSupport.jpg";
import WaterConservation from "../assets/WaterConservation.jpg";
import Workshop from "../assets/Workshop.jpg";
import FoodStorage from "../assets/FoodStorage.jpg";
import { Link } from "react-router-dom";

// Sample data for Food Security projects in Gambia
const projects = [
  {
    id: 1,
    name: "Community Gardens Initiative",
    description:
      "Supporting local communities to establish sustainable gardens, providing fresh produce and nutritional support for families in Cameroon.",
    image: Gardens,
    impact: "Over 500 households now have access to fresh produce.",
    category: "Food Security",
    location: "Cameroon",
    goal: 20000,
    raised: 15000,
    donors: 100,
    status: "Ongoing",
  },
  {
    id: 2,
    name: "School Feeding Program",
    description:
      "Providing healthy meals to school children, reducing malnutrition, and supporting education through improved attendance and concentration.",
    image: SchoolFeeding,
    impact: "500+ children served daily with nutritious meals.",
    category: "Food Security",
    location: "Ghana",
    goal: 30000,
    raised: 10000,
    donors: 80,
    status: "Ongoing",
  },
  {
    id: 3,
    name: "Seed Distribution & Farming Support",
    description:
      "Providing farmers with high-quality seeds, training, and tools to improve crop yields and ensure food security for communities.",
    image: FarmingSupport,
    impact: "300+ farmers empowered to grow resilient crops.",
    category: "Food Security",
    location: "Gambia",
    goal: 18000,
    raised: 6000,
    donors: 30,
    status: "Ongoing",
  },
  {
    id: 4,
    name: "Water Conservation & Irrigation",
    description:
      "Introducing small-scale irrigation and water conservation techniques to prevent crop failure and maintain steady food production.",
    image: WaterConservation,
    impact: "150+ hectares of farmland benefiting from improved irrigation.",
    category: "Food Security",
    location: "Zambia",
    goal: 15000,
    raised: 8000,
    donors: 80,
    status: "Ongoing",
  },
  {
    id: 5,
    name: "Agricultural Training & Workshops",
    description:
      "Training local farmers on sustainable farming methods and post-harvest storage to reduce food loss and increase productivity.",
    image: Workshop,
    impact: "300+ farmers trained in modern, sustainable farming techniques.",
    category: "Food Security",
    location: "Gambia",
    goal: 20000,
    raised: 10000,
    donors: 60,
    status: "Ongoing",
  },
  {
    id: 6,
    name: "Community Food Banks",
    description:
      "Setting up local food banks to store surplus produce and distribute to vulnerable families during food shortages.",
    image: FoodStorage,
    impact: "Over 300 families now have access to consistent food supply.",
    category: "Food Security",
    location: "Nigeria",
    goal: 20000,
    raised: 9000,
    donors: 50,
    status: "Ongoing",
  },
];

const MostEffective = () => {
  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Most Effective Food Security Projects 
      </h2>
      <p className="max-w-4xl mx-auto text-center text-gray-700 mb-10">
        Food security remains a critical issue in Gambia, with many communities
        struggling to access nutritious food consistently. The{" "}
        <strong>Charlie Parker C. Global Foundation</strong> has been actively
        supporting these communities through sustainable agricultural programs,
        nutrition initiatives, and capacity-building workshops to improve food
        availability and resilience.
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

                  {/* Impact & Donors */}
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
};

export default MostEffective;
