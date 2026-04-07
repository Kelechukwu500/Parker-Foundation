import React from "react";

import Photo1 from "../assets/photo1.jpg";
import Photo2 from "../assets/photo2.jpg";
import Photo3 from "../assets/photo3.jpg";
import Photo4 from "../assets/photo4.jpg";
import Photo5 from "../assets/photo5.jpg";
import Photo6 from "../assets/photo6.jpg";
import Photo7 from "../assets/photo7.jpg";
import Photo8 from "../assets/photo8.jpg";
import Photo9 from "../assets/photo9.jpg";
import Photo10 from "../assets/photo10.jpg";
import Photo11 from "../assets/photo11.jpg";
import Photo12 from "../assets/photo12.jpg";
import Photo13 from "../assets/photo13.jpg";
import Photo23 from "../assets/photo23.jpg";
import Photo15 from "../assets/photo15.jpg";
import Photo22 from "../assets/photo22.jpg";
import Photo17 from "../assets/photo17.jpg";
import Photo18 from "../assets/photo18.jpg";
import Photo24 from "../assets/photo24.jpg";
import Photo25 from "../assets/photo25.jpg";
import Photo26 from "../assets/photo26.jpg";
import Photo30 from "../assets/photo30.jpg";
import Photo31 from "../assets/photo31.jpg";
import Photo32 from "../assets/photo32.jpg";
import Crises1 from "../assets/crises1.jpg";
import Crises2 from "../assets/crises2.jpg";
import Crises3 from "../assets/crises3.jpg";
import Crises4 from "../assets/crises4.jpg";
import Crises5 from "../assets/crises5.jpg";
import Crises6 from "../assets/crises6.jpg";
import Crises7 from "../assets/crises7.jpg";
import Crises8 from "../assets/crises8.jpg";
import Crises9 from "../assets/crises9.jpg";
import Crises10 from "../assets/crises10.jpg";
import Crises11 from "../assets/crises11.jpg";
import Crises12 from "../assets/crises12.jpg";

const photos = [
  Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8,
  Photo9, Photo10, Photo11, Photo12, Photo13, Photo23, Photo15,
  Photo22, Photo17, Photo18, Photo24, Photo25, Photo26, Photo30,
  Photo31, Photo32, Crises1, Crises2, Crises3, Crises4, Crises5,
  Crises6, Crises7, Crises8, Crises9, Crises10, Crises11, Crises12,
];

const videos = [
  { src: "/Flood1.mp4", description: "Celebrating our community outreach programs" },
  { src: "/Flood2.mp4", description: "Feeding programs in remote villages" },
  { src: "/Video3.mp4", description: "Providing school materials to needy children" },
  { src: "/Video4.mp4", description: "Our vision for a brighter future" },
  { src: "/Flood3.mp4", description: "Empowering communities through education" },
  { src: "/Flood4.mp4", description: "Nourishing bodies and minds" },
  { src: "/Video2.mp4", description: "Transforming lives with your support" },
  { src: "/Video5.mp4", description: "Join us in making a difference" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">Gallery</h1>

      <div className="max-w-6xl mx-auto space-y-10">

        {/* Photo Gallery */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-3">Photo Gallery</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-6">
            Our photo gallery showcases moments of joy, empowerment, and hope — from distributing school
            materials to feeding programs, every snapshot tells a story of change and compassion.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Gallery Photo ${index + 1}`}
                className="w-full h-56 sm:h-64 object-cover rounded-lg shadow"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Video Gallery */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-3">Video Gallery</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-6">
            Watch inspiring stories of impact in our video gallery.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {videos.map((video, index) => (
              <div key={index} className="flex flex-col">
                <video
                  controls
                  src={video.src}
                  className="w-full h-56 sm:h-64 object-cover rounded-lg shadow"
                />
                <p className="text-gray-700 text-sm mt-2 text-center">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Donate Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition">
          Donate Now
        </button>
      </div>

      {/* Quotes Marquee */}
      <section className="overflow-hidden py-8 bg-gray-200 mt-10 rounded-lg">
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee gap-12 px-4">
            {[
              "Giving is not just about making a donation, it's about making a difference.",
              "Charity begins with compassion, and compassion transforms communities.",
              "True philanthropy uplifts lives, restores hope, and inspires change.",
              "Giving is not just about making a donation, it's about making a difference.",
              "Charity begins with compassion, and compassion transforms communities.",
              "True philanthropy uplifts lives, restores hope, and inspires change.",
            ].map((q, i) => (
              <div key={i} className="flex-shrink-0 text-sm sm:text-xl font-semibold text-blue-800 whitespace-nowrap">
                {q} <span className="text-3xl font-bold mx-3">·</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;