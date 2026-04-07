import React from "react";

const ImpactMeasurementVideo = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
        Impact Measurement
      </h2>

      {/* Description */}
      <p className="text-center text-gray-700 mb-6 max-w-2xl">
        Learn how to track and measure nonprofit outcomes effectively. This
        video will guide you through the key metrics, tools, and methods for
        evaluating your organization’s impact.
      </p>

      {/* Responsive Video */}
      <div
        className="w-full max-w-3xl mb-6 relative"
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/PgR5361I8HQ"
          title="Impact Measurement Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Key Takeaways */}
      <div className="bg-white p-4 rounded-lg shadow w-full max-w-3xl mb-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">
          Key Takeaways:
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Understand essential metrics to track nonprofit impact.</li>
          <li>Learn how to set measurable objectives and outcomes.</li>
          <li>Explore practical tools for monitoring and reporting.</li>
          <li>Improve decision-making based on data-driven insights.</li>
        </ul>
      </div>
    </div>
  );
};

export default ImpactMeasurementVideo;
