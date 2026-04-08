// SuccessStories.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // ✅ Correct import for Swiper 9+
import "swiper/css";
import "swiper/css/navigation";

// Import images
import Aisha from "../../assets/Aisha.jpg";
import Photo2 from "../../assets/Photo2.jpg";
import John from "../../assets/John.jpg";

const stories = [
  {
    title: "From Student to Leader",
    description:
      "Meet Juliet, who graduated top of her class and is now mentoring younger students.",
    image: Aisha,
    link: "/juliet-story-pdf",
  },
  {
    title: "Empowering Communities",
    description:
      "Our community development project provided clean water to over 500 families.",
    image: Photo2,
    link: "/empowering-communities-pdf",
  },
  {
    title: "Breaking Barriers",
    description:
      "John overcame economic challenges and is now pursuing his career dream.",
    image: John,
    link: "/breaking-barriers-pdf",
  },
];

const SuccessStories = () => {
  // ✅ Change this value to adjust the image height
  const imageHeight = "h-80"; // Tailwind class, e.g., h-64, h-72, h-80

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-600">Success Stories</h2>
          <p className="mt-4 text-gray-700 italic text-lg">
            Celebrating the lives transformed through education, mentorship, and
            community support.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {stories.map((story, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow overflow-hidden flex flex-col m-2"
              >
                {/* Image holder */}
                <div className={`${imageHeight} overflow-hidden`}>
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {story.title}
                  </h3>
                  <p className="mt-2 text-gray-700 flex-grow">
                    {story.description}
                  </p>
                  {story.link && (
                    <a
                      href={story.link}
                      className="mt-4 inline-block px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition text-center"
                    >
                      Read More
                    </a>
                  )}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SuccessStories;
