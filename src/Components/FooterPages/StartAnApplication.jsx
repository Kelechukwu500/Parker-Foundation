import React, { useState } from "react";
import Application from "../../assets/Application.jpg";
import { db, storage } from "../../Firebase";
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

      if (formData.documents) {
        const storageRef = ref(
          storage,
          `applications/${formData.documents.name}_${Date.now()}`,
        );
        const snapshot = await uploadBytes(storageRef, formData.documents);
        documentURL = await getDownloadURL(snapshot.ref);
      }

      await addDoc(collection(db, "jobApplications"), {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        message: formData.message,
        documentURL,
        createdAt: Timestamp.now(),
      });

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
      console.error(err);
    }
  };

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row gap-10 lg:gap-12">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">
            Start an Application
          </h2>

          <p className="text-base sm:text-lg italic text-gray-600">
            Apply to join our programs and access support tailored to your
            needs.
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            At <strong>Charlie Parker C. Global Foundation</strong>, starting an
            application is the first step toward accessing life-changing
            programs.
          </p>

          {/* STEPS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4">
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow">
              <h3 className="font-semibold text-purple-500 mb-2">
                1. Fill Application
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Provide basic information.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-lg shadow">
              <h3 className="font-semibold text-green-500 mb-2">
                2. Upload Documents
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Submit required files.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-600 mb-2">
                3. Review Process
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We evaluate your application.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-lg shadow">
              <h3 className="font-semibold text-pink-700 mb-2">
                4. Enrollment
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                You get approved access.
              </p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 sm:mt-10 bg-white p-5 sm:p-6 lg:p-8 rounded-lg shadow-lg flex flex-col gap-4 sm:gap-5 w-full"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Application Form
            </h3>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              name="organization"
              placeholder="Organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="file"
              name="documents"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="bg-yellow-500 text-white py-3 sm:py-4 rounded-lg hover:bg-yellow-600 transition"
            >
              Submit Application
            </button>

            {success && (
              <p className="text-green-600 text-sm sm:text-base">{success}</p>
            )}
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/3">
          <img
            src={Application}
            alt="Application"
            className="w-full h-[250px] sm:h-[350px] lg:h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default StartAnApplication;
