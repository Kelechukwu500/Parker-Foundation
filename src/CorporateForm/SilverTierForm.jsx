import React, { useState } from "react";
import { db } from "../Firebase"; // Import your Firebase setup
import { collection, addDoc, Timestamp } from "firebase/firestore";

const SilverTierPartnerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    city: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save the form data to Firestore with timestamp
      await addDoc(collection(db, "silverTierPartners"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      setSubmitted(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        country: "",
        city: "",
      });

      // Hide success alert after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-8 w-full max-w-lg space-y-4 relative"
      >
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">
          Become a Silver Tier Partner
        </h2>

        {/* Success Alert */}
        {submitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg">
            Form Submitted Successfully
          </div>
        )}

        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full border border-gray-400 text-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full border border-gray-400 text-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder="Enter your company name"
            className="w-full border border-gray-400 text-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Country
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            placeholder="Enter your country"
            className="w-full border border-gray-400 text-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            placeholder="Enter your city"
            className="w-full border border-gray-400 text-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white font-semibold rounded-lg py-3 hover:bg-yellow-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SilverTierPartnerForm;
