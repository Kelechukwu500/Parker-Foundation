import React, { useState } from "react";
import Application from "../../assets/application.jpg"; // Replace with your image path
import { db, storage } from "../../Firebase"; // ✅ Added Firebase imports
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const StartAnApplication = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
    documents: null,
  });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "documents") {
      setFormData({ ...formData, documents: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let documentURL = null;

      // Upload file to Firebase Storage if provided
      if (formData.documents) {
        const storageRef = ref(
          storage,
          `applications/${formData.documents.name}_${Date.now()}`
        );
        const snapshot = await uploadBytes(storageRef, formData.documents);
        documentURL = await getDownloadURL(snapshot.ref);
      }

      // Save form data to Firestore
      await addDoc(collection(db, "jobApplications"), {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        message: formData.message,
        documentURL: documentURL,
        createdAt: Timestamp.now(),
      });

      alert("Application submitted successfully!");
      setSuccess("Your application has been submitted!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
        documents: null,
      });
    } catch (err) {
      console.error("Error submitting application:", err);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start gap-12">
        {/* Left Side - Write Ups & Steps */}
        <div className="lg:w-2/3 flex flex-col gap-6">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-blue-600">
            Start an Application
          </h2>

          {/* Subheading */}
          <p className="text-lg italic text-gray-600">
            Apply to join our programs and access support tailored to your
            needs.
          </p>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            At <strong>Charlie Parker C. Global Foundation</strong>, starting an
            application is the first step toward accessing life-changing
            programs. Whether you are a child, family, or partner organization,
            our team will guide you through each step and ensure your
            application is processed smoothly.
          </p>

          {/* Steps Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-purple-500 mb-2">
                1. Fill Out Application Form
              </h3>
              <p className="text-gray-600">
                Provide basic information and share details about your
                situation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-green-500 mb-2">
                2. Submit Required Documents
              </h3>
              <p className="text-gray-600">
                Upload identification, school records, or any other supporting
                documents.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-yellow-600 mb-2">
                3. Review & Approval
              </h3>
              <p className="text-gray-600">
                Our team reviews your application and contacts you for
                follow-up.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-pink-700 mb-2">
                4. Program Enrollment
              </h3>
              <p className="text-gray-600">
                Once approved, you gain access to the relevant program or
                support.
              </p>
            </div>
          </div>

          {/* Application Form */}
          <form
            className="mt-10 bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6"
            onSubmit={handleSubmit} // ✅ connected to Firebase
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Application Form
            </h3>

            <label className="text-gray-700 font-medium" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            <label className="text-gray-700 font-medium" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            <label className="text-gray-700 font-medium" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <label className="text-gray-700 font-medium" htmlFor="organization">
              Organization (if applicable)
            </label>
            <input
              type="text"
              name="organization"
              id="organization"
              placeholder="Enter your organization"
              value={formData.organization}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <label className="text-gray-700 font-medium" htmlFor="message">
              Message / Situation Details
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Tell us about your situation / message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows="4"
            ></textarea>

            <label className="text-gray-700 font-medium" htmlFor="documents">
              Upload Documents
            </label>
            <input
              type="file"
              name="documents"
              id="documents"
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button
              type="submit"
              className="bg-yellow-500 text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-yellow-600 transition"
            >
              Submit Application
            </button>

            {success && <p className="text-green-600 mt-2">{success}</p>}
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/3 relative">
          <img
            src={Application}
            alt="Start an Application"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default StartAnApplication;
