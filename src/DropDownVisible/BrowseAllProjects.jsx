// BrowseAllProjects.jsx
import React from "react";

// Carousel Auto-Scrolling
import Share from "../assets/share.jpg";
import Photo24 from "../assets/photo24.jpg";
import Justice1 from "../assets/justice1.jpg";
import StudentChamp from "../assets/studentchamp.jpg";
import Photo27 from "../assets/photo27.jpg";
import Photo28 from "../assets/photo28.jpg";
import Photo29 from "../assets/photo29.jpg";
import Photo30 from "../assets/photo30.jpg";
import Photo31 from "../assets/photo31.jpg";


// Top Funded Projects Images//
import Photo10 from "../assets/photo10.jpg";
import Photo5 from "../assets/photo5.jpg";
import Care from "../assets/care.jpg";
import Renovation from "../assets/renovation.jpg";
import Lab from "../assets/lab.jpg";
import Teachers from "../assets/teachers.jpg";


// Climate Action Projects Images//
import climateFarm from "../assets/climatefarm.jpg";
import Irrigation from "../assets/irrigation.jpg";
import Agroforestory from "../assets/agroforestory.jpg";
import FarmerTraining from "../assets/farmertraining.jpg";
import SeedDistribution from "../assets/seeddistribution.jpg";
import PoweredIrri from "../assets/poweredirri.jpg";


// Most Effective Projects Images//
import Gardens from "../assets/gardens.jpg";
import SchoolFeeding from "../assets/schoolfeeding.jpg";
import FarmingSupport from "../assets/farmingsupport.jpg";
import WaterConservation from "../assets/waterconservation.jpg";
import Workshop from "../assets/workshop.jpg";
import FoodStorage from "../assets/foodstorage.jpg";


// Newest Projects Images//
import Aisha from "../assets/aisha.jpg";
import Women from "../assets/women.jpg";
import SafeSpace from "../assets/safespace.jpg";
import WomenPower from "../assets/womenpower.jpg";
import Hygiene from "../assets/hygiene.jpg";
import Entrepreneur from "../assets/entrepreneur.jpg";


// Projects Closest to Goal Images//
import HealthClinic from "../assets/healthclinic.jpg";
import MedicalSup from "../assets/medicalsup.jpg";
import Maternal from "../assets/maternal.jpg";
import HealthTrain from "../assets/healthtrain.jpg";
import Emergency from "../assets/emergency.jpg";
import Vaccination2 from "../assets/vaccination2.jpg";


// Wellness Projects Images//
import Photo23 from "../assets/photo23.jpg";
import Photo26 from "../assets/photo26.jpg";
import Photo2 from "../assets/photo2.jpg";
import MobileCamp from "../assets/mobilecamp.jpg";
import Vaccination from "../assets/vaccination.jpg";
import Photo25 from "../assets/photo25.jpg";


// Crises Info Images//
import Crises8 from "../assets/crises8.jpg";
import Crises4 from "../assets/crises4.jpg";
import Crises3 from "../assets/crises3.jpg";
import Crises14 from "../assets/crises14.jpg";
import Crises15 from "../assets/crises15.jpg";
import Crises16 from "../assets/crises16.jpg";

