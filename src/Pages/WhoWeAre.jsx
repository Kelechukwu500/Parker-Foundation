import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaLock,
  FaHandsHelping,
  FaLeaf,
  FaUsers,
  FaLightbulb,
  FaChartBar,
  FaGlobe,
  FaCheckCircle,
  FaBullseye,
  FaPrayingHands,
  FaCross,
} from "react-icons/fa";
import Vision from "../assets/Vision.jpg";
import Mission from "../assets/Mission.jpg";
import AboutUs from "../assets/AboutUs.jpg";
import Donation from "../assets/Donation.jpg";
import Trust from "../assets/Trust.jpg";

const values = [
  {
    title: "Compassion",
    text: "We show genuine care and concern for the dignity, wellbeing, and rights of every individual and community we serve. Compassion drives every decision we make.",
    icon: <FaHeart />,
    iconClass: "text-red-500",
  },
  {
    title: "Integrity",
    text: "We act with honesty, transparency, and accountability, ensuring every action and resource aligns with our mission and values.",
    icon: <FaLock />,
    iconClass: "text-gray-800",
  },
  {
    title: "Empathy",
    text: "We listen deeply and seek to understand the needs of those we serve, ensuring our programs are rooted in respect and care.",
    icon: <FaHandsHelping />,
    iconClass: "text-blue-500",
  },
  {
    title: "Sustainability",
    text: "We create long-term solutions that empower communities, building resilience rather than dependence.",
    icon: <FaLeaf />,
    iconClass: "text-green-500",
  },
  {
    title: "Collaboration",
    text: "We build partnerships with local organizations, governments, and donors to amplify impact.",
    icon: <FaUsers />,
    iconClass: "text-purple-500",
  },
  {
    title: "Innovation",
    text: "We embrace new ideas, approaches, and technologies to improve outcomes and broaden our reach.",
    icon: <FaLightbulb />,
    iconClass: "text-yellow-500",
  },
  {
    title: "Transparency",
    text: "We provide clear, accessible reports on how donations are used and the impact achieved.",
    icon: <FaChartBar />,
    iconClass: "text-blue-700",
  },
  {
    title: "Inclusivity",
    text: "We respect cultural diversity and ensure our programs reach everyone without discrimination.",
    icon: <FaGlobe />,
    iconClass: "text-teal-500",
  },
  {
    title: "Accountability",
    text: "We take responsibility for our results, learning from successes and challenges alike.",
    icon: <FaCheckCircle />,
    iconClass: "text-green-600",
  },
  {
    title: "Impact-driven",
    text: "We measure success by tangible change in the lives of those we serve, focusing on meaningful outcomes.",
    icon: <FaBullseye />,
    iconClass: "text-red-600",
  },
  {
    title: "Faith",
    text: "We believe faith is the foundation of hope. Our work is rooted in trust and belief that positive change is possible through collective effort.",
    icon: <FaPrayingHands />,
    iconClass: "text-indigo-500",
  },
  {
    title: "Devotion to God",
    text: "We dedicate our work to honoring God’s calling. Every action is inspired by devotion, guided by faith, and aimed at serving humanity with love.",
    icon: <FaCross />,
    iconClass: "text-yellow-600",
  },
];

const teamMembers = [
  { image: "Image 1", name: "John Doe", role: "Founder & CEO" },
  { image: "Image 2", name: "Jane Smith", role: "Chief Operations Officer" },
  { image: "Image 3", name: "Michael Brown", role: "Head of Programs" },
  { image: "Image 4", name: "Sarah Johnson", role: "Community Engagement Lead" },
  { image: "Image 5", name: "Emily Davis", role: "Fundraising Manager" },
  { image: "Image 6", name: "David Wilson", role: "Communications Director" },
  { image: "Image 7", name: "Linda Martinez", role: "Volunteer Coordinator" },
  { image: "Image 8", name: "James Taylor", role: "Finance Manager" },
];

