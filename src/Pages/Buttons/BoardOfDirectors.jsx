import React from "react";

const BoardOfDirectors = () => {
  return (
    <>
      <section className="px-8 py-12 bg-white">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold italic text-gray-800">
            Board Of Directors
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            Our Board of Directors provides strategic guidance and oversight to
            ensure the foundation remains true to its mission. Comprised of
            experienced leaders from diverse sectors, they bring invaluable
            expertise and insights that guide our decisions and shape our
            impact. Together, they uphold our values of transparency,
            accountability, and excellence.
          </p>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Director 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center shadow-lg">
              Image 1
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Dr. Emmanuel Okafor
            </h3>
            <p className="text-gray-600">Chairman</p>
            <p className="text-gray-500 text-sm mt-2">
              With over 20 years of leadership in non-profit governance, Dr.
              Okafor brings unparalleled expertise in strategic planning and
              community development.
            </p>
          </div>

          {/* Director 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center shadow-lg">
              Image 2
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Mrs. Adaobi Nwosu
            </h3>
            <p className="text-gray-600">Vice-Chairperson</p>
            <p className="text-gray-500 text-sm mt-2">
              Adaobi is a social impact strategist with extensive experience in
              international philanthropy, driving impactful initiatives for
              vulnerable communities.
            </p>
          </div>

          {/* Director 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center shadow-lg">
              Image 3
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Mr. Chinedu Eze
            </h3>
            <p className="text-gray-600">Treasurer</p>
            <p className="text-gray-500 text-sm mt-2">
              Chinedu brings financial oversight and governance expertise,
              ensuring sustainability and transparency in all our operations and
              programs.
            </p>
          </div>

          {/* Director 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center shadow-lg">
              Image 4
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Dr. Ifeoma Okeke
            </h3>
            <p className="text-gray-600">Secretary</p>
            <p className="text-gray-500 text-sm mt-2">
              A respected leader in community engagement, Dr. Okeke champions
              collaborative approaches to sustainable development and
              innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Philanthropy Quotes Auto-Scroll Section */}
      <section className="overflow-hidden py-8 bg-gray-300">
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee space-x-12 px-8">
            {/* Quote 1 */}
            <div className="flex-shrink-0 text-xl font-semibold text-blue-800">
              Giving is not just about making a donation, it’s about making a
              difference.
              <span className="text-4xl font-bold mx-4">.</span>
            </div>

            {/* Quote 2 */}
            <div className="flex-shrink-0 text-xl font-semibold text-blue-800">
              Charity begins with compassion, and compassion transforms
              communities.
              <span className="text-4xl font-bold mx-4">.</span>
            </div>

            {/* Quote 3 */}
            <div className="flex-shrink-0 text-xl font-semibold text-blue-800">
              True philanthropy uplifts lives, restores hope, and inspires
              change.
              <span className="text-4xl font-bold mx-4">.</span>
            </div>

            {/* Repeat for smooth infinite scroll */}
            <div className="flex-shrink-0 text-xl font-semibold text-blue-800">
              Giving is not just about making a donation, it’s about making a
              difference.
              <span className="text-4xl font-bold mx-4">.</span>
            </div>
            <div className="flex-shrink-0 text-xl font-semibold text-blue-800">
              Charity begins with compassion, and compassion transforms
              communities.
              <span className="text-4xl font-bold mx-4">.</span>
            </div>
            <div className="flex-shrink-0 text-xl font-semibold text-blue-800">
              True philanthropy uplifts lives, restores hope, and inspires
              change.
              <span className="text-4xl font-bold mx-4">.</span>
            </div>
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
              animation: marquee 15s linear infinite;
            }
          `}
        </style>
      </section>
    </>
  );
};

export default BoardOfDirectors;
