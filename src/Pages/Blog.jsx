import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import FAQ from "../Components/FAQ";

// Example images — replace with actual images in your assets
import Photo1 from "../assets/Photo1.jpg";
import Photo2 from "../assets/Photo2.jpg";
import Photo3 from "../assets/Photo3.jpg";
import Photo4 from "../assets/Photo4.jpg";

const newsArticles = [
  {
    title: "Charity Impact in Nigeria",
    text: "In Nigeria, charitable organizations are playing a growing role in tackling poverty, improving education, and delivering healthcare to underserved communities. Foundations are working with grassroots initiatives to ensure transparency and sustainable impact.",
    image: Photo1,
    link: "https://charityjournal.org/10-largest-charitable-organizations-in-nigeria-making-a-real-impact/?utm_source=chatgpt.com",
  },
  {
    title: "Giving Trends Across Africa",
    text: "Across Africa, philanthropy is transforming communities. From Kenya to South Africa, initiatives are focusing on sustainable development, women empowerment, and access to clean water. Collaborative giving models are emerging as powerful tools for change.",
    image: Photo2,
    link: "https://time.com/6333191/kennedy-odede-time100-impact-awards/",
  },
  {
    title: "Charity Sector in Zambia",
    text: "Charity organizations in Zambia are making a significant impact by supporting orphanages through improved transparency and effective impact measurement. These foundations are developing innovative fundraising initiatives to provide better care, education, and opportunities for vulnerable children.",
    image: Photo3,
    link: "https://www.theoutreachfoundation.org/namumu-orphanage-center?utm_source=chatgpt.com",
  },
  {
    title: "Global Philanthropy Updates",
    text: "Worldwide, philanthropy is evolving with new models like impact investing and venture philanthropy. Large foundations are partnering with tech innovators to amplify donations and track project outcomes in real-time.",
    image: Photo4,
    link: "https://medium.com/@corporateventuringinsider/insights-from-corporate-venturing-insider-the-rise-of-impact-investing-and-venture-philanthropy-946f6185cad3",
  },
  {
    title: "Technology and Giving",
    text: "Digital platforms are transforming charity giving. Mobile donations, crowdfunding sites, and blockchain-based transparency tools are creating new opportunities for donors and foundations across the globe.",
    image: Photo1,
    link: "https://joshgibsonmdgiving.com/philanthropy-and-technology-how-digital-platforms-are-changing-giving/?utm_source=chatgpt.com",
  },
  {
    title: "Women in Philanthropy",
    text: "Women leaders in philanthropy are shaping the future of giving. Across Africa, female-led foundations are focusing on education, healthcare, and gender equality, ensuring that giving initiatives are inclusive and impactful.",
    image: Photo2,
    link: "https://youtu.be/luVVK1vLX5w",
  },
];

const Blog = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-green-200 to-gray-400 p-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Latest News & Updates on Charity and Giving
      </h2>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        {newsArticles.map((article, index) => (
          <Tilt
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{article.text}</p>
              <Link
                to={article.link}
                className="px-4 py-2 bg-black-500 text-white rounded hover:bg-gray-600"
              >
                Learn More
              </Link>
            </div>
          </Tilt>
        ))}
      </motion.div>
      <FAQ />
    </div>
  );
};

export default Blog;