const quotes = [
  "Giving is not just about making a donation, it’s about making a difference.",
  "Charity begins with compassion, and compassion transforms communities.",
  "True philanthropy uplifts lives, restores hope, and inspires change.",
];

const SectionHeading = ({ eyebrow, title, description, centered = true }) => (
  <div className={`${centered ? "text-center" : "text-left"} mb-10 sm:mb-12`}>
    {eyebrow && (
      <p className="text-base font-semibold tracking-[0.12em] uppercase text-[#1f3552] mb-3">
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
      {title}
    </h2>
    {description && (
      <p
        className={`mt-4 text-base sm:text-lg leading-8 text-gray-700 ${
          centered ? "max-w-3xl mx-auto" : "max-w-2xl"
        }`}
      >
        {description}
      </p>
    )}
  </div>
);

const ValueCard = ({ title, text, icon, iconClass }) => (
  <article className="h-full rounded-[24px] border border-black/6 bg-white p-6 sm:p-7">
    <div
      className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-[24px] ${iconClass}`}
    >
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-base leading-8 text-gray-700">{text}</p>
  </article>
);

const MissionVisionCard = ({ image, alt, title, text }) => (
  <article className="rounded-[28px] border border-black/6 bg-white overflow-hidden">
    <div className="aspect-[16/10] w-full overflow-hidden">
      <img src={image} alt={alt} className="h-full w-full object-cover" />
    </div>
    <div className="p-6 sm:p-8">
      <h3 className="text-2xl sm:text-3xl font-bold italic text-orange-600 mb-4">
        {title}
      </h3>
      <p className="text-base leading-8 text-gray-700">{text}</p>
    </div>
  </article>
);

const WhoWeAre = () => {
  return (
    <>
      <style>{`
        @keyframes marquee-loop {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>

      <main className="overflow-x-hidden bg-[#f8fafc]">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#1f3552]">
          <div className="absolute inset-0">
            <img
              src={Donation}
              alt="Charlie Parker C. Global Foundation"
              className="h-full w-full object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-[#1f3552]/80" />

          <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <div className="text-white">
                <p className="text-base font-semibold tracking-[0.12em] uppercase text-white/75 mb-4">
                  About Us
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Empowering communities, transforming lives, and creating lasting impact.
                </h1>

                <div className="space-y-4">
                  <p className="text-base sm:text-lg leading-8 text-white/90">
                    Charlie Parker C. Global Foundation was established on{" "}
                    <strong>24th May 2021</strong> in Abuja, Nigeria, with a vision to
                    empower communities, transform lives, and create lasting impact.
                    Since its inception, the foundation has focused on providing vital
                    resources, educational opportunities, disaster relief, and
                    humanitarian aid to underprivileged communities both locally and
                    globally.
                  </p>

                  <p className="text-base sm:text-lg leading-8 text-white/90">
                    Driven by the core values of compassion, integrity, and
                    sustainability, our work encompasses a wide range of initiatives —
                    from distributing essential school supplies to children in need,
                    to partnering with nonprofits and local organizations to deliver
                    food, healthcare, and clean water in disaster-stricken areas.
                  </p>

                  <p className="text-base sm:text-lg leading-8 text-white/90">
                    We believe that every act of giving has the power to spark change.
                    That is why we collaborate closely with communities to understand
                    their needs, co-create solutions, and ensure that our support has
                    lasting effects. Charlie Parker C. Global Foundation continues to
                    grow, fueled by the dedication of donors, volunteers, and partners
                    who share our mission of making the world a better place.
                  </p>
                </div>

                <div className="mt-8">
                  <Link to="/story" className="inline-flex w-full sm:w-auto">
                    <button className="btn btn-secondary w-full sm:w-auto">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>

              <div className="w-full">
                <div className="overflow-hidden rounded-[28px] border border-white/10">
                  <img
                    src={AboutUs}
                    alt="About Us"
                    className="h-[300px] sm:h-[420px] lg:h-[540px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-[1440px]">
            <SectionHeading
              eyebrow="Our Values"
              title="The heartbeat of our organization"
              description={
                <>
                  These values bring life to our team and give us purpose to support
                  the children in our care. Our efforts are aligned with these values
                  to ensure every child feels cherished, healed, and empowered.
                </>
              }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {values.map((value) => (
                <ValueCard key={value.title} {...value} />
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="w-full bg-[#eef2f7] px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-[1440px]">
            <SectionHeading
              eyebrow="Mission & Vision"
              title="Our Mission & Vision"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <MissionVisionCard
                image={Mission}
                alt="Mission Placeholder"
                title="Mission"
                text="At Charlie Parker C. Global Foundation, our mission is to empower vulnerable communities through education, healthcare, sustainable development, and humanitarian aid. We strive to bring transformative change by providing essential resources, fostering resilience, and creating opportunities that improve lives across Nigeria and the world."
              />

              <MissionVisionCard
                image={Vision}
                alt="Vision Placeholder"
                title="Vision"
                text="Our vision is to build a world where every community is empowered to thrive, children are cherished and educated, and resources are shared equitably. We envision a future where compassion, sustainability, and innovation drive impactful change, making a lasting difference in the lives we touch."
              />
            </div>
          </div>
        </section>

        {/* Financial Integrity */}
        <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
              <div className="overflow-hidden rounded-[28px] border border-black/6">
                <img
                  src={Trust}
                  alt="Financial Integrity"
                  className="h-[300px] sm:h-[420px] lg:h-[460px] w-full object-cover"
                />
              </div>

              <div className="max-w-2xl">
                <p className="text-base font-semibold tracking-[0.12em] uppercase text-[#1f3552] mb-3">
                  Transparency
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                  Financial Integrity
                </h2>
                <p className="text-base sm:text-lg leading-8 text-gray-700">
                  Charlie Parker C. Global Foundation, together with Kids Alive
                  International, upholds the highest standards of transparency,
                  accountability, and stewardship. We are committed to ensuring
                  every contribution is utilized wisely, efficiently, and with
                  integrity. Through faithful management, we have earned top ratings
                  from Charity Navigator, platinum status from GuideStar, and ECFA
                  accreditation. Explore our financial reports to see how your
                  support is making a lasting impact.
                </p>

                <div className="mt-8">
                  <Link to="/financial-integrity" className="inline-flex w-full sm:w-auto">
                    <button className="btn btn-primary w-full sm:w-auto">
                      Financial Integrity
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="w-full bg-[#eef2f7] px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-[1440px]">
            <SectionHeading
              eyebrow="Our People"
              title="Meet The Team"
              description="Our dedicated team of passionate individuals works tirelessly to drive our mission forward. Each member brings unique skills and perspectives, united by a shared commitment to making a positive impact in the communities we serve."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="rounded-[24px] border border-black/6 bg-white p-6 text-center"
                >
                  <div className="mx-auto mb-5 flex h-40 w-40 sm:h-44 sm:w-44 items-center justify-center rounded-full bg-slate-200 text-base font-medium text-gray-700">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">{member.role}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link to="/board-of-directors" className="inline-flex w-full justify-center sm:w-auto">
                <button className="btn btn-primary w-full sm:w-auto">
                  Board Of Directors
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Quotes Marquee */}
        <section className="overflow-hidden py-8">
          <div className="relative w-full overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-16" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-16" />

            <div className="group overflow-hidden">
              <div
                className="flex w-max items-center gap-8 px-6 sm:gap-12 sm:px-8 will-change-transform group-hover:[animation-play-state:paused]"
                style={{ animation: "marquee-loop 28s linear infinite" }}
              >
                {[...quotes, ...quotes].map((quote, index) => (
                  <div
                    key={`${quote}-${index}`}
                    className="flex-shrink-0 text-lg sm:text-xl font-semibold text-[#e8751a]"
                  >
                    {quote}
                    <span className="text-4xl font-bold mx-4">.</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WhoWeAre;