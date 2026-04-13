import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "../Components/ui/card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Photo18 from "../assets/Photo18.jpg";
import Crises3 from "../assets/Crises3.jpg";
import Nonprofit2 from "../assets/Nonprofit2.jpg";
import Nonprofit from "../assets/Nonprofit.jpg";
import Unify from "../assets/Unify.jpg";
import Haven from "../assets/Haven.jpg";
import Isabela from "../assets/Isabela.jpg";
import Champions00 from "../assets/Champions00.jpg";
import Newsletter from "../Components/Newsletter";
import Photo34 from "../assets/Photo34.jpg";

import Photo1 from "../assets/Photo1.jpg";
import Photo2 from "../assets/Photo2.jpg";
import Photo3 from "../assets/Photo3.jpg";
import Photo4 from "../assets/Photo4.jpg";
import Photo5 from "../assets/Photo5.jpg";
import Photo6 from "../assets/Photo6.jpg";
import Photo7 from "../assets/Photo7.jpg";
import Photo8 from "../assets/Photo8.jpg";
import Photo9 from "../assets/Photo9.jpg";
import Photo10 from "../assets/Photo10.jpg";
import Photo11 from "../assets/Photo11.jpg";
import Photo12 from "../assets/Photo12.jpg";
import Photo13 from "../assets/Photo13.jpg";
import Photo14 from "../assets/Photo14.jpg";
import Photo15 from "../assets/Photo15.jpg";
import Photo16 from "../assets/Photo16.jpg";
import Photo17 from "../assets/Photo17.jpg";

import Photo23 from "../assets/Photo23.jpg";
import Photo24 from "../assets/Photo24.jpg";
import Photo25 from "../assets/Photo25.jpg";
import Photo26 from "../assets/Photo26.jpg";
import Photo27 from "../assets/Photo27.jpg";
import Photo28 from "../assets/Photo28.jpg";
import Photo29 from "../assets/Photo29.jpg";
import Photo30 from "../assets/Photo30.jpg";
import Photo31 from "../assets/Photo31.jpg";

import { goToDonatePage } from "../lib/donate";


export default function Hero() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  const photos = [
    Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8,
    Photo9, Photo10, Photo11, Photo12, Photo13, Photo14, Photo15, Photo16, Photo17,
  ];

  const carouselPhotos = [
    Photo23, Photo24, Photo25, Photo26, Photo27, Photo28, Photo29, Photo30, Photo31,
  ];

  const quotes = [
    "Giving is not just about making a donation, it's about making a difference.",
    "Charity begins with compassion, and compassion transforms communities.",
    "True philanthropy uplifts lives, restores hope, and inspires change.",
  ];

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 768) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth < 1280) {
        setVisibleCount(4);
      } else {
        setVisibleCount(5);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxStartIndex = useMemo(
    () => Math.max(photos.length - visibleCount, 0),
    [photos.length, visibleCount]
  );

  useEffect(() => {
    setStartIndex((prev) => Math.min(prev, maxStartIndex));
  }, [maxStartIndex]);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxStartIndex));
  };

  const primarySectionClass =
    "rounded-[28px] border border-black/5 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.06)]";
  const imageClass =
    "w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]";
  const surfaceClass =
    "rounded-[24px] border border-black/5 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]";

  return (
    <div className="w-full overflow-x-hidden bg-[linear-gradient(to_bottom,#f8fafc_0%,#ffffff_20%,#f8fafc_100%)] text-gray-900">
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

      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 space-y-8 sm:space-y-10">
        {/* ── Hero Banner ── */}
        <section
          className="relative overflow-hidden rounded-[32px] border border-white/20 shadow-[0_18px_60px_rgba(15,23,42,0.18)]"
          style={{ background: "linear-gradient(135deg, #1F4E68 0%, #245d7c 55%, #1F4E68 100%)" }}
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-200 blur-3xl" />
          </div>

          <div className="relative w-full max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 py-10 sm:py-14 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 text-white">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                Equip Students with School Essentials
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-7 max-w-2xl mx-auto lg:mx-0 text-white/90 leading-relaxed">
                Help 200+ children access essential school supplies. Your contribution creates lasting change.
              </p>
              <Link to="/donate">
                <button className="btn btn-secondary">
                  DONATE NOW
                </button>
              </Link>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-white/30 blur-2xl scale-105" />
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[25rem] lg:h-[25rem] rounded-full overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.25)] border-[10px] border-white/95">
                  <img
                    src={Photo34}
                    alt="Hero visual"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Media Section ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <Card className={`${primarySectionClass} overflow-hidden group`}>
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <video
                  className="w-full h-64 sm:h-80 lg:h-[24rem] object-cover bg-black"
                  controls
                  src="/Video2.mp4"
                />
              </div>
            </CardContent>
          </Card>

          <Card className={`${primarySectionClass} overflow-hidden group`}>
            <CardContent className="p-0">
              <div className="relative h-64 sm:h-80 lg:h-[24rem] overflow-hidden">
                <img src={Photo18} alt="Classroom" className={imageClass} />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Manual Photo Carousel ── */}
        <section className={`${surfaceClass} p-4 sm:p-5 lg:p-6`}>
          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 tracking-tight">
                  Photo Carousel
                </h2>
                <p className="text-base text-gray-500 mt-1">
                  Browse foundation moments in a smoother and more responsive gallery experience.
                </p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  onClick={handlePrev}
                  disabled={startIndex === 0}
                  aria-label="Previous photos"
                  className="btn btn-secondary !min-h-[48px] !h-[48px] !w-[48px] !p-0 disabled:opacity-40"
                >
                  <FaArrowLeft className="mx-auto" size={16} />
                </button>
                <button
                  onClick={handleNext}
                  disabled={startIndex >= maxStartIndex}
                  aria-label="Next photos"
                  className="btn btn-secondary !min-h-[48px] !h-[48px] !w-[48px] !p-0 disabled:opacity-40"
                >
                  <FaArrowRight className="mx-auto" size={16} />
                </button>
              </div>
            </div>

            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {photos
                .slice(startIndex, startIndex + visibleCount)
                .map((photo, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-[22px] border border-black/5 bg-gray-100 shadow-[0_12px_25px_rgba(15,23,42,0.08)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none" />
                    <div className="h-64 sm:h-64 md:h-56 lg:h-64 xl:h-72 overflow-hidden">
                      <img
                        src={photo}
                        alt={`Photo ${startIndex + idx + 1}`}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="absolute bottom-3 left-3 z-20 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-sm font-semibold text-gray-700 shadow-sm">
                      Photo {startIndex + idx + 1}
                    </div>
                  </div>
                ))}
            </div>

            <div className="flex items-center justify-center gap-2 pt-1">
              {Array.from({ length: maxStartIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setStartIndex(idx)}
                  aria-label={`Go to photo set ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === startIndex ? "w-8 bg-gray-800" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Quick Links Cards ── */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          <Link
            to="/story"
            className="group block h-full rounded-[24px] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1f3552]/15 focus-visible:ring-offset-2"
            aria-label="Go to Story page"
          >
            <Card
              className="h-full rounded-[24px] border-0 shadow-[0_10px_28px_rgba(15,23,42,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)] cursor-pointer"
              style={{ background: "linear-gradient(135deg, #07A3B2 0%, #D9ECC7 100%)" }}
            >
              <CardContent className="p-5 sm:p-6 h-full flex flex-col justify-between">
                <div>
                  <span className="font-extrabold text-black mb-2 block text-lg sm:text-xl">
                    Story
                  </span>
                  <p className="text-base text-gray-800 leading-relaxed">
                    Discover how your contributions impact lives.
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-end">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#1f3552] shadow-sm transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-md">
                    <FaArrowRight size={14} />
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link
            to="/reports"
            className="group block h-full rounded-[24px] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1f3552]/15 focus-visible:ring-offset-2"
            aria-label="Go to Reports page"
          >
            <Card className="h-full rounded-[24px] border border-black/5 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)] cursor-pointer">
              <CardContent className="p-5 sm:p-6 h-full flex flex-col justify-between">
                <div>
                  <span className="font-extrabold text-black mb-2 block text-lg sm:text-xl">
                    Reports
                  </span>
                  <p className="text-base text-gray-500 leading-relaxed">
                    Transparent and detailed reports showcasing how donations are used.
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-end">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#1f3552]/10 bg-[#f8fafc] text-[#1f3552] shadow-sm transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-md">
                    <FaArrowRight size={14} />
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link
            to="/gallery"
            className="group block h-full rounded-[24px] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1f3552]/15 focus-visible:ring-offset-2"
            aria-label="Go to Gallery page"
          >
            <Card
              className="h-full rounded-[24px] border-0 shadow-[0_10px_28px_rgba(15,23,42,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)] cursor-pointer"
              style={{ background: "linear-gradient(135deg, #07A3B2 0%, #D9ECC7 100%)" }}
            >
              <CardContent className="p-5 sm:p-6 h-full flex flex-col justify-between">
                <div>
                  <span className="font-extrabold text-black mb-2 block text-lg sm:text-xl">
                    Gallery
                  </span>
                  <p className="text-base text-gray-800 leading-relaxed">
                    Browse a gallery of moments from our foundation&apos;s activities.
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-end">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#1f3552] shadow-sm transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-md">
                    <FaArrowRight size={14} />
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        </section>
      </div>

      {/* ── Disaster Response Section ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col md:flex-row items-center justify-between px-5 sm:px-6 lg:px-8 py-10 md:py-12 bg-gray-100 rounded-[30px] border border-black/5 shadow-[0_10px_35px_rgba(15,23,42,0.06)] w-full gap-8 lg:gap-12">
            <div className="w-full md:w-1/2 md:pr-4 lg:pr-8 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-blue-800 tracking-tight">
                Disaster Response
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base lg:text-lg">
                Charlie Parker C. Global Foundation is committed to providing immediate and effective disaster response whenever crisis strikes. Our mission is to stand with affected families and communities in their most difficult moments.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-base lg:text-lg">
                We deliver essential supplies, emergency food, clean water, and medical assistance to disaster zones. Beyond emergency relief, our foundation works with local partners to restore livelihoods, rebuild infrastructure, and strengthen community resilience against future crises.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-base lg:text-lg">
                Every effort is made to not only meet immediate needs but also to ensure long-term recovery and healing. Together, we can bring hope, relief, and restoration to communities devastated by natural disasters and conflicts.
              </p>
              <Link to="/disasters">
                <button className="btn btn-primary">
                  Learn More
                </button>
              </Link>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <div className="group w-full max-w-xl overflow-hidden rounded-[24px] shadow-[0_16px_36px_rgba(15,23,42,0.12)]">
                <img
                  src={Crises3}
                  alt="Disaster Response"
                  className="rounded-[24px] w-full max-w-lg md:max-w-none h-[18rem] sm:h-[22rem] lg:h-[28rem] object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nonprofits Support Section ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col md:flex-row items-center justify-between px-5 sm:px-6 lg:px-8 py-10 md:py-12 bg-gray-100 rounded-[30px] border border-black/5 shadow-[0_10px_35px_rgba(15,23,42,0.06)] w-full gap-8 lg:gap-12">
            <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
              <div className="group w-full max-w-xl overflow-hidden rounded-[24px] shadow-[0_16px_36px_rgba(15,23,42,0.12)]">
                <img
                  src={Nonprofit2}
                  alt="Nonprofits Support"
                  className="rounded-[24px] w-full max-w-lg md:max-w-none h-[18rem] sm:h-[22rem] lg:h-[28rem] object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-4 lg:pl-8 text-left order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-purple-500 tracking-tight">
                Nonprofits Support
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base lg:text-lg">
                <strong>Charlie Parker C. Global Foundation</strong> proudly partners with nonprofits across the globe to amplify their impact and bring sustainable change to vulnerable communities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-base lg:text-lg">
                Our nonprofit support initiatives include capacity building, fundraising assistance, training programs, and the provision of essential tools to strengthen local organizations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-base lg:text-lg">
                Through these partnerships, we promote transparency, accountability, and shared learning — building a stronger foundation for tomorrow.
              </p>
              <Link to="/nonprofits">
                <button className="btn btn-primary">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Auto-scroll Carousel ── */}
      <section className="overflow-hidden py-6 sm:py-8">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="relative w-full overflow-hidden rounded-[28px] border border-black/5 bg-gray-100 py-5 sm:py-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-16 bg-gradient-to-r from-gray-100 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-16 bg-gradient-to-l from-gray-100 to-transparent" />

            <div className="group overflow-hidden">
              <div
                className="flex w-max gap-4 sm:gap-6 will-change-transform group-hover:[animation-play-state:paused]"
                style={{ animation: "marquee-loop 36s linear infinite" }}
              >
                {[...carouselPhotos, ...carouselPhotos].map((photo, idx) => (
                  <div
                    key={idx}
                    className="group/item flex-shrink-0 w-[220px] sm:w-[240px] lg:w-[260px]"
                  >
                    <div className="overflow-hidden rounded-[20px] shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
                      <img
                        src={photo}
                        alt={`Carousel ${idx}`}
                        className="h-48 w-full object-cover transition duration-500 group-hover/item:scale-[1.04]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Volunteer Section ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col md:flex-row items-center justify-between px-5 sm:px-6 lg:px-8 py-10 md:py-12 bg-gray-100 rounded-[30px] border border-black/5 shadow-[0_10px_35px_rgba(15,23,42,0.06)] gap-8 lg:gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="group w-full max-w-lg overflow-hidden rounded-[24px] shadow-[0_16px_36px_rgba(15,23,42,0.12)]">
                <img
                  src={Nonprofit}
                  alt="Volunteer"
                  className="w-full h-[18rem] sm:h-[22rem] lg:h-[26rem] object-cover rounded-[24px] transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-4 lg:pl-8 text-gray-800">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-green-500 font-bold mb-4 tracking-tight">
                Become a Volunteer
              </h2>
              <p className="mb-6 leading-relaxed text-base lg:text-lg">
                Volunteering is at the heart of everything we do. By giving your time, energy, and passion, you become part of a movement that brings hope and positive change to communities in need. Your commitment doesn't just impact others — it enriches your own life with purpose and fulfillment.
              </p>
              <Link to="/volunteer">
                <button className="btn btn-primary">
                  Join Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nigeria Welcome Section ── */}
      <section className="bg-white py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6 rounded-[30px] border border-black/5 bg-white px-5 sm:px-8 lg:px-12 py-10 sm:py-12 shadow-[0_12px_36px_rgba(15,23,42,0.06)]">
          <h2 className="italic text-yellow-500 text-base sm:text-lg md:text-xl">
            Barka da zuwa Najeriya, Nnọọ na Naịjịrịa, Ẹ ku abo sí Nàìjíríà
          </h2>
          <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl text-gray-900 leading-tight tracking-tight">
            Fostering healing and championing justice for children, families, and communities throughout Nigeria.
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            Charlie Parker C. Global Foundation embraces Nigeria&apos;s rich culture, abundant natural wonders, and welcoming spirit. Through our restorative education, family-strengthening initiatives, protective care, and advocacy for justice, we provide the support and tools children need to heal, grow, and thrive.
          </p>
          <div>
            <button className="btn btn-primary mt-4"
             onClick={(e) =>
    goToDonatePage(e, {
      source: "reports",
      campaign: "education",
      label: "Help a Child Today",
    })
  }>
              Give Now
            </button>
          </div>
        </div>
      </section>

      {/* ── Video Section ── */}
      <div className="px-4 sm:px-6 lg:px-8 my-6 sm:my-8">
        <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[28px] border border-black/5 bg-white p-2 sm:p-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
          <video
            src="/Video6.mp4"
            controls
            className="w-full rounded-[22px] object-cover bg-black"
            style={{ maxHeight: "560px" }}
          />
        </div>
      </div>

      {/* ── Reunification Section ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 py-10 sm:py-14 px-5 sm:px-6 lg:px-8 bg-gray-200 rounded-[30px] border border-black/5 shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
            <div className="w-full lg:w-1/3">
              <div className="group overflow-hidden rounded-[24px] shadow-[0_16px_36px_rgba(15,23,42,0.12)]">
                <img
                  src={Unify}
                  alt="Reunification Story"
                  className="w-full h-64 sm:h-80 lg:h-[32rem] object-cover rounded-[24px] transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="w-full lg:w-2/3 space-y-4 text-gray-700">
              <h3 className="italic text-xl sm:text-2xl lg:text-3xl text-purple-600">
                Reunification
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Bringing families back together in love and hope
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-800">
                Jimoh, an 8-year-old boy, had been separated from his family for several months. During his time with{" "}
                <strong>Charlie Parker C. Global Foundation</strong>, he received nurturing care, guidance, and support. After several months, he was joyfully reunited with his family and enrolled in a local school, beginning a new chapter filled with hope and stability.{" "}
                <span className="font-semibold text-yellow-600">You can be a part of more transformative stories like Jimoh&apos;s.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Safe Haven Banner ── */}
      <section className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-[30px] shadow-[0_18px_50px_rgba(15,23,42,0.16)]">
            <img src={Haven} alt="Safe Haven" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative px-4">
                <span className="absolute inset-0 bg-purple-500 h-12 sm:h-14 w-full transform -rotate-1 rounded-lg shadow-lg"></span>
                <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold text-white px-4 tracking-tight">
                  Safe Haven
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Support Safe Havens ── */}
      <section className="bg-transparent py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6 rounded-[30px] bg-gray-100 border border-black/5 px-5 sm:px-8 md:px-12 py-10 sm:py-14 shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
          <h3 className="italic text-orange-500 text-2xl sm:text-3xl">Support Safe Havens</h3>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 leading-tight tracking-tight">
            Through our Safe Haven programs, we strive for every child to grow up in a safe and loving family
          </h2>
          <p className="text-gray-700 text-base leading-relaxed max-w-4xl mx-auto">
            "Safe Havens" are Charlie Parker C. Global Foundation&apos;s worldwide programs designed to strengthen families, provide protective care through residential homes and foster care, and advocate for justice. Your support plays a crucial role in the lives of vulnerable children, families, and communities.
          </p>
          <Link to="/donate">
            <button className="btn btn-primary mt-6">
              GIVE TO SAFE HAVEN
            </button>
          </Link>
        </div>
      </section>

      {/* ── Isabella's Story ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 py-10 sm:py-14 px-5 sm:px-6 lg:px-8 bg-gray-50 rounded-[30px] border border-black/5 shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
            <div className="w-full lg:w-2/3 space-y-4 text-gray-700">
              <h3 className="italic text-3xl sm:text-4xl text-blue-800">Powerful progress</h3>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Isabella&apos;s story
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Meet Isabella, a young girl at <strong>Charlie Parker C. Global Foundation</strong> Academy in Nigeria! Isabella joined our school at the age of 8, unable to read or write. Today, Isabella is progressing to her final primary grade with determination, bringing her closer to her dream of becoming a medical doctor.
              </p>
              <Link to ="/donate">
              <button className="btn btn-primary mt-4">
                GIVE NOW
              </button>
              </Link>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="group overflow-hidden rounded-[24px] shadow-[0_16px_36px_rgba(15,23,42,0.12)]">
                <img
                  src={Isabela}
                  alt="Isabella's Story"
                  className="w-full h-64 sm:h-80 lg:h-[28rem] object-cover rounded-[24px] transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Student Champion Banner ── */}
      <section className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-[30px] shadow-[0_18px_50px_rgba(15,23,42,0.16)]">
            <img src={Champions00} alt="Student Champion" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative px-4">
                <span className="absolute inset-0 bg-yellow-500 h-12 sm:h-14 w-full transform -rotate-1 rounded-lg shadow-lg"></span>
                <h2 className="relative text-2xl sm:text-4xl md:text-5xl font-extrabold text-white px-4 tracking-tight">
                  STUDENT CHAMPION
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Support Students ── */}
      <section className="bg-transparent py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6 rounded-[30px] bg-gray-200 border border-black/5 px-5 sm:px-8 md:px-12 py-10 sm:py-14 shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
          <h3 className="italic text-gray-700 text-2xl sm:text-3xl">Support students</h3>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 leading-tight tracking-tight">
            <strong>Charlie Parker C. Global Foundation</strong> provides a comprehensive, holistic care approach to nurture and support students in every community.
          </h2>
          <p className="text-gray-700 text-base leading-relaxed max-w-4xl mx-auto">
            Your support empowers students to enhance their academic, social, spiritual, and physical growth, while providing the educational tools they need to actively participate both inside and outside the classroom.
          </p>
          <Link to="/student-champion">
            <button className="btn btn-primary mt-6">
              BECOME A STUDENT CHAMPION
            </button>
          </Link>
        </div>
      </section>

      <Newsletter />

      {/* ── Quotes Marquee ── */}
      <section className="overflow-hidden py-8  mt-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative w-full overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-16" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-16" />

            <div className="group overflow-hidden">
              <div
                className="flex w-max items-center gap-12 will-change-transform group-hover:[animation-play-state:paused]"
                style={{ animation: "marquee-loop 34s linear infinite" }}
              >
                {[...quotes, ...quotes].map((quote, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 text-base sm:text-xl font-semibold text-[#e8751a] whitespace-nowrap"
                  >
                    {quote} <span className="text-3xl font-bold mx-3">·</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}