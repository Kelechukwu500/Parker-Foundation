import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { db } from "../Firebase"; 
import { collection, addDoc, Timestamp } from "firebase/firestore";

const nigeriaPosition = [9.05785, 7.49508]; 
const ukPosition = [51.4816, -3.1791]; 


const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Contact = () => {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    note: "",
  });

  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contactSubmissions"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      // ✅ Show delivery alert
      alert("Form submitted successfully!");

      setSuccess("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        note: "",
      });
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-600">Contact</h1>
          <p className="italic text-xl text-gray-600 mt-2">Get in touch!</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section: Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-black">Reach out</h2>
            <h3 className="text-3xl font-extrabold mb-4 text-black">
              WE’D LOVE TO HEAR FROM YOU!
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              If you have any questions or comments about Charlie Parker C.
              Global Foundation, feel free to reach out to our team by phone,
              mail, or email. You can expect a response within two business
              days.
            </p>

            <p className="text-gray-800 mb-2">
              <strong>Nigeria Office:</strong>
              <br />
              Plot 208 Zakari Maimalari Street, Gateway Plaza, Central Area,
              Abuja FCT, Nigeria.
              <br />
              <strong>Phone:</strong> +234 9035415114
            </p>

            <p className="text-gray-800 mb-2">
              <strong>UK Office:</strong>
              <br />
              38 Richmond Road, Cardiff, United Kingdom.
              <br />
              <strong>Phone:</strong> +44 7708 456847
            </p>

            <p className="text-gray-800 mb-2">
              <strong>Email:</strong> charleswings1@gmail.com
            </p>

            <p className="text-gray-800 mt-4">
              <strong>Office Hours:</strong> Mon – Fri: 8:30am – 5:00pm
            </p>
          </div>

          {/* Right Section: Contact Form */}
          <div>
            <form
              className="bg-white shadow-lg rounded-lg p-8 space-y-5"
              onSubmit={handleSubmit} // <-- Firebase submit
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 mb-1">
                    First name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 text-black rounded-md p-2 focus:outline-none focus:ring focus:ring-yellow-400"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Last name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 text-black rounded-md p-2 focus:outline-none focus:ring focus:ring-yellow-400"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-600 mb-1">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 text-black rounded-md p-2 focus:outline-none focus:ring focus:ring-yellow-400"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-1">
                  Mailing Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-gray-300 text-black rounded-md p-2"
                  placeholder="Enter your mailing address"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-gray-600 mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border border-gray-300 text-black rounded-md p-2"
                    placeholder="City"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full border border-gray-300 text-black rounded-md p-2"
                    placeholder="State"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Zip Code</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full border border-gray-300 text-black rounded-md p-2"
                    placeholder="Zip Code"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-600 mb-1">Phone number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 text-black rounded-md p-2"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-1">
                  Want to send us a note?
                </label>
                <textarea
                  name="note"
                  rows="4"
                  value={formData.note}
                  onChange={handleChange}
                  className="w-full border border-gray-300 text-black rounded-md p-2"
                  placeholder="Send us a note."
                ></textarea>
              </div>

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-md"
                >
                  Send Message
                </button>
              </div>

              {success && <p className="text-green-600 mt-2">{success}</p>}
            </form>
          </div>
        </div>

        {/* ✅ Map Section */}
        <div className="mt-24 mb-24">
          <h2 className="italic text-2xl font-bold text-center mb-10 text-gray-800">
            Our Locations
          </h2>

          {/* Two Map Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Nigeria Map Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Nigeria Office
              </h3>
              <div className="h-[350px] w-full overflow-hidden rounded-lg mb-4">
                <MapContainer
                  center={nigeriaPosition}
                  zoom={6}
                  scrollWheelZoom={false}
                  className="h-full w-full rounded-lg"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                  />
                  <Marker position={nigeriaPosition} icon={customIcon}>
                    <Popup>
                      <strong>Nigeria Office</strong>
                      <br />
                      Plot 208 Zakari Maimalari Street, Gateway Plaza, Central
                      Area, Abuja FCT.
                      <br />
                      +234 9035415114
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
              <p className="text-gray-700 text-center">
                Plot 208 Zakari Maimalari Street, Gateway Plaza, Central Area,
                Abuja FCT, Nigeria. <br />
                <strong>Phone:</strong> +234 9035415114
              </p>
            </div>

            {/* UK Map Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                UK Office
              </h3>
              <div className="h-[350px] w-full overflow-hidden rounded-lg mb-4">
                <MapContainer
                  center={ukPosition}
                  zoom={6}
                  scrollWheelZoom={false}
                  className="h-full w-full rounded-lg"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                  />
                  <Marker position={ukPosition} icon={customIcon}>
                    <Popup>
                      <strong>UK Office</strong>
                      <br />
                      38 Richmond Road, Cardiff, United Kingdom.
                      <br />
                      +44 7708 456847
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
              <p className="text-gray-700 text-center">
                38 Richmond Road, Cardiff, United Kingdom. <br />
                <strong>Phone:</strong> +44 7708 456847
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
