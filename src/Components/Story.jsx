import React from "react";
import { FaBalanceScale, FaBrain, FaCross, FaHandHoldingHeart, FaHeart, FaMountain, FaPrayingHands, FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";

import { FaLightbulb, FaRoad, FaHandsHelping, FaLeaf } from "react-icons/fa";
import Problem from "../assets/problem.jpg";
import Neglect from "../assets/neglect.jpg";
import Solutions from "../assets/solutions.jpg";
import Solution from "../assets/solution.jpg";
import Dignity2 from "../assets/dignity2.jpg";
import About1 from "../assets/about1.jpg";
import Issue1 from "../assets/issue1.jpg";

// Carousel Auto-Scrolling
import Photo23 from "../assets/Photo23.jpg";
import Photo24 from "../assets/Photo24.jpg";
import Photo25 from "../assets/Photo25.jpg";
import Photo26 from "../assets/Photo26.jpg";
import Photo27 from "../assets/Photo27.jpg";
import Photo28 from "../assets/Photo28.jpg";
import Photo29 from "../assets/Photo29.jpg";
import Photo30 from "../assets/Photo30.jpg";
import Photo31 from "../assets/Photo31.jpg";

// Carousel Photos Array
const carouselPhotos = [
  Photo23,
  Photo24,
  Photo25,
  Photo26,
  Photo27,
  Photo28,
  Photo29,
  Photo30,
  Photo31,
];

const Story = () => {
  return (
    <section className="px-6 py-16 bg-white min-h-screen">
      {/* MAIN TITLE */}
      <h1 className="italic text-xl font-semibold text-center mb-4 text-black">
  About Charlie Parker C. Global Foundation
</h1>

<div className="space-y-16 max-w-7xl mx-auto">
  {/* SUMMARY */}
  <section className="px-6 py-16 bg-white min-h-screen">
    <div className="flex flex-col lg:flex-row items-start gap-12 max-w-7xl mx-auto">
      
      {/* LEFT SIDE - WRITE UP */}
      <div className="lg:w-2/3 space-y-6">
        {/* Heading */}
        <div className="flex items-center gap-4">
          <FaLightbulb className="text-yellow-400 text-3xl" />
          <h2 className="font-bold text-black text-3xl">Summary</h2>
        </div>

        {/* Paragraphs */}
        <p className="text-lg text-gray-800 leading-relaxed">
          <strong>Charlie Parker C. Global Foundation</strong> was
          established on May 24th, 2021, to uplift the lives of
          underprivileged individuals and communities. From humble
          beginnings, we have grown into a purpose-driven nonprofit devoted
          to restoring hope and dignity to children and families affected by
          hardship and trauma.
        </p>

        <p className="text-lg text-gray-800 leading-relaxed">
          Through compassion, education, and empowerment, we work to build
          resilient communities that thrive physically, emotionally, and
          spiritually. We provide scholarships, educational resources, and
          targeted aid to improve lives in rural and underserved regions.
        </p>

        <p className="text-lg text-gray-800 leading-relaxed">
          Beyond direct assistance, we strive to inspire hope and nurture a
          sense of self-worth among those we serve. We believe sustainable
          change begins when individuals are empowered to take an active
          role in their own growth.
        </p>

        <p className="text-lg text-gray-800 leading-relaxed">
          Every project we undertake is a step toward a future where
          opportunity is accessible to all and where hope thrives for
          generations to come.
        </p>
      </div>

      {/* RIGHT SIDE - IMAGE HOLDER */}
      <div className="lg:w-1/3 relative">
        <img
          src={About1} /* Replace with your image path */
          alt="Summary Visual"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

    </div>
  </section>


        
        
      


        {/* PROBLEM SECTION */}
        <section className="relative w-full h-[500px] mt-8">
          <img
            src={Problem}
            alt="Crisis Response"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <span className="absolute inset-0 bg-purple-600 h-14 w-full skew-x-[-12deg]"></span>
              <h2 className="relative text-5xl font-extrabold text-white px-6">
                The Problem
              </h2>
            </div>
          </div>
        </section>


        {/* THE ISSUE */}
        <section className="w-full bg-gray-200 flex flex-col lg:flex-row items-center py-12 px-6 rounded-lg shadow-lg mt-8">
          {/* Left Side Text */}
          <div className="lg:w-2/3 flex flex-col justify-center space-y-6">
            <h2 className="italic font-bold text-4xl text-blue-800">
              The Issue
            </h2>
            <h3 className="text-2xl font-semibold text-gray-700">
              Child abuse, sexual violence, & neglect
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              Across the world, too many children face neglect, abuse, and
              violence. Many communities lack the tools and resources to provide
              healing, restore families, and build a future filled with hope.
              Sadly, these children remain unseen, unheard, and at risk.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              At{" "}
              <span className="font-semibold text-gray-900">
                Charlie Parker C. Global Foundation
              </span>
              , we are devoted to changing this reality. We believe that every
              child deserves love, safety, and a chance to thrive. Guided by
              compassion and justice, we restore dignity and build stronger,
              resilient communities.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Through holistic programs, trauma-informed care, and empowerment
              initiatives, we work hand-in-hand with families to create lasting
              transformation — ensuring every child can live, grow, and dream
              again.
            </p>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-gray-500 h-170 mx-6"></div>

          {/* Right Side Image */}
          <div className="lg:w-1/3 relative">
            <img
              src={Issue1}
              alt="Lasting Impact"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>
        {/* Our Process Section */}
        <section className="w-full flex flex-col lg:flex-row items-center bg-white-100 py-16 px-8">
          {/* Right Side Image */}
          <div className="lg:w-1/3 relative">
            <img
              src={Solutions}
              alt="Our Process"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-2/3 flex flex-col justify-center space-y-6 lg:pl-12">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-pink-800">Our Process</h2>

            {/* Subheading */}
            <h3 className="text-2xl font-semibold text-gray-700">
              Supporting and Facilitating Solutions
            </h3>

            {/* Write-up */}
            <p className="text-base leading-relaxed text-gray-800">
              At{" "}
              <span className="font-semibold">
                Charlie Parker C. Global Foundation
              </span>
              , we collaborate with communities and leaders to identify the core
              issues that impede children’s well-being, including safety
              concerns and trauma prevention.
            </p>
            <p className="text-base leading-relaxed text-gray-800">
              We designate champions — individuals and groups who share our
              values — to lead initiatives that address these issues
              effectively, creating sustainable change at the grassroots level.
            </p>
            <p className="text-base leading-relaxed text-gray-800">
              Our approach blends compassion with strategic action, offering
              ongoing support and guidance so communities can thrive and
              children can experience lasting hope and transformation.
            </p>
          </div>
        </section>
        {/* Family Strengthening Style Section */}
        <section className="relative w-screen h-[500px] mt-8 -mx-6 ">
          {/* Background Image */}
          <img
            src={Solution}
            alt="Crisis Response"
            className="w-full h-full object-cover"
          />

          {/* Overlay with Text and Paint Stroke */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Paint Stroke */}
              <span className="absolute inset-0 bg-purple-600 h-12 w-full -skew-x-12 transform -rotate-1"></span>

              {/* Text on Top of Stroke */}
              <h2 className="relative text-4xl md:text-5xl font-extrabold text-white px-4">
                Our Solutions
              </h2>
            </div>
          </div>
        </section>
        {/* How We’re Helping Section */}
        <section className="w-full bg-gray-300 py-16 px-8 flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-3xl italic text-gray-800 mb-4">
            How We’re Helping
          </h2>

          {/* Subheading */}
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Comprehensive Programs for Justice and Healing
          </h3>

          {/* Write-up */}
          <p className="max-w-3xl text-base leading-relaxed text-gray-700">
            At{" "}
            <span className="font-semibold">
              Charlie Parker C. Global Foundation
            </span>
            , we walk hand in hand with vulnerable children through schools,
            protective care, justice advocacy, and family strengthening. Our
            mission is to seek justice that heals, empower lives for lasting
            impact, and provide spiritual mentorship and discipleship — all
            guided by a{" "}
            <span className="italic font-semibold">#FaithThatHeals</span>.
          </p>
        </section>
        {/* Prevention Section */}
        <section className="w-full bg-white py-16 px-8 flex flex-col md:flex-row items-start gap-10">
          {/* Left Side */}
          <div className="md:w-1/3 flex flex-col space-y-4">
            <h2 className="text-4xl font-bold text-gray-800">Prevention</h2>
            <h3 className="italic text-2xl text-gray-700">Programs</h3>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-gray-500 h-50 mx-6"></div>

          {/* Right Side */}
          <div className="md:w-2/3 text-gray-700 text-base leading-relaxed">
            <p>
              Preventative programs are intended to reduce trauma and provide
              early intervention.{" "}
              <span className="font-semibold">
                Charlie Parker C. Global Foundation
              </span>{" "}
              seeks to meet the physical, emotional, and spiritual needs of
              vulnerable children, families, and communities.
            </p>
            <p className="mt-4">
              These programs include holistic care, high-quality Christian
              education, nutrition, discipleship and mentorship, and systemic
              change. Our schools offer scholarships and mentoring, and we
              provide technical and vocational training.
            </p>
          </div>
        </section>
        {/* Strengthening Section */}
        <section className="w-full bg-white py-16 px-8 flex flex-col md:flex-row items-start gap-10">
          {/* Left Side */}
          <div className="md:w-1/3 flex flex-col space-y-4">
            <h2 className="text-4xl font-bold text-gray-800">Strengthening</h2>
            <h3 className="italic text-2xl text-gray-700">Programs</h3>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-gray-500 h-50 mx-6"></div>

          {/* Right Side */}
          <div className="md:w-2/3 text-gray-700 text-base leading-relaxed">
            <p>
              Strengthening programs deliver comprehensive support to vulnerable
              children and families, addressing their needs through
              trauma-informed care, specialized training, and essential
              resources.{" "}
              <span className="font-semibold">
                Charlie Parker C. Global Foundation
              </span>{" "}
              employs multidisciplinary teams of Christian professionals —
              including social workers, psychologists, counselors, and legal
              experts — to tackle complex challenges with compassion and
              expertise.
            </p>
            <p className="mt-4">
              We provide spiritual mentorship to refugee women and their
              children, while offering young mothers guidance and tools to
              nurture healthy, thriving families. These programs aim to reduce
              risk factors by enhancing parenting skills, fostering strong
              community bonds, and sharing God’s love to inspire lasting
              transformation.
            </p>
          </div>
        </section>
        {/* Restorative Section */}
        <section className="w-full bg-white py-16 px-8 flex flex-col md:flex-row items-start gap-10">
          {/* Left Side */}
          <div className="md:w-1/3 flex flex-col space-y-4">
            <h2 className="text-4xl font-bold text-gray-800">Restorative</h2>
            <h3 className="italic text-2xl text-gray-700">Programs</h3>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-gray-500 h-50 mx-6"></div>

          {/* Right Side */}
          <div className="md:w-2/3 text-gray-700 text-base leading-relaxed">
            <p>
              Charlie Parker C. Global Foundation supports children who have
              experienced trauma, including abuse, sexual violence, and neglect.
              We provide restorative care through group homes, foster families,
              reunification efforts, and — when other family options are not
              possible — guardianships and local adoption, ensuring every child
              has a safe and loving environment.
            </p>
            <p className="mt-4">
              Our restorative programs focus not only on safety but also on
              healing and spiritual growth. We extend care and support to the
              families of children in protective programs, emphasizing family
              restoration and reunification. Through these efforts, we aim to
              renew hope, restore dignity, and empower children to flourish in
              life.
            </p>
          </div>
        </section>
        {/* Advocacy Section */}
        <section className="w-full bg-white py-16 px-8 flex flex-col md:flex-row items-start gap-10">
          {/* Left Side */}
          <div className="md:w-1/3 flex flex-col space-y-4">
            <h2 className="text-4xl font-bold text-gray-800">Advocacy</h2>
            <h3 className="italic text-2xl text-gray-700">Programs</h3>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-gray-500 h-50 mx-6"></div>

          {/* Right Side */}
          <div className="md:w-2/3 text-gray-700 text-base leading-relaxed">
            <p>
              Advocacy programs promote systemic change to protect children’s
              rights and well-being. Charlie Parker C. Global Foundation engages
              in justice advocacy, legal support, and community education to
              address the root causes of child abuse and neglect.
            </p>
            <p className="mt-4">
              We work with local authorities, policymakers, and community
              leaders to strengthen child protection systems and ensure that
              every child has access to justice and healing. Through these
              efforts, we aim to create a safer environment where children can
              thrive and reach their full potential.
            </p>
          </div>
        </section>
        {/* How We’re Helping Section */}
        <section className="w-full bg-gray-300 py-16 px-8 flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-3xl italic text-gray-800 mb-4">
            Our Core Values
          </h2>

          {/* Subheading */}
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            The Driving Force Behind Our Mission
          </h3>

          {/* Write-up */}
          <p className="max-w-3xl text-base leading-relaxed text-gray-700">
            At <strong>Charlie Parker C. Global Foundation</strong> These values
            inspire and guide our team, giving us a clear purpose in supporting
            the children we serve. They shape every effort we make to ensure
            each child feels valued, healed, and empowered.
          </p>
        </section>

        <section className="bg-white py-20 px-6 min-h-screen -mt-25">
          {/* SECTION TITLE */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* FAITH */}
            <div className="bg-gray-700 text-white p-10 rounded-xl border border-white shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <FaCross className="text-4xl text-pink-500" />
                <h3 className="text-3xl font-extrabold tracking-wide">FAITH</h3>
              </div>
              <p className="text-lg leading-relaxed">
                We live our faith with intention, trusting in God’s unseen
                guidance and the divine purpose behind our mission. Our faith
                strengthens our unity and teamwork, empowering us to persevere
                when faced with challenges. We believe that through prayer and
                obedience, God provides the direction we need to fulfill our
                calling and transform lives.
              </p>
            </div>

            {/* INTEGRITY */}
            <div className="bg-gray-700 text-white p-10 rounded-xl border border-white shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <FaBalanceScale className="text-4xl text-yellow-500" />
                <h3 className="text-3xl font-extrabold tracking-wide">
                  INTEGRITY
                </h3>
              </div>
              <p className="text-lg leading-relaxed">
                We uphold transparency, accountability, and integrity in every
                aspect of our organization — from financial stewardship to
                safeguarding the privacy and dignity of those we serve. We
                believe that trust is earned through consistent actions,
                humility, and a commitment to do what is right even when no one
                is watching.
              </p>
            </div>

            {/* UNDERSTANDING */}
            <div className="bg-gray-700 text-white p-10 rounded-xl border border-white shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <FaBrain className="text-4xl text-green-500" />
                <h3 className="text-3xl font-extrabold tracking-wide">
                  UNDERSTANDING
                </h3>
              </div>
              <p className="text-lg leading-relaxed">
                We engage with our relationships and communities with humility
                and empathy, genuinely listening and striving to understand.
                Understanding others allows us to bridge differences and build
                genuine connections. By seeing the world through the eyes of
                others, we grow in compassion and wisdom.
              </p>
            </div>

            {/* SELF-CONTROL */}
            <div className="bg-gray-700 text-white p-10 rounded-xl border border-white shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <FaUserShield className="text-4xl text-purple-400" />
                <h3 className="text-3xl font-extrabold tracking-wide">
                  SELF-CONTROL
                </h3>
              </div>
              <p className="text-lg leading-relaxed">
                We maintain focus and discipline in our daily lives and work.
                Our commitment to self-control allows us to remain steadfast
                under pressure, make wise decisions, and prioritize our mission
                over personal gain. Through humility and inner strength, we
                magnify our collective impact and uphold our values.
              </p>
            </div>

            {/* PERSEVERANCE */}
            <div className="bg-gray-700 text-white p-10 rounded-xl border border-white shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <FaMountain className="text-4xl text-blue-600" />
                <h3 className="text-3xl font-extrabold tracking-wide">
                  PERSEVERANCE
                </h3>
              </div>
              <p className="text-lg leading-relaxed">
                We endure challenges with faith, patience, and hope. Every
                setback becomes an opportunity for growth and learning. Our
                unwavering spirit keeps us moving forward, knowing that great
                change takes time and resilience. Through perseverance, we
                witness lasting transformation in the lives we touch.
              </p>
            </div>

            {/* DEVOTION TO GOD */}
            <div className="bg-gray-700 text-white p-10 rounded-xl border border-white shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <FaPrayingHands className="text-4xl text-orange-600" />
                <h3 className="text-3xl font-extrabold tracking-wide">
                  DEVOTION TO GOD
                </h3>
              </div>
              <p className="text-lg leading-relaxed">
                We dedicate our work and our lives to glorify God in everything
                we do. Through daily prayer, worship, and reflection, we align
                our hearts with His will. Our devotion inspires excellence,
                compassion, and humility, reminding us that our success is found
                in serving Him faithfully.
              </p>
            </div>

            {/* MUTUAL KINDNESS */}
            <div className="bg-gray-700 text-white p-10 rounded-xl border border-white shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <FaHandHoldingHeart className="text-4xl text-purple-500" />
                <h3 className="text-3xl font-extrabold tracking-wide">
                  MUTUAL KINDNESS
                </h3>
              </div>
              <p className="text-lg leading-relaxed">
                We are called to treat one another with respect, compassion, and
                care. Kindness strengthens our relationships and builds unity
                within our teams and communities. We choose to extend grace,
                forgiveness, and understanding — creating an environment where
                everyone feels valued.
              </p>
            </div>

            {/* LOVE */}
            <div className="bg-gray-700 text-white p-10 rounded-xl border border-white shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <FaHeart className="text-4xl text-red-600" />
                <h3 className="text-3xl font-extrabold tracking-wide">LOVE</h3>
              </div>
              <p className="text-lg leading-relaxed">
                Love is at the heart of all we do. It guides our actions, fuels
                our compassion, and connects us with the people we serve.
                Through love, we reflect God’s nature — showing mercy, patience,
                and joy to all those around us. It is both our foundation and
                our purpose.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-gray-300 min-h-screen flex flex-col items-center text-center -mt-12">
          {/* Heading */}
          <h1 className="text-4xl italic text-green-500 mb-4">Our Identity</h1>

          {/* Subheading */}
          <h2 className="text-xl font-bold text-gray-800 mb-8 max-w-3xl">
            We find our identity in Christ and are committed to sharing His love
            with vulnerable children, families, & communities
          </h2>

          {/* Write-up */}
          <p className="text-lg text-gray-900 max-w-4xl leading-relaxed">
            At <strong>Charlie Parker C. Global Foundation</strong>, we embrace
            our identity in Christ and dedicate ourselves to sharing His love
            with vulnerable children, families, and communities. No matter our
            role within the Foundation, we believe that in Christ we are all
            valued, cherished, and called to serve. By living out these truths,
            we inspire the children and families we serve to discover their
            worth, embrace their identities as beloved children of God, and
            positively impact their communities.
          </p>
        </section>

        <section className="px-6 py-16 bg-white min-h-screen flex flex-col justify-center space-y-20 -mt-8">
          {/* GOD'S CHILDREN */}
          <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto space-y-8 lg:space-y-0 lg:space-x-16">
            <div className="lg:w-1/3 flex justify-start">
              <h1 className="italic text-xl font-semibold text-black">
                God's Children
              </h1>
            </div>
            <div className="lg:w-2/3">
              <p className="text-lg text-gray-700 leading-relaxed">
                God's love is deeply woven into our very being, and we are
                called to mirror that love in our thoughts, words, and deeds At{" "}
                <strong>Charlie Parker C. Global Foundation</strong>, we
                passionately extend this love to vulnerable children and
                families across the globe, bringing justice, healing, and hope.
              </p>
            </div>
          </div>
          <hr className="border-t border-black w-full" />

          {/* CLEAN */}
          <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto space-y-8 lg:space-y-0 lg:space-x-16">
            <div className="lg:w-1/3 flex justify-start">
              <h1 className="italic text-xl font-semibold text-black">Clean</h1>
            </div>
            <div className="lg:w-2/3">
              <p className="text-lg text-gray-700 leading-relaxed">
                Through Christ’s grace, we are made clean, freed from the weight
                of sin, and called to live in holiness. At{" "}
                <strong>Charlie Parker C. Global Foundation</strong>, we guide
                children and families to embrace lives marked by purity,
                healing, and restoration
              </p>
            </div>
          </div>
          <hr className="border-t border-black w-full" />

          {/* CHOSEN FOR A PURPOSE */}
          <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto space-y-8 lg:space-y-0 lg:space-x-16">
            <div className="lg:w-1/3 flex justify-start">
              <h1 className="italic text-xl font-semibold text-black">
                Chosen for a Purpose
              </h1>
            </div>
            <div className="lg:w-2/3">
              <p className="text-lg text-gray-700 leading-relaxed">
                Every life is created with a divine purpose. At{" "}
                <strong>Charlie Parker C. Global Foundation</strong>, we inspire
                children and families to recognize that God has chosen them to
                make a meaningful difference in the world, spreading hope and
                transformation wherever they go.
              </p>
            </div>
          </div>
          <hr className="border-t border-black w-full" />

          {/* POWERFUL */}
          <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto space-y-8 lg:space-y-0 lg:space-x-16">
            <div className="lg:w-1/3 flex justify-start">
              <h1 className="italic text-xl font-semibold text-black">
                Powerful
              </h1>
            </div>
            <div className="lg:w-2/3">
              <p className="text-lg text-gray-700 leading-relaxed">
                We are empowered by God’s Spirit to live boldly.{" "}
                <strong>Charlie Parker C. Global Foundation</strong> teaches
                children and communities that, through God’s strength, they can
                overcome challenges—bringing courage, restoration, and
                transformation to the world around them
              </p>
            </div>
          </div>
          <hr className="border-t border-black w-full" />

          {/* MASTERPIECES */}
          <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto space-y-8 lg:space-y-0 lg:space-x-16">
            <div className="lg:w-1/3 flex justify-start">
              <h1 className="italic text-xl font-semibold text-black">
                Masterpieces
              </h1>
            </div>
            <div className="lg:w-2/3">
              <p className="text-lg text-gray-700 leading-relaxed">
                Handcrafted by God, we are His masterpieces. At{" "}
                <strong>Charlie Parker C. Global Foundation</strong>, we nurture
                children and families to embrace their inherent worth and
                beauty, inspiring them to live lives filled with purpose,
                creativity, and love
              </p>
            </div>
          </div>
          <hr className="border-t border-black w-full" />
        </section>

        <section className="px-6 py-16 bg-gray-200 min-h-screen flex flex-col items-center -mt-8">
          {/* Heading */}
          <h1 className="italic text-xl font-semibold text-gray-800 self-start ml-10 mb-8">
            Statement of Faith
          </h1>

          {/* Content */}
          <div className="max-w-4xl text-center space-y-6">
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
              <li>
                We believe in the one infinite God, eternally existing in three
                persons: Father, Son, and Holy Spirit.
              </li>
              <li>
                We believe in Jesus Christ, the second person of the Trinity,
                who became incarnate by the Holy Spirit, born of the Virgin
                Mary; who truly rose from the dead, ascended into heaven, and
                now intercedes for us at the right hand of the Father.
              </li>
              <li>
                We believe in the Holy Spirit, the third person of the Godhead,
                who is present and active in every true born child of God,
                convicting the world of sin, righteousness, and judgment.
              </li>
              <li>
                We believe that the Scriptures of the Old and New Testaments are
                divinely inspired, infallible, supreme, and the final authority
                in faith and life.
              </li>
              <li>
                We believe that man was created in God’s image, sinned, and
                thereby incurred not only physical death but also spiritual
                death—separation from God; that all human beings are born with a
                sinful nature.
              </li>
              <li>
                We believe that Jesus Christ died for our sins, according to the
                Scriptures; that He, as the substitutionary sacrifice for sin,
                obtained redemption by the shedding of His blood for all who
                believe in Him.
              </li>
              <li>
                We believe in "that blessed hope," the personal and imminent
                return of our Lord and Savior, Jesus Christ.
              </li>
              <li>
                We believe that all who repent of their sins and believe in the
                Lord Jesus Christ are freely justified by the Father, born again
                of the Holy Spirit, and thereby become children of God.
              </li>
              <li>
                We believe in the bodily resurrection of both the just and the
                unjust, the everlasting blessedness of the saved, and the
                everlasting conscious punishment of the lost.
              </li>
            </ul>
          </div>
        </section>

        <section className="px-8 py-20 bg-white min-h-screen">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* LEFT SIDE TEXT */}
            <div className="lg:w-2/3">
              <h3 className="text-orange-500 italic text-3xl font-semibold mb-2">
                Financial Stewardship
              </h3>
              <h1 className="text-5xl font-extrabold leading-tight text-black mb-6">
                DEDICATED TO RESPONSIBLE <br /> STEWARDSHIP OF <br />
                <span className="bg-yellow-300 px-2">RESOURCES</span>
              </h1>

              <p className="text-lg text-gray-700 mb-6">
                We take our responsibility seriously to ensure every dollar you
                donate is spent wisely, efficiently, and in honor of the God we
                serve.
              </p>

              <p className="text-lg text-gray-700">
                Through our commitment to accountability, transparency, and
                efficiency, we have earned and sustained some of Charity
                Navigator’s highest ratings. We invite you to learn more about
                our{" "}
                <Link
                  to="/financial-integrity"
                  className="font-bold text-orange-500"
                >
                  financials
                </Link>{" "}
                to understand how our resources are used.
              </p>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="lg:w-1/3 relative mt-8 lg:mt-20">
              <img
                src={Neglect}
                alt="Financial Stewardship"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="px-8 py-20 bg-white min-h-screen">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* LEFT SIDE IMAGE */}
            <div className="lg:w-1/3 relative lg:mt-[-2rem]">
              <img
                src={Dignity2}
                alt="Safeguarding Policy"
                className="w-full h-full object-cover border-4 border-gray-200 rounded-lg shadow-lg"
              />
            </div>

            {/* RIGHT SIDE TEXT */}
            <div className="lg:w-2/3 -mt-12">
              <h3 className="text-purple-700 italic text-3xl font-semibold mb-2">
                Safeguarding Policy
              </h3>
              <h1 className="text-5xl font-extrabold leading-tight text-black mb-6">
                COMMITMENT TO SAFETY, <br />
                RESPECT, <br />
                <span className="bg-yellow-300 px-2">&amp; DIGNITY</span>
              </h1>

              <p className="text-lg text-gray-700 mb-6">
                <strong>Charlie Parker C. Global Foundation</strong> takes the
                safety and well-being of children very seriously. We believe
                every child deserves a happy, healthy, and secure childhood, and
                that any form of child abuse is an unacceptable violation of
                their dignity and rights.
              </p>

              <p className="text-lg text-gray-700">
                For further information about our comprehensive Safeguarding
                Policy, please download our full{" "}
                <a
                  href="/Safeguarding_Policy.pdf"
                  download
                  className="font-bold text-orange-500 cursor-pointer"
                >
                  Safeguarding Policy
                </a>{" "}
                or{" "}
                <Link
                  to="/contact"
                  className="font-bold text-orange-500 cursor-pointer"
                >
                  contact us here.
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* VIDEO HOLDER WITH CONTROLS */}
        <div className="w-full h-screen relative overflow-hidden border-8 border-gray-400 rounded-lg shadow-lg">
          <video
            id="videoElement"
            src="/Video5.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>

          {/* VIDEO CONTROLS */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-black bg-opacity-50 p-3 rounded-full">
            {/* Play/Pause */}
            <button
              onClick={() => {
                const video = document.getElementById("videoElement");
                video.paused ? video.play() : video.pause();
              }}
              className="text-white text-xl hover:text-yellow-400"
              title="Play/Pause"
            >
              ▶️/⏸️
            </button>

            {/* Mute/Unmute */}
            <button
              onClick={() => {
                const video = document.getElementById("videoElement");
                video.muted = !video.muted;
              }}
              className="text-white text-xl hover:text-yellow-400"
              title="Mute/Unmute"
            >
              🔇/🔊
            </button>

            {/* Volume Up */}
            <button
              onClick={() => {
                const video = document.getElementById("videoElement");
                video.volume = Math.min(video.volume + 0.1, 1);
              }}
              className="text-white text-xl hover:text-yellow-400"
              title="Volume Up"
            >
              🔊+
            </button>
          </div>
        </div>

        {/* DONATE NOW BUTTON */}
        <div className="text-center mt-12 mb-12 relative z-10">
          <Link to="/donate">
            <button className="px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
              Donate Now
            </button>
          </Link>
        </div>
      </div>

      {/* Auto-scrolling Carousel */}
      <section className="overflow-hidden bg-gray-100 py-8 -mt-16 relative z-10 mt-8">
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee">
            {carouselPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 mx-4"
                style={{ minWidth: "20px" }}
              >
                <img
                  src={photo}
                  alt={`Photo ${idx + 19}`}
                  className="h-48 w-full object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
            {carouselPhotos.map((photo, idx) => (
              <div
                key={`dup-${idx}`}
                className="flex-shrink-0 mx-4"
                style={{ minWidth: "20px" }}
              >
                <img
                  src={photo}
                  alt={`Photo ${idx + 19}`}
                  className="h-48 w-full object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tailwind CSS Animation */}
        <style>
          {`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        display: flex;
        animation: marquee 10s linear infinite;
      }
    `}
        </style>
      </section>
    </section>
  );
};

export default Story;
