import React, { useState } from "react";
import { db } from "../Firebase"; // ✅ Import Firestore
import { collection, addDoc, Timestamp } from "firebase/firestore";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    availability: "",
    skills: "",
    notes: "",
  });
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "volunteerApplications"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      setSuccess("Your volunteer application has been submitted successfully!");
      alert("Volunteer application submitted successfully!");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        state: "",
        availability: "",
        skills: "",
        notes: "",
      });
    } catch (err) {
      console.error("Error submitting volunteer application:", err);
      alert(
        "There was an error submitting your application. Please try again."
      );
    }
  };

  return (
    <section className="flex flex-col items-center px-6 py-12 bg-white">
      <div className="max-w-4xl w-full">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-center text-pink-600">
          Volunteer Form
        </h2>

        {/* Write-up */}
        <p className="mb-10 text-lg text-gray-700 leading-relaxed text-center">
          Thank you for your interest in joining our mission! Volunteering with
          us is an opportunity to make a lasting impact. Please fill out the
          form below so we can understand your skills, availability, and
          preferences. This will help us match you with projects that suit your
          passion and expertise. Together, we can create change, empower
          communities, and build a brighter future.
        </p>

        {/* Form */}
        <form
          className="bg-gray-100 p-8 rounded-lg shadow-lg space-y-6"
          onSubmit={handleSubmit} // ✅ Connect form submission
        >
          {/* Full Name */}
          <div>
            <label
              className="block text-gray-800 font-medium mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange} // ✅ handle input
              className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Country */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="country"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              required
              placeholder="Enter your country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* State */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="state"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              required
              placeholder="Enter your state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Availability */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="availability"
            >
              Availability
            </label>
            <select
              id="availability"
              name="availability"
              required
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Select your availability</option>
              <option value="weekdays">Weekdays</option>
              <option value="weekends">Weekends</option>
              <option value="evenings">Evenings</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          {/* Skills */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="skills"
            >
              Skills & Interests
            </label>
            <textarea
              id="skills"
              name="skills"
              rows="4"
              placeholder="Describe your skills, interests, or areas you’d like to contribute"
              value={formData.skills}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          {/* Additional Notes */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="notes"
            >
              Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows="3"
              placeholder="Any extra information you'd like to share"
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300"
            >
              Submit Application
            </button>
            {success && <p className="text-green-600 mt-2">{success}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default VolunteerForm;
