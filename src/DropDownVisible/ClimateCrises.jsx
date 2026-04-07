// ClimateCrises.jsx
import React from "react";
import climateFarm from "../assets/climatefarm.jpg";
import Irrigation from "../assets/irrigation.jpg";
import Agroforestory from "../assets/agroforestory.jpg";
import FarmerTraining from "../assets/farmertraining.jpg";
import SeedDistribution from "../assets/seeddistribution.jpg";
import PoweredIrri from "../assets/poweredirri.jpg";

// Sample data for Climate Action projects
const projects = [
  {
    id: 1,
    name: "Climate-Resilient Farming",
    description:
      "Supporting farmers in Nigeria to adopt climate-resilient farming techniques, improve crop yields, and reduce losses due to unpredictable weather.",
    image: climateFarm,
    impact:
      "300+ farmers trained in drought-resistant crops and sustainable practices.",
    category: "Climate Action",
    location: "Nigeria",
    goal: 20000,
    raised: 10000,
    donors: 85,
    status: "Ongoing",
  },
  {
    id: 2,
    name: "Community Irrigation Projects",
    description:
      "Building small-scale irrigation systems in rural communities to mitigate the impact of irregular rainfall and ensure stable crop production.",
    image: Irrigation,
    impact:
      "100+ hectares of farmland now irrigated, reducing crop failure risk.",
    category: "Climate Action",
    location: "Zambia",
    goal: 30000,
    raised: 13000,
    donors: 90,
    status: "Ongoing",
  },
  {
    id: 3,
    name: "Agroforestry and Soil Restoration",
    description:
      "Planting trees and implementing soil restoration techniques to enhance soil fertility and prevent land degradation in farming communities.",
    image: Agroforestory,
    impact:
      "Over 200 hectares of degraded land restored and 10,000 trees planted.",
    category: "Climate Action",
    location: "Uganda",
    goal: 30000,
    raised: 15000,
    donors: 100,
    status: "Ongoing",
  },
  {
    id: 4,
    name: "Farmer Education & Workshops",
    description:
      "Educating local farmers on climate-smart agriculture, sustainable practices, and disaster preparedness to strengthen food security.",
    image: FarmerTraining,
    impact:
      "400+ farmers attended workshops and adopted climate-smart strategies.",
    category: "Climate Action",
    location: "Nigeria",
    goal: 20000,
    raised: 10000,
    donors: 80,
    status: "Ongoing",
  },
  {
    id: 5,
    name: "Seed Distribution Program",
    description:
      "Providing drought-resistant and high-yield seeds to farmers to improve crop resilience and reduce losses during extreme weather.",
    image: SeedDistribution,
    impact:
      "Over 1,000 farmers received seeds and guidance on climate-resilient crops.",
    category: "Climate Action",
    location: "Kenya",
    goal: 10000,
    raised: 7000,
    donors: 60,
    status: "Ongoing",
  },
  {
    id: 6,
    name: "Solar-Powered Irrigation",
    description:
      "Installing solar-powered pumps to help communities maintain irrigation systems sustainably and reduce dependency on erratic rainfall.",
    image: PoweredIrri,
    impact: "50+ communities now have access to reliable irrigation systems.",
    category: "Climate Action",
    location: "Zambia",
    goal: 40000,
    raised: 18000,
    donors: 102,
    status: "Ongoing",
  },
];

const ClimateCrises = () => {
  return (
    <div className="py-12 bg-gray-200">
      <h2 className="text-3xl font-bold text-purple-600 text-center mb-8">
        Climate Action Projects
      </h2>
      <p className="max-w-4xl mx-auto text-center text-gray-700 mb-10">
        Climate change has severely impacted agricultural production in Nigeria.
        Unpredictable rainfall, prolonged droughts, and extreme weather events
        have affected the livelihoods of countless farmers. The{" "}
        <strong>Charlie Parker C. Global Foundation</strong> has stepped in to
        support these communities by providing resources, training, and
        sustainable solutions to ensure resilience against climate crises.
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
                <div className="lg:w-full h-65 relative bg-gray-100 rounded-t-lg flex items-center justify-center">
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

                  {/* Impact & Donors */}
                  <div className="flex justify-between text-gray-700 text-sm mb-4">
                    <span>{project.donors} Donors</span>
                    <span>Impact: {project.impact}</span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      Donate Now
                    </button>
                    
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

export default ClimateCrises;
