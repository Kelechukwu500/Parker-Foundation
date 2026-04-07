import React from "react";
import { Link } from "react-router-dom";
import Graduation1 from "../assets/graduation1.jpg";
import Care from "../assets/care.jpg";
import Champion from "../assets/champion.jpg";
import Strenght1 from "../assets/strenght1.jpg";
import Family from "../assets/family.jpg";
import Impact from "../assets/impact.jpg";
import Protective from "../assets/protective.jpg";
import Healthier from "../assets/healthier.jpg";
import Caring from "../assets/caring.jpg";
import Justice1 from "../assets/justice1.jpg";
import Healing from "../assets/healing.jpg";
import Change from "../assets/change.jpg";

const programCards = [
  {
    title: "Restorative Education",
    text: "We help children heal and equip each child for a life of independence through our schools, nutrition, and scholarships.",
    color: "text-blue-900",
    image: Graduation1,
    alt: "Restorative Education",
    href: "#restorative-education",
  },
  {
    title: "Family Strengthening",
    text: "Charlie Parker C. Global Foundation offers resources to vulnerable families such as parent training, family preservation, education, job skills, therapy, and more.",
    color: "text-pink-800",
    image: Strenght1,
    alt: "Family Strengthening",
    href: "#family-strengthening",
  },
  {
    title: "Protective Care",
    text: "When authorities decide a family is no longer safe, Charlie Parker C. Global Foundation provides secure environments through reunification programs, foster care, adoption, residential care, independent living, and additional supportive services.",
    color: "text-yellow-500",
    image: Protective,
    alt: "Protective Care",
    href: "#protective-care",
  },
  {
    title: "Justice Advocacy",
    text: "Our trauma-informed team strives to bring justice and healing to children who have survived trauma, including sexual abuse, violence, and neglect.",
    color: "text-green-600",
    image: Justice1,
    alt: "Justice Advocacy",
    href: "#justice-advocacy",
  },
];

const marqueeQuotes = [
  "Giving is not just about making a donation, it’s about making a difference.",
  "Charity begins with compassion, and compassion transforms communities.",
  "True philanthropy uplifts lives, restores hope, and inspires change.",
];

const SectionDivider = ({ desktopHeight = "h-40" }) => (
  <div className={`hidden lg:block w-px bg-gray-500/70 self-stretch min-h-full ${desktopHeight}`} />
);

const ProgramCard = ({ title, text, color, image, alt, href }) => (
  <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-lg">
    <div className="grid lg:grid-cols-2">
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <h2 className={`mb-4 text-2xl font-extrabold uppercase sm:text-3xl ${color}`}>
          {title}
        </h2>
        <p className="mb-6 text-base leading-7 text-gray-700 sm:text-lg">{text}</p>
        <a
          href={href}
          className="btn btn-secondary w-full sm:w-auto"
        >
          Find Out More <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-full">
        <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      </div>
    </div>
  </article>
);

const BannerSection = ({ id, image, title, strokeColor = "bg-purple-600" }) => (
  <section
    id={id}
    className="relative mt-8 min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] w-full overflow-hidden"
  >
    <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-black/20" />
    <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
      <div className="relative inline-block max-w-full overflow-hidden">
        <span
          className={`absolute left-1/2 top-1/2 h-12 sm:h-14 w-[112%] -translate-x-1/2 -translate-y-1/2 -rotate-1 -skew-x-12 ${strokeColor}`}
          aria-hidden="true"
        />
        <h2 className="relative px-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>
    </div>
  </section>
);

