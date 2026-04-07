// CorporatePartnerForm.jsx
import React, { useState } from "react";
import { db } from "../Firebase"; // Make sure Firebase is properly set up
import { collection, addDoc, Timestamp } from "firebase/firestore";

const CorporatePartnerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    city: "",
    tier: "",
    message: "",
    isDropdownOpen: false,
  });

  const [submitted, setSubmitted] = useState(false); // ✅ Track submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save data to Firestore
      await addDoc(collection(db, "corporatePartners"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      // Show success alert
      setSubmitted(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        city: "",
        tier: "",
        message: "",
        isDropdownOpen: false,
      });

      // Hide success alert after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">
          Become a Corporate Partner
        </h2>
        <p className="text-center text-gray-700 mb-6">
          Fill out the form below to explore partnership opportunities with
          Charlie Parker C. Global Foundation.
        </p>

        {/* ✅ Success Alert */}
        {submitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center">
            Form Submitted successfully
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
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
                className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="John Doe"
              />
            </div>
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
                className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Phone & Company */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="+234 800 000 0000"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Acme Corp"
              />
            </div>
          </div>

          {/* Country & City */}
          <div className="grid md:grid-cols-2 gap-6">
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
                className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Nigeria"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Lagos"
              />
            </div>
          </div>

          {/* Tier Selection */}
          <div className="relative w-full">
            <label className="block text-gray-700 font-semibold mb-2">
              Select Tier
            </label>
            <div
              onClick={() =>
                setFormData({
                  ...formData,
                  isDropdownOpen: !formData.isDropdownOpen,
                })
              }
              className="border border-gray-300 rounded-lg bg-white text-black px-4 py-2 cursor-pointer flex justify-between items-center"
            >
              <span>{formData.tier || "-- Select Tier --"}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  formData.isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {formData.isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 border border-gray-300 text-black rounded-lg bg-white shadow-lg overflow-hidden">
                {["Bronze", "Silver", "Gold", "Platinum"].map((tier, index) => (
                  <div
                    key={tier}
                    onClick={() =>
                      setFormData({ ...formData, tier, isDropdownOpen: false })
                    }
                    className={`px-4 py-2 cursor-pointer ${
                      index !== 3 ? "border-b border-gray-300" : ""
                    } hover:bg-yellow-50 ${
                      formData.tier === tier ? "bg-yellow-100" : ""
                    }`}
                  >
                    {tier}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Tell us more about your interest in partnering..."
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CorporatePartnerForm;
