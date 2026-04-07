import React from "react";
import { FiShield } from "react-icons/fi";
import { motion } from "framer-motion";
import Bill from "../assets/bill.jpg";
import { Link } from "react-router-dom";


// Carousel Auto-Scrolling
import Photo23 from "../assets/photo23.jpg";
import Photo24 from "../assets/photo24.jpg";
import Photo25 from "../assets/photo25.jpg";
import Photo26 from "../assets/photo26.jpg";
import Photo27 from "../assets/photo27.jpg";
import Photo28 from "../assets/photo28.jpg";
import Photo29 from "../assets/photo29.jpg";
import Photo30 from "../assets/photo30.jpg";
import Photo31 from "../assets/photo31.jpg";



const carouselPhotos = [Photo23, Photo24, Photo25, Photo26, Photo27, Photo28, Photo29, Photo30, Photo31];

const FinancialIntegrity = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="px-6 py-12 bg-gray-200 min-h-screen"
    >
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Financial Integrity
      </h1>

      {/* Write-up */}
      <p className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
        <strong>Charlie Parker C. Global Foundation</strong> is firmly committed to transparency,
        accountability, and responsible stewardship. As a purpose-driven
        nonprofit organization, we honor the trust placed in us to manage every
        donation with care, wisdom, and efficiency. Our unwavering integrity
        ensures that every resource is used where it creates the greatest impact
        — transforming the lives of children and communities in need. This
        dedication has earned us top recognitions in the nonprofit sector,
        including outstanding ratings from Charity Navigator and platinum status
        from GuideStar. Explore our financial reports to see how each
        contribution helps drive meaningful change across the globe.
      </p>

      {/* Placeholder for Financial Reports Section */}
      <div className="mt-8 max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Annual Report
          </h2>
          <p className="text-gray-600">
            View our latest annual report detailing financial summaries, program
            impact, and stewardship highlights.
          </p>
          <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
            View Report
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Financial Statements
          </h2>
          <p className="text-gray-600">
            Access our full financial statements, ensuring openness in all
            aspects of our operations.
          </p>
          <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
            View Statements
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Donor Impact
          </h2>
          <p className="text-gray-600">
            Learn how contributions are transforming lives and strengthening
            communities around the world.
          </p>
          <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
            Learn More
          </button>
        </div>
      </div>

      {/* Supporters' Bill of Rights Section */}
      <section className="flex flex-col md:flex-row items-center px-6 py-12 bg-gray-50 mt-8">
        {/* Image Holder */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            {/* Replace with actual image */}
            <img
              src={Bill}
              alt="Supporters Bill of Rights"
              className="object-cover w-full h-full rounded"
            />
          </div>
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block w-px bg-gray-500 h-170 mx-6"></div>

        {/* Write-up */}
        <div className="md:w-1/2 flex flex-col">
          <h2 className="text-3xl font-bold text-green-600 mb-6">
            Charter of Supporters' Rights
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>Faithful Stewardship.</strong> We recognize the generosity
              of our supporters as a sacred trust. Every gift entrusted to us is
              an opportunity and a responsibility to steward resources wisely
              and efficiently. We pledge to maintain low administrative costs so
              that the maximum portion of your contributions directly benefits
              the communities we serve.
            </p>
            <p>
              <strong>Honesty in Communication.</strong> We commit to raising
              funds in ways that honor God and respect our supporters. Our
              communications will always be truthful, accurate, and transparent,
              reflecting our unwavering dedication to integrity.
            </p>
            <p>
              <strong>Transparent Financial Practices.</strong> Charlie Parker
              C. Global Foundation upholds the highest standards in financial
              record-keeping and reporting. We adhere strictly to applicable
              accounting and fundraising guidelines and never engage in
              commission-based fundraising.
            </p>
            <p>
              <strong>Protecting Donor Privacy.</strong> We value and safeguard
              your trust. Donors’ names, personal information, and contributions
              will never be shared, rented, sold, published, or otherwise
              provided to any other entity. We also never send mailings on
              behalf of other organizations. Your privacy and security are
              paramount to us.
            </p>
            <p>
              <strong>Prayer for Our Supporters.</strong> We view our supporters
              as cherished partners and stand in solidarity with them in prayer.
              We welcome your prayer requests and commit to lifting them before
              God as part of our ongoing mission.
            </p>
            <p>
              <strong>Building Kingdom Partnerships.</strong> Guided by the call
              to make disciples of all nations, we strive to partner with you to
              fulfill the Great Commission and the Great Commandment — to love
              God and love your neighbor. Together, we seek to provide spiritual
              and physical care to communities around the world.
            </p>
          </div>
        </div>
      </section>

      {/* How Your Gifts Are Used Section */}
      <section className="bg-orange-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            HOW YOUR GIFTS ARE USED
          </h2>

          {/* Three Circles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Program Services */}
            <div className="flex flex-col items-center">
              <div className="relative w-full h-56 flex items-center justify-center rounded-full border-2 border-white">
                <span className="absolute text-[150px] font-extrabold text-orange-300 opacity-60">
                  %
                </span>
                <span className="text-6xl font-extrabold z-10">75.4</span>
              </div>
              <p className="mt-4 font-bold text-lg uppercase">
                Program Services <br /> For Children & Communities
              </p>
            </div>

            {/* Management and General */}
            <div className="flex flex-col items-center">
              <div className="relative w-56 h-56 flex items-center justify-center rounded-full border-2 border-white">
                <span className="absolute text-[150px] font-extrabold text-orange-300 opacity-60">
                  %
                </span>
                <span className="text-6xl font-extrabold z-10">14.0</span>
              </div>
              <p className="mt-4 font-bold text-lg uppercase">
                Management <br /> and General
              </p>
            </div>

            {/* Fundraising and Promotion */}
            <div className="flex flex-col items-center">
              <div className="relative w-56 h-56 flex items-center justify-center rounded-full border-2 border-white">
                <span className="absolute text-[150px] font-extrabold text-orange-300 opacity-60">
                  %
                </span>
                <span className="text-6xl font-extrabold z-10">10.6</span>
              </div>
              <p className="mt-4 font-bold text-lg uppercase">
                Fundraising <br /> and Promotion
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black px-6 lg:px-20 py-16">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
          <span className="relative inline-block">
            <span className="relative z-10">STEWARDSHIP AND</span>
            <span className="absolute left-0 bottom-1 w-full h-3 bg-yellow-400 -z-0"></span>
          </span>{" "}
          <span className="relative inline-block">
            <span className="relative z-10">ACCOUNTABILITY</span>
            <span className="absolute left-0 bottom-1 w-full h-3 bg-yellow-400 -z-0"></span>
          </span>
        </h2>

        {/* Paragraphs */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            At <strong>Charlie Parker C. Global Foundation</strong>, we are
            deeply committed to transparency, integrity, and the responsible
            management of all resources entrusted to us. Every donation and
            contribution is handled with the highest standard of accountability
            to ensure maximum impact in the lives of those we serve.
          </p>

          <p>
            Our organization consistently earns recognition from respected
            accountability and monitoring groups for maintaining exceptional
            levels of efficiency and transparency. This ensures that donors and
            partners can confidently participate in our mission to create
            sustainable global change.
          </p>

          <p>
            We are proud to maintain full compliance with internationally
            accepted nonprofit standards and evaluation guidelines. Our programs
            undergo regular reviews to guarantee that every project aligns with
            our values of service, compassion, and measurable community
            transformation.
          </p>

          <p>
            <strong>Charlie Parker C. Global Foundation</strong> is also a part
            of a growing network of humanitarian organizations dedicated to
            social development, education, health, and empowerment. Through the
            trust and support of our global partners, we continue to expand our
            reach and ensure that every action we take upholds the principles of{" "}
            <span className="text-orange-500 font-semibold">
              stewardship, fairness, and accountability
            </span>
            . Together, we are committed to building a world where compassion,
            integrity, and excellence guide every effort to uplift humanity.
          </p>
        </div>
      </section>

      {/* Our Online Policies Section */}
      <section className="px-6 py-10 bg-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-black font-extrabold italic mb-2 flex items-center gap-2">
              <FiShield className="text-yellow-500" />
              Our Online Policies
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mb-6 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-700 mb-8">
            <strong>Charlie Parker C. Global Foundation</strong> is dedicated to
            earning and maintaining your trust. Our online privacy policy is
            designed to safeguard the personally identifiable information you
            share with us, ensuring it remains secure and protected.
          </p>

          <Link to="/online-policies">
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition">
              Our Online Policy
            </button>
          </Link>
        </div>
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
    </motion.section>
  );
};

export default FinancialIntegrity;
