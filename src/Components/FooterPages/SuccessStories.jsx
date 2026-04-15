import React from "react";
import { motion } from "framer-motion";

// Import your images
import John from "../../assets/John.jpg";
import Isabela from "../../assets/Isabela.jpg";
import Unify from "../../assets/Unify.jpg";

const stories = [
  {
    id: 1,
    name: "John",
    age: 8,
    image: John,
    title: "From Separation to Safety and Hope",
    story: `John’s story began with uncertainty and fear. At just 8 years old, he was found wandering alone after being separated from his family due to unforeseen circumstances. With no shelter, no food, and no access to education, John was exposed to the harsh realities of life on the streets.

During one of Charlie Parker’s Foundation’s community outreach programs, volunteers identified John as a vulnerable child in urgent need of care. After proper assessment and child protection procedures, he was taken into the foundation’s care.

John was provided with immediate shelter, nutritious meals, clothing, and emotional support. Over time, he began to heal from the trauma of abandonment. The foundation ensured he received proper counseling and a safe, loving environment where he could rediscover joy and stability.

Recognizing the importance of education in shaping his future, the foundation enrolled John into school, providing him with uniforms, books, and continuous academic support. Today, John is thriving in the classroom, building friendships, and showing great enthusiasm for learning.

From a place of fear and loneliness, John now lives with hope, structure, and the promise of a brighter tomorrow.`,
    quote:
      "I feel safe now, and I am happy to go to school every day. I want to become someone important in life.",
  },
  {
    id: 2,
    name: "Isabela",
    age: 8,
    image: Isabela,
    title: "A Journey from Illiteracy to Purpose",
    story: `Meet Isabela, a determined young girl whose life has been transformed through education and care at Charlie Parker C. Global Foundation Academy in Nigeria.

Isabela joined the foundation at the age of 8 through a community identification program aimed at reaching children without access to education. At the time, she had never been to school and was unable to read or write. Her family faced significant financial challenges, making formal education impossible.

Through the foundation’s inclusive education initiative, Isabela was given a second chance. She was enrolled into the academy, where she received personalized learning support tailored to her level. Teachers worked closely with her, helping her build foundational literacy and numeracy skills step by step.

Beyond academics, Isabela benefited from mentorship, emotional encouragement, and a supportive learning environment that nurtured her confidence. The foundation also provided her with school materials, uniforms, and daily care to ensure she could focus fully on her development.

Today, Isabela has made remarkable progress and is advancing to her final primary grade. Her determination and resilience have set her apart, and she now dreams boldly of becoming a medical doctor—an ambition she once thought impossible.

Isabela’s journey is a powerful testament to what opportunity, care, and education can achieve.`,
    quote:
      "I want to become a doctor so I can help people and make my family proud.",
  },
  {
    id: 3,
    name: "Daniel",
    age: 10,
    image: Unify,
    title: "Breaking Barriers Through Opportunity",
    story: `Daniel grew up in a low-income community where access to basic necessities and quality education was extremely limited. His parents struggled to provide for the family, and as a result, Daniel’s chances of attending school regularly were uncertain.

Charlie Parker’s Foundation identified Daniel during a community outreach initiative focused on supporting underprivileged children with strong potential but limited opportunities. After evaluating his situation, the foundation stepped in to support his educational journey.

Daniel was enrolled in school under the foundation’s sponsorship program. He received school supplies, uniforms, and financial support to cover his educational needs. In addition, the foundation ensured he had access to proper nutrition and a stable environment to support his growth.

With consistent mentorship and encouragement, Daniel began to excel academically. He actively participates in class, engages in extracurricular activities, and has developed strong leadership qualities among his peers.

Today, Daniel is no longer limited by his circumstances. He is focused, confident, and driven to succeed, with aspirations of building a better future for himself and his family.

His story reflects the foundation’s commitment to breaking the cycle of poverty through education and empowerment.`,
    quote:
      "I now believe I can achieve my dreams because someone believed in me.",
  },
];

const SuccessStories = () => {
  return (
    <section className="bg-[linear-gradient(to_bottom,#f8fafc_0%,#ffffff_20%,#f8fafc_100%)] py-16 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-4">Success Stories</h2>
        <p className="text-white max-w-3xl mx-auto">
          Every child deserves a chance. These stories reflect how Charlie
          Parker’s Foundation identifies vulnerable children, nurtures them with
          care, and empowers them through education to build a better future.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {stories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="h-56 overflow-hidden">
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {story.title}
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  {story.name}, Age {story.age}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {story.story}
                </p>
              </div>

              {/* Quote */}
              <div className="mt-6">
                <p className="italic text-yellow-600 font-medium text-sm">
                  "{story.quote}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h3 className="text-2xl text-white font-semibold mb-4">
          Help Us Create More Success Stories
        </h3>
        <p className="text-white mb-6 max-w-xl mx-auto">
          Your support enables us to reach more children, provide education, and
          transform lives. Be part of something meaningful today.
        </p>
        <button className="bg-black text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition duration-300">
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default SuccessStories;