const BrowseAllProjects = () => {


    const carouselPhotos = [
      Share,
      Photo24,
      Justice1,
      StudentChamp,
      Photo27,
      Photo28,
      Photo29,
      Photo30,
      Photo31,
    ];



    const projects = [
      {
        id: 1,
        name: "School Supplies for Children",
        description:
          "Providing essential school supplies to children in underserved communities to enhance learning opportunities.",
        image: Photo10,
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
        category: "Education",
        location: "Tanzania",
        status: "Trending",
      },

      {
        id: 1,
        name: "Climate-Resilient Farming",
        description:
          "Supporting farmers in Nigeria to adopt climate-resilient farming techniques, improve crop yields, and reduce losses due to unpredictable weather.",
        image: climateFarm,
        category: "Climate Action",
        location: "Nigeria",
        status: "Ongoing",
      },
      {
        id: 2,
        name: "Community Irrigation Projects",
        description:
          "Building small-scale irrigation systems in rural communities to mitigate the impact of irregular rainfall and ensure stable crop production.",
        image: Irrigation,
        category: "Climate Action",
        location: "Zambia",
        status: "Ongoing",
      },
      {
        id: 3,
        name: "Agroforestry and Soil Restoration",
        description:
          "Planting trees and implementing soil restoration techniques to enhance soil fertility and prevent land degradation in farming communities.",
        image: Agroforestory,
        category: "Climate Action",
        location: "Uganda",
        status: "Ongoing",
      },
      {
        id: 4,
        name: "Farmer Education & Workshops",
        description:
          "Educating local farmers on climate-smart agriculture, sustainable practices, and disaster preparedness to strengthen food security.",
        image: FarmerTraining,
        category: "Climate Action",
        location: "Nigeria",
        status: "Ongoing",
      },
      {
        id: 5,
        name: "Seed Distribution Program",
        description:
          "Providing drought-resistant and high-yield seeds to farmers to improve crop resilience and reduce losses during extreme weather.",
        image: SeedDistribution,
        category: "Climate Action",
        location: "Kenya",
        status: "Ongoing",
      },
      {
        id: 6,
        name: "Solar-Powered Irrigation",
        description:
          "Installing solar-powered pumps to help communities maintain irrigation systems sustainably and reduce dependency on erratic rainfall.",
        image: PoweredIrri,
        category: "Climate Action",
        location: "Zambia",
        status: "Ongoing",
      },

      {
        id: 1,
        name: "Community Gardens Initiative",
        description:
          "Supporting local communities to establish sustainable gardens, providing fresh produce and nutritional support for families in Cameroon.",
        image: Gardens,
        category: "Food Security",
        location: "Cameroon",
        status: "Ongoing",
      },
      {
        id: 2,
        name: "School Feeding Program",
        description:
          "Providing healthy meals to school children, reducing malnutrition, and supporting education through improved attendance and concentration.",
        image: SchoolFeeding,
        category: "Food Security",
        location: "Ghana",
        status: "Ongoing",
      },
      {
        id: 3,
        name: "Seed Distribution & Farming Support",
        description:
          "Providing farmers with high-quality seeds, training, and tools to improve crop yields and ensure food security for communities.",
        image: FarmingSupport,
        category: "Food Security",
        location: "Gambia",
        status: "Ongoing",
      },
      {
        id: 4,
        name: "Water Conservation & Irrigation",
        description:
          "Introducing small-scale irrigation and water conservation techniques to prevent crop failure and maintain steady food production.",
        image: WaterConservation,
        category: "Food Security",
        location: "Zambia",
        status: "Ongoing",
      },
      {
        id: 5,
        name: "Agricultural Training & Workshops",
        description:
          "Training local farmers on sustainable farming methods and post-harvest storage to reduce food loss and increase productivity.",
        image: Workshop,
        category: "Food Security",
        location: "Gambia",
        status: "Ongoing",
      },
      {
        id: 6,
        name: "Community Food Banks",
        description:
          "Setting up local food banks to store surplus produce and distribute to vulnerable families during food shortages.",
        image: FoodStorage,
        category: "Food Security",
        location: "Nigeria",
        status: "Ongoing",
      },

      {
        id: 1,
        name: "Girls Education Initiative",
        description:
          "Empowering girls in underserved communities by providing scholarships, mentorship, and access to quality education.",
        image: Aisha,
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
        category: "Gender Equality",
        location: "Nigeria",
        status: "New",
      },

      {
        id: 1,
        name: "Rural Health Clinic Renovation",
        description:
          "Renovating rural health clinics to improve patient care, provide essential medical equipment, and expand services to underserved communities.",
        image: HealthClinic,
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
        category: "Health Care",
        location: "Kenya",
        status: "Near Goal",
      },
      {
        id: 6,
        name: "Vaccination Outreach Program",
        description:
          "Organizing vaccination drives in remote communities to protect children and adults from preventable diseases.",
        image: Vaccination2,
        category: "Health Care",
        location: "Kenya",
        status: "Near Goal",
      },

      {
        id: 1,
        name: "Community Health Clinics",
        description:
          "Setting up accessible community health clinics to provide preventive care, vaccinations, and essential medical services to underserved populations in Uganda.",
        image: Photo23,
        category: "Physical Health",
        location: "Uganda",
        status: "Ongoing",
      },
      {
        id: 2,
        name: "Nutrition & Wellness Programs",
        description:
          "Educating communities on nutrition, healthy lifestyles, and disease prevention, helping families adopt better health practices and improve overall well-being.",
        image: Photo26,
        category: "Physical Health",
        location: "Kenya",
        status: "Ongoing",
      },
      {
        id: 3,
        name: "Clean Water and Sanitation",
        description:
          "Providing clean water access and promoting sanitation to reduce waterborne diseases and improve community health outcomes.",
        image: Photo2,
        category: "Physical Health",
        location: "Gambia",
        status: "Ongoing",
      },
      {
        id: 4,
        name: "Mobile Health Camps",
        description:
          "Organizing mobile health camps in remote areas to offer free medical checkups, health education, and early diagnosis of illnesses.",
        image: MobileCamp,
        category: "Physical Health",
        location: "Tanzania",
        status: "Ongoing",
      },
      {
        id: 5,
        name: "Vaccination Outreach Program",
        description:
          "Providing vaccinations to remote communities to prevent the spread of infectious diseases and protect children's health.",
        image: Vaccination,
        category: "Physical Health",
        location: "Nigeria",
        status: "Ongoing",
      },
      {
        id: 6,
        name: "Maternal & Child Health Workshops",
        description:
          "Conducting workshops for mothers on prenatal care, nutrition, and child health to improve overall maternal and infant well-being.",
        image: Photo25,
        category: "Physical Health",
        location: "Uganda",
        status: "Ongoing",
      },

      {
        id: 7,
        name: "Flood-Displaced Families Support",
        description:
          "Providing emergency shelter, food, and relief supplies to families displaced by severe flooding in vulnerable communities.",
        image: Crises8,
        category: "Emergency Response",
        location: "Nigeria",
        status: "Ongoing",
      },
      {
        id: 8,
        name: "Community Flood Relief",
        description:
          "Assisting communities affected by river overflow with temporary housing, clean water, and medical support for displaced residents.",
        image: Crises4,
        category: "Disaster Relief",
        location: "Kenya",
        status: "Ongoing",
      },
      {
        id: 9,
        name: "Flood-Affected Household Aid",
        description:
          "Supporting families whose homes were destroyed by heavy rains and floods with reconstruction materials and basic necessities.",
        image: Crises3,
        category: "Humanitarian Aid",
        location: "Ghana",
        status: "Ongoing",
      },
      {
        id: 10,
        name: "Windstorm Housing Recovery",
        description:
          "Helping communities rebuild homes that were destroyed by strong winds, providing materials, labor, and technical support.",
        image: Crises14,
        category: "Emergency Recovery",
        location: "Nigeria",
        status: "Ongoing",
      },

      {
        id: 11,
        name: "Wind-Pulled Down Houses Support",
        description:
          "Providing emergency relief and rebuilding assistance to families whose houses were pulled down by strong windstorms, ensuring safe shelter for affected households.",
        image: Crises15,
        category: "Disaster Recovery",
        location: "Nigeria",
        status: "Ongoing",
      },

      {
        id: 12,
        name: "Windstorm Affected Families Support",
        description:
          "Providing emergency relief and rebuilding support to households affected by windstorms, restoring safe living conditions.",
        image: Crises16,
        category: "Emergency Relief",
        location: "Nigeria",
        status: "Ongoing",
      },
    ];
    
    
    return (
      <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center text-center px-4 ">
        <h1 className="text-xl md:text-2xl font-extrabold text-blue-600 mb-4 mt-8">
          Browse All Projects
        </h1>
        <p className="text-lg md:text-xl text-gray-800 max-w-2xl leading-relaxed">
          At <strong>Charlie Parker C. Global Foundation</strong>, we are
          dedicated to creating lasting impact through community-driven projects
          that promote education, empowerment, agriculture and sustainable development. Our
          mission is to build a brighter future by transforming lives, fostering
          opportunities, and inspiring hope across communities worldwide.
        </p>

        <section className="py-16 bg-gray-50 rounded-lg mt-8">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-10">
            Projects
          </h2>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image Holder */}
                  <div className="relative w-full h-80">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    {project.status && (
                      <span className="absolute top-3 right-3 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {project.category}
                      </span>
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donate Now CTA Section */}
        <section className="py-16 bg-gray-200 flex items-center justify-center">
          <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition">
            Donate Now
          </button>
        </section>

        {/* Auto-scrolling Carousel */}
        <section className="overflow-hidden bg-gray-100 py-8">
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee">
              {carouselPhotos.map((photo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 mx-4"
                  style={{ minWidth: "20px" }} // ↓ reduced from 400px
                >
                  <img
                    src={photo}
                    alt={`Photo ${idx + 19}`}
                    className="h-48 w-full object-cover rounded-lg shadow-lg" // ↓ height reduced
                  />
                </div>
              ))}
              {carouselPhotos.map((photo, idx) => (
                <div
                  key={`dup-${idx}`}
                  className="flex-shrink-0 mx-4"
                  style={{ minWidth: "20px" }} // ↓ reduced from 400px
                >
                  <img
                    src={photo}
                    alt={`Photo ${idx + 19}`}
                    className="h-48 w-full object-cover rounded-lg shadow-lg" // ↓ height reduced
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tailwind CSS Animation */}
          <style>
            {`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        display: flex;
        animation: marquee 10s linear infinite;
      }
    `}
          </style>
        </section>
      </div>
    );
};

export default BrowseAllProjects;
