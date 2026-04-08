import React from "react";
import SafeHavenimg from "../assets/SafeHaven.jpg"; 
import { Link } from "react-router-dom";



const SafeHaven = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side Image */}
        <div className="w-full flex justify-center">
          <img
            src={SafeHavenimg}
            alt="Safe Haven Zambia"
            className="rounded-lg shadow-md w-[350px] h-[350px] object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-500">
            Safe Haven Nigeria Champions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Charlie Parker C. Global Foundation Nigeria, we support at-risk
            children who face trauma such as abuse, sexual violence, and
            neglect. Our interdisciplinary team of psychologists, social
            workers, lawyers, and trauma-informed staff is dedicated to
            providing safety and protection—a true safe haven—to address the
            root of the issue and help heal traumatic wounds. Become a Safe
            Haven Champion today and support our mission to walk alongside
            vulnerable children, families, and communities.
          </p>

          {/* YES! Section */}
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            YES! I want to be a Safe Haven Champion for Nigeria.
          </h3>

          {/* Donation Options */}
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center space-y-6">
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#002C5F] text-white font-semibold py-4 px-10 rounded-md text-lg">
                <input
                  type="radio"
                  name="donation"
                  className="mr-2 accent-white"
                />
                $50.00
              </button>
              <button className="bg-[#002C5F] text-white font-semibold py-4 px-10 rounded-md text-lg">
                <input
                  type="radio"
                  name="donation"
                  className="mr-2 accent-white"
                />
                $100.00
              </button>
              <div className="bg-[#002C5F] text-white font-semibold py-4 px-6 rounded-md flex items-center text-lg">
                <input
                  type="radio"
                  name="donation"
                  className="mr-2 accent-white"
                />
                Other $
                <input
                  type="text"
                  placeholder="0.00"
                  className="ml-2 w-20 text-center rounded-md text-gray-900 py-1"
                />
              </div>
            </div>

            {/* Giving Frequency */}
            <div className="text-center mt-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                How often would you like to give?
              </h4>
              <label className="text-lg text-gray-800">
                <input
                  type="radio"
                  name="frequency"
                  className="mr-2 accent-[#002C5F]"
                  defaultChecked
                />
                Monthly
              </label>
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

export default SafeHaven;