const TwoColumnContent = ({
  reverse = false,
  bg = "bg-gray-100",
  image,
  imageAlt,
  imageClassName = "",
  heading,
  headingClassName,
  subheading,
  paragraphs,
  imageWidth = "md:w-1/2",
  textWidth = "md:w-1/2",
  roundedImage = false,
}) => (
  <section className={`w-full ${bg} px-4 py-12 sm:px-6 lg:px-8`}>
    <div
      className={`mx-auto flex max-w-[1440px] flex-col items-center gap-8 lg:gap-10 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className={`w-full ${imageWidth}`}>
        <div
          className={`overflow-hidden shadow-md ${
            roundedImage ? "rounded-xl lg:rounded-2xl" : "rounded-none"
          } ${imageClassName}`}
        >
          <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
        </div>
      </div>

      <SectionDivider />

      <div className={`w-full ${textWidth}`}>
        <h2 className={headingClassName}>{heading}</h2>
        {subheading && (
          <h3 className="mb-5 text-xl font-semibold text-gray-800 sm:text-2xl">{subheading}</h3>
        )}
        <div className="space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-8 text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const WhatWeDo = () => {
  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
          will-change: transform;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .animate-marquee {
            animation: none;
          }
        }
      `}</style>

      <main className="overflow-x-hidden bg-white">
        <section className="min-h-screen bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-[1440px]">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
                Delivering Hope, Restoration, and Justice to Children, Families, and
                Communities Through Our Comprehensive Programs Across the Globe
              </h1>

              <p className="mb-8 text-base leading-8 text-gray-700 sm:text-lg">
                At <strong>Charlie Parker C. Global Foundation</strong>, we are dedicated
                to transforming lives by empowering communities, strengthening families,
                and fostering sustainable change. Through impactful programs in
                education, healthcare, disaster relief, and community development, we
                work hand-in-hand with local leaders to create lasting solutions. Guided
                by compassion and accountability, we ensure every effort brings hope,
                dignity, and opportunity to those we serve.
              </p>

              <Link to="/story" className="inline-flex w-full justify-center sm:w-auto">
                <button className="btn btn-primary w-full sm:w-auto">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <section className="mt-10 flex w-full items-center justify-center bg-gray-200 px-4 py-12 sm:px-6">
            <div className="w-full max-w-3xl text-center">
              <h2 className="mb-2 text-2xl italic text-orange-700">Our Programs</h2>
              <h3 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                Walking hand in hand toward healing
              </h3>
              <p className="text-base leading-8 text-gray-700 sm:text-lg">
                At <strong>Charlie Parker C. Global Foundation</strong>, we merge
                faith-based compassion with proven, evidence-based practices to support
                trauma prevention and healing. By integrating biblical principles with
                scientific approaches, we deliver holistic care to vulnerable children,
                families, and communities. Guided by love and empathy, we share the
                life-changing message of hope, touching lives and inspiring restoration
                across generations.
              </p>
            </div>
          </section>

          <section className="w-full py-12">
            <div id="Restorative Education" className="scroll-mt-24" />
            <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
              {programCards.map((card) => (
                <ProgramCard key={card.title} {...card} />
              ))}
            </div>
          </section>

          <BannerSection
            id="restorative-education"
            image={Graduation1}
            title="Restorative Education"
            strokeColor="bg-purple-600"
          />
        </section>

        <TwoColumnContent
          bg="bg-gray-300"
          image={Care}
          imageAlt="Children learning and being cared for"
          imageClassName="h-[280px] sm:h-[360px] lg:h-[460px]"
          roundedImage
          heading="Holistic Care"
          headingClassName="mb-5 text-3xl font-extrabold text-rose-800 sm:text-4xl lg:text-5xl"
          subheading="Access to high-quality, faith-based education."
          paragraphs={[
            <>
              Through its educational programs,{" "}
              <strong>Charlie Parker C. Global Foundation</strong> champions every
              child's right to quality education, providing access to schooling,
              tutoring, and vocational training.
            </>,
            <>
              We cultivate learning environments rooted in biblical principles while
              addressing the wider challenges children face in vulnerable families and
              communities. Our approach goes beyond academics, equipping children to
              thrive in all areas of life.
            </>,
            <>
              The Foundation's programs adopt a holistic method, blending faith-based
              guidance with evidence-based practices. We see education as an
              opportunity to build a better future not only for children but also for
              their families and communities.
            </>,
            <>
              With love and compassion, we share the transformative teachings of Jesus
              and offer holistic care for the mind, body, and spirit. Our commitment
              is to nurture children in ways that empower them to grow into
              responsible, confident, and faith-grounded adults.
            </>,
            <>
              Beyond the classroom,{" "}
              <strong>Charlie Parker C. Global Foundation</strong> provides mentorship,
              life-skills training, and emotional support. We believe education should
              prepare children not only for careers but also for meaningful lives
              guided by faith and values.
            </>,
            <>
              By investing in holistic care, we aim to break cycles of poverty and
              vulnerability, giving children the chance to dream, to hope, and to
              achieve their God-given potential. Education becomes more than knowledge
              — it becomes transformation.
            </>,
          ]}
        />

        <TwoColumnContent
          bg="bg-gray-100"
          reverse
          image={Champion}
          imageAlt="Champion Education"
          imageClassName="h-[320px] sm:h-[400px] lg:h-[520px] rounded-xl lg:rounded-2xl"
          roundedImage
          heading="Champion"
          headingClassName="mb-6 text-xl font-bold text-orange-400 sm:text-2xl"
          subheading="Global education that creates lasting impact"
          paragraphs={[
            <>
              <strong>Charlie Parker C. Global Foundation</strong> champions the
              belief that education is the key to unlocking human potential. We are
              dedicated to creating transformative learning experiences that empower
              individuals and communities to thrive. Through innovative programs and
              global partnerships, we make high-quality education accessible to all,
              breaking barriers and building bridges for a brighter future.
            </>,
            <>
              Our mission is to cultivate knowledge, foster creativity, and inspire
              leadership by blending time-honored educational values with cutting-edge
              technology. By doing so, we equip learners with the skills they need to
              adapt, innovate, and make a lasting impact in an ever-changing world.
            </>,
            <>
              At <strong>Charlie Parker C. Global Foundation</strong>, we envision a
              world where education fuels progress, creates opportunities, and
              nurtures compassion. Our commitment is to build a global community where
              every learner has the opportunity to grow, contribute, and succeed —
              shaping a sustainable future for generations to come.
            </>,
          ]}
        />

        <BannerSection
          id="family-strengthening"
          image={Strenght1}
          title="Family Strengthening"
          strokeColor="bg-yellow-500"
        />

        <TwoColumnContent
          bg="bg-gray-300"
          image={Family}
          imageAlt="Empowering Families"
          imageClassName="h-[320px] sm:h-[420px] lg:h-[560px]"
          heading="Empowering Families"
          headingClassName="mb-5 text-3xl italic font-bold text-yellow-600 sm:text-4xl"
          subheading="Equipping Strong & Safe Families with Tools & Resources"
          paragraphs={[
            <>
              At <strong>Charlie Parker C. Global Foundation</strong>, we believe
              that empowering families is the cornerstone of a strong and vibrant
              community. We work hand in hand with local communities, churches, and
              governments to ensure families live free from fear and violence. Our
              mission is to strengthen families by equipping them with essential tools
              and resources that nurture emotional, physical, and spiritual
              well-being.
            </>,
            <>
              We offer tailored, needs-based programs designed to meet the unique
              challenges each family faces. These include parent training, family
              preservation initiatives, educational support, job skills training, and
              life-skill programs. Our goal is to help parents build safe and
              supportive environments while preparing children for success through
              tutoring, therapy, safety education, and mentorship.
            </>,
            <>
              The <strong>Charlie Parker C. Global Foundation’s</strong> programs
              address the root causes of family instability, ensuring lasting
              transformation. Through holistic support, we help parents gain
              confidence and independence, while children are given the foundation to
              grow into capable leaders who will continue the cycle of community
              empowerment. By strengthening families today, we are building stronger,
              safer communities for tomorrow.
            </>,
            <>Together with our partners and donors, we create a ripple effect of positive change — one family at a time.</>,
          ]}
        />

        <TwoColumnContent
          bg="bg-gray-100"
          reverse
          image={Impact}
          imageAlt="Lasting Impact"
          imageClassName="h-[320px] sm:h-[420px] lg:h-[560px]"
          heading="Lasting Impact"
          headingClassName="mb-5 text-3xl italic font-bold text-blue-800 sm:text-4xl"
          subheading="Thriving Children, Families & Communities"
          paragraphs={[
            <>
              <strong>Charlie Parker C. Global Foundation</strong> believes in
              creating a lasting impact by empowering children, families, and
              communities to thrive. Through holistic programs and compassionate
              support, we work to equip parents with the training and resources they
              need to foster healing and strengthen the bonds that unite families and
              communities. Our vision is a world where children flourish, families
              stand strong, and communities grow resilient — free from fear,
              violence, and division.
            </>,
            <>
              We provide tailored support that nurtures emotional, physical, and
              spiritual well-being. Our initiatives focus on preparing children for
              success through life skills, tutoring, therapy, safety programs, and
              mentorship. Simultaneously, we equip parents with parenting skills,
              family preservation strategies, and tools to foster safe, nurturing
              homes. By strengthening the family unit, we sow the seeds for
              communities that flourish long term.
            </>,
            <>
              <strong>Charlie Parker C. Global Foundation</strong> is committed to
              making a tangible difference in the lives of those we serve. Our donors
              play a pivotal role in sustaining this work. Their generosity enables us
              to extend our reach and deepen the impact of our programs. Every
              contribution creates a ripple effect — building ministries that tackle
              the most pressing challenges faced by children, families, and
              communities worldwide.
            </>,
            <>
              Together, we create a legacy of hope and transformation. With
              consistent support, we ensure that families are not only surviving but
              thriving — fostering environments where children grow into strong,
              compassionate leaders who will, in turn, strengthen their communities
              for generations to come.
            </>,
          ]}
        />

        <BannerSection
          id="protective-care"
          image={Protective}
          title="Protective Care"
          strokeColor="bg-purple-600"
        />

        <TwoColumnContent
          bg="bg-gray-300"
          image={Healthier}
          imageAlt="Healthier Homes"
          imageClassName="h-[320px] sm:h-[420px] lg:h-[580px]"
          heading="Healthier Homes"
          headingClassName="mb-5 text-3xl italic font-bold text-purple-800 sm:text-4xl"
          subheading="Safe, Supportive, & Stable Home Environments"
          paragraphs={[
            <>
              At <strong>Charlie Parker C. Global Foundation</strong>, we believe
              that every child deserves a safe, supportive, and stable home. Our
              vision for healthier homes is grounded in providing protective care
              that restores dignity, security, and hope to children and young adults
              who cannot live with their biological families. We strive to ensure
              these young lives grow within environments that nurture their emotional,
              physical, and spiritual well-being.
            </>,
            <>
              Our programs include group homes, foster family placements,
              reunification initiatives, and when no other path to family is
              possible, guardianships and local adoption. These approaches are guided
              by a deep commitment to preserving family connections wherever
              possible, while ensuring safety and stability for every child in our
              care.
            </>,
            <>
              <strong>Charlie Parker C. Global Foundation</strong> goes beyond
              providing shelter. We work to build strong protective systems,
              advocating for improved child protection laws and processes that help
              create healthier communities. Our holistic care includes physical,
              medical, emotional, spiritual, legal, and educational support, along
              with vital skills training and family reintegration services.
            </>,
            <>
              We understand that healing is a journey, and we stand alongside
              children and their caregivers every step of the way. By addressing
              both immediate needs and long-term stability, we aim to empower
              children to thrive, equip families to be safe and resilient, and
              strengthen the fabric of their communities.
            </>,
            <>
              With the generosity of donors, Charlie Parker C. Global Foundation
              can sustain these vital programs and expand their reach. Every gift
              transforms lives — providing not just homes, but lasting hope and the
              foundation for brighter futures. Together, we create communities where
              children flourish and families remain strong for generations to come.
            </>,
          ]}
        />

        <TwoColumnContent
          bg="bg-gray-100"
          reverse
          image={Caring}
          imageAlt="Healing Wounds"
          imageClassName="h-[320px] sm:h-[420px] lg:h-[520px] rounded-xl lg:rounded-2xl"
          roundedImage
          heading="Healing Wounds"
          headingClassName="mb-5 text-3xl italic font-bold text-green-800 sm:text-4xl"
          subheading="Caring for the Children When their Homes Aren’t Safe"
          imageWidth="md:w-1/3"
          textWidth="md:w-1/2 lg:w-7/12"
          paragraphs={[
            <>
              <strong>Charlie Parker C. Global Foundation</strong> believes every
              child deserves a safe and nurturing environment. When a child’s home
              cannot offer safety, we step in with compassionate restorative care.
              Partnering with child protection systems, we ensure that children who
              must be legally removed from their families, or who have no family
              option, receive loving care that helps them heal and grow.
            </>,
            <>
              Our residential homes provide court-ordered protective custody where
              children experience safety, restoration, and discipleship while
              awaiting permanent placement solutions. Through holistic care, we help
              them recover from past wounds and build hope for the future.
            </>,
            <>
              <strong>Charlie Parker C. Global Foundation’s</strong> Protective Care
              programs include reunification initiatives, foster care, adoption,
              independent living support, and additional services designed to restore
              dignity and security to vulnerable children. Our mission is to create a
              safe pathway for healing and to ensure that every child finds a home
              where they can flourish.
            </>,
          ]}
        />

        <BannerSection
          id="justice-advocacy"
          image={Justice1}
          title="Justice & Advocacy"
          strokeColor="bg-purple-600"
        />

        <TwoColumnContent
          bg="bg-gray-300"
          image={Healing}
          imageAlt="Justice and Healing"
          imageClassName="h-[320px] sm:h-[420px] lg:h-[500px] rounded-xl lg:rounded-2xl"
          roundedImage
          heading="About"
          headingClassName="mb-5 text-3xl font-bold text-pink-600 sm:text-4xl"
          subheading="Justice that Leads to True Healing and Restoration"
          imageWidth="md:w-1/3"
          textWidth="md:w-2/3"
          paragraphs={[
            <>
              Charlie Parker C. Global Foundation believes that true justice is
              found in healing and restoration. Through our Justice Advocacy
              programs, we walk alongside victims of abuse, offering compassionate
              care that addresses both immediate needs and long-term restoration.
              Our holistic approach includes legal services, therapy, social
              support, and discipleship — all provided by a trauma-informed team of
              psychologists, lawyers, and social workers dedicated to breaking cycles
              of harm.
            </>,
            <>
              Our mission is not only to guide victims toward healing but also to
              reform systems so they become genuine instruments of justice (Amos
              5:15). Charlie Parker C. Global Foundation partners with legal bodies
              and advocates for protective systems that honor the dignity of victims
              while addressing and healing the wounds of trauma. Through this work,
              we aim to bring justice that truly restores lives and strengthens
              communities.
            </>,
          ]}
        />

        <section className="w-full overflow-hidden">
          <div className="relative min-h-[320px] sm:min-h-[420px] lg:h-screen">
            <video
              src="/Video4.mp4"
              className="h-full w-full object-cover"
              controls
            />
          </div>
        </section>

        <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 md:flex-row lg:gap-10">
            <div className="w-full md:w-1/2">
              <div className="space-y-4">
                <p className="text-base leading-8 text-gray-800">
                  At <strong>Charlie Parker C. Global Foundation</strong>, we work
                  to promote lasting change that prevents child abuse and neglect in
                  the communities we serve. We believe every child, regardless of
                  their circumstances, is cherished by God and deserves safety,
                  dignity, and opportunity. Guided by the call to defend the
                  defenseless (Psalm 82:3), we walk alongside vulnerable children and
                  families, empowering them through family strengthening programs,
                  parenting classes, church partnerships, and community leader
                  collaborations.
                </p>
                <p className="text-base leading-8 text-gray-800">
                  Our justice-driven approach involves close collaboration with local
                  governments, active advocacy for systemic change, victim advocacy
                  and survivor restoration, and pursuing legal action in cases of
                  sexual abuse. Through this holistic process, Charlie Parker C.
                  Global Foundation strives to bring healing, restoration, and lasting
                  hope to children and communities in need.
                </p>
              </div>
            </div>

            <SectionDivider />

            <div className="w-full md:w-1/2">
              <h2 className="mb-4 text-3xl font-bold text-blue-800 sm:text-4xl">
                Methodology
              </h2>
              <h3 className="mb-6 text-xl font-semibold text-gray-800 sm:text-2xl">
                Our process for advancing positive change
              </h3>

              <div className="w-full max-w-xs overflow-hidden rounded-xl shadow-md sm:max-w-sm">
                <img
                  src={Change}
                  alt="Methodology"
                  className="h-48 w-full object-cover sm:h-56"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="flex w-full justify-center bg-gray-100 px-4 py-16">
          <Link to="/donate" className="inline-flex w-full justify-center sm:w-auto">
            <button className="btn btn-primary w-full sm:w-auto">
              Donate Now
            </button>
          </Link>
        </section>

        <section className="overflow-hidden py-8">
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee gap-8 px-6 sm:gap-12 sm:px-8">
              {[...marqueeQuotes, ...marqueeQuotes].map((quote, index) => (
                <div
                  key={`${quote}-${index}`}
                  className="flex-shrink-0 text-lg font-semibold text-[#e8751a] sm:text-xl"
                >
                  {quote}
                  <span className="mx-4 text-4xl font-bold">.</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WhatWeDo;