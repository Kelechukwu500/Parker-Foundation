import React from "react";
import StudentChamp from "../assets/studentchamp.jpg";
import { Link } from "react-router-dom";



const StudentChampion = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side Image */}
        <div className="w-full flex justify-center">
          <img
            src={StudentChamp}
            alt="Zambian Student Champion"
            className="rounded-lg shadow-md w-[350px] h-[350px] object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600">
            Become a Nigerian Student Champion
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Charlie Parker C. Global Foundation</strong> is committed to
            empowering students for a life of independence, purpose, and
            service. In partnership with generous donors like you, we help
            students flourish academically, socially, spiritually, and
            physically. Through access to quality education, essential tools,
            and vital resources, we equip them to excel both inside and outside
            the classroom. Would you like to join us in making a lasting impact?
            <br />
            <br />
            <strong>Charlie Parker C. Global Foundation</strong> prioritizes the
            privacy of our students. Therefore, we do not provide a photo
            gallery for selecting a child. This approach aligns with our strict
            safeguarding policies and ensures we act in the best interest of
            each child. Your gift will be matched to a student who is most in
            need of a champion in the country of your choice.
          </p>

          {/* YES Section */}
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Yes! I want to become a Student Champion for Nigeria{" "}
            <span className="text-[#002C5F] font-semibold">
              #EducationThatHeals
            </span>
          </h3>

          {/* Donation Options */}
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center space-y-6">
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#002C5F] text-white font-semibold py-4 px-10 rounded-md text-lg">
                <input
                  type="radio"
                  name="donation"
                  className="mr-2 accent-white"
                  defaultChecked
                />
                $50.00 - Monthly
              </button>
              <button className="bg-[#002C5F] text-white font-semibold py-4 px-10 rounded-md text-lg">
                <input
                  type="radio"
                  name="donation"
                  className="mr-2 accent-white"
                />
                $600.00 - Annual
              </button>
            </div>

            {/* Sponsor Button */}
            <div className="text-center mt-6">
              <Link to="/donate">
              <button className="bg-[#002C5F] hover:bg-[#00418a] transition duration-300 text-white font-bold py-3 px-12 rounded-md text-lg shadow-md">
                Sponsor
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentChampion;
