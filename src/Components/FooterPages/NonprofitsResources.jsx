// NonprofitResources.jsx
import React from "react";
import { motion } from "framer-motion";

// Example resources data
const resources = [
  {
    title: "Volunteer Toolkit",
    description: "Step-by-step guide to support student mentorship programs.",
    type: "PDF",
    link: "/volunteer-toolkitpdf",
    actionText: "Download",
  },
  {
    title: "Fundraising Best Practices",
    description: "Tips for raising funds efficiently and ethically.",
    type: "Guide",
    link: "/fundraising-guidepdf",
    actionText: "Download",
  },
  {
    title: "Impact Measurement",
    description: "Learn how to track and measure nonprofit outcomes.",
    type: "Video",
    link: "/impact-measurement-vd",
    actionText: "Watch",
  },
  {
    title: "Community Engagement Guide",
    description: "Strategies for effective local community involvement.",
    type: "PDF",
    link: "/community-engagementpdf",
    actionText: "Download",
  },
  {
    title: "Nonprofit Legal Basics",
    description: "Essential legal considerations for nonprofits.",
    type: "Guide",
    link: "/nonprofitslegal-guidepdf",
    actionText: "Download",
  },
  {
    title: "Grant Writing Essentials",
    description:
      "A comprehensive manual on crafting compelling and successful grant proposals.",
    type: "Workbook",
    link: "/grant-writing-essentialspdf",
    actionText: "Download",
  },
];

const NonprofitResources = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-600">
            Nonprofit Resources
          </h2>
          <p className="mt-4 text-gray-700 italic text-lg">
            Explore tools, guides, and insights to amplify social impact.
          </p>
        </motion.div>

        {/* Resource Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-6"
        >
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-gray-700">{resource.description}</p>
                <span className="mt-2 inline-block text-sm text-gray-500">
                  {resource.type}
                </span>
              </div>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition text-center"
              >
                {resource.actionText}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NonprofitResources;
