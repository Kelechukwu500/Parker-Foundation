// ProjectsClosestGoal.jsx
import React from "react";
import HealthClinic from "../assets/healthclinic.jpg";
import MedicalSup from "../assets/medicalsup.jpg";
import Maternal from "../assets/maternal.jpg";
import HealthTrain from "../assets/healthtrain.jpg";
import Emergency from "../assets/emergency.jpg";
import Vaccination from "../assets/vaccination.jpg";

// Sample data for Health Care projects in Kenya
const projects = [
  {
    id: 1,
    name: "Rural Health Clinic Renovation",
    description:
      "Renovating rural health clinics to improve patient care, provide essential medical equipment, and expand services to underserved communities.",
    image: HealthClinic,
    goal: 30000,
    raised: 25000,
    donors: 80,
    impact: "2,000+ patients",
    category: "Health Care",
    location: "Kenya",
    status: "Near Goal",
  },
  {
    id: 2,
    name: "Medical Supplies for Children",
    description:
      "Providing life-saving medicines, vaccines, and nutritional supplements to children in hospitals and rural communities.",
    image: MedicalSup,
    goal: 20000,
    raised: 18000,
    donors: 65,
    impact: "500+ children",
    category: "Health Care",
    location: "Kenya",
    status: "Near Goal",
  },
  {
    id: 3,
    name: "Maternal Health Support Program",
    description:
      "Supporting expecting mothers with prenatal care, educational programs, and access to healthcare services in rural areas.",
    image: Maternal,
    goal: 25000,
    raised: 22000,
    donors: 70,
    impact: "300+ mothers",
    category: "Health Care",
    location: "Kenya",
    status: "Near Goal",
  },
  {
    id: 4,
    name: "Community Health Worker Training",
    description:
      "Training local health workers on basic medical care, disease prevention, and emergency response to improve community health.",
    image: HealthTrain,
    goal: 15000,
    raised: 14000,
    donors: 50,
    impact: "40+ workers",
    category: "Health Care",
    location: "Kenya",
    status: "Near Goal",
  },
  {
    id: 5,
    name: "Emergency Medical Response Kits",
    description:
      "Providing rural clinics with emergency medical kits and first-aid supplies to respond quickly to health crises.",
    image: Emergency,
    goal: 18000,
    raised: 16000,
    donors: 55,
    impact: "10+ clinics equipped",
    category: "Health Care",
    location: "Kenya",
    status: "Near Goal",
  },
  {
    id: 6,
    name: "Vaccination Outreach Program",
    description:
      "Organizing vaccination drives in remote communities to protect children and adults from preventable diseases.",
    image: Vaccination,
    goal: 22000,
    raised: 20000,
    donors: 75,
    impact: "1,500+ individuals vaccinated",
    category: "Health Care",
    location: "Kenya",
    status: "Near Goal",
  },
];

export default function ProjectsClosestGoal() {
  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
        Health Care Projects Closest to Goal
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

                  {/* Impact Stats */}
                  <div className="flex justify-between text-gray-700 text-sm mb-4">
                    <span>{project.donors} Donors</span>
                    <span>Impact: {project.impact}</span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
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
}
