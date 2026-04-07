import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Logo1 from "../assets/Logo1.jpg";

const footerColumns = [
  {
    title: "Donors",
    links: [
      { label: "Ways to Give", to: "/ways-to-give" },
      { label: "Philanthropic Gifts", to: "/philanthropic-gifts" },
      { label: "Donate in Honor", to: "/donate-in-honor" },
    ],
  },
  {
    title: "Nonprofits",
    links: [
      { label: "Start an Application", to: "/start-an-application" },
      { label: "Why Join?", to: "/why-join" },
      { label: "Handbook", to: "/handbook" },
    ],
  },
  {
    title: "Companies",
    links: [
      { label: "Our Services", to: "/what-we-do" },
      { label: "Our Partners", to: "/our-partners" },
      { label: "Gift Cards", to: "/gift-cards" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "How It Works", to: "/what-we-do" },
      { label: "FAQs", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Library",
    links: [
      { label: "Nonprofit Resources", to: "/nonprofit-resources" },
      { label: "Corporate Giving", to: "/corporate-giving" },
      { label: "Success Stories", to: "/success-stories" },
    ],
  },
];

const policyLinks = [
  { label: "PRIVACY", to: "/privacy-policy" },
  { label: "COOKIES", to: "/cookie-policy" },
  { label: "TERMS", to: "/terms-of-service" },
  { label: "DATA", to: "/data-terms" },
];

const socialLinks = [
  { href: "#", icon: "fab fa-facebook-f", label: "Facebook" },
  { href: "#", icon: "fab fa-instagram", label: "Instagram" },
  { href: "#", icon: "fab fa-linkedin-in", label: "LinkedIn" },
];

const mediaLogos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/The_Washington_Post_logo.svg/512px-The_Washington_Post_logo.svg.png",
    alt: "Washington Post",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/CNN_International_logo.svg/512px-CNN_International_logo.svg.png",
    alt: "CNN",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/NPR_News_logo.svg/512px-NPR_News_logo.svg.png",
    alt: "NPR",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/New_York_Times_logo_variation.jpg/512px-New_York_Times_logo_variation.jpg",
    alt: "NY Times",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#1f3552] text-white px-4 sm:px-6 lg:px-8 py-8 mt-8 sm:py-10">
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-6 lg:gap-10 pb-6 border-b border-white/10">
          <div className="space-y-4">
            <div className="flex items-center gap-4 min-w-0">
              <img
                src={Logo1}
                alt="Charlie Parker C. Global Foundation Logo"
                className="w-12 h-12 object-contain shrink-0"
              />

              <div className="min-w-0">
                <h2 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  Charlie Parker C. Global Foundation
                </h2>
              </div>
            </div>

            <div className="max-w-2xl space-y-1.5 text-sm sm:text-base text-white/78 leading-relaxed">
              <p>Helping donors make a real impact in local communities.</p>
              <p>
                Our foundation empowers the less privileged with resources and opportunities.
              </p>
              <p>We ensure secure giving &amp; impact tracking.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row xl:items-start xl:justify-end gap-4 xl:gap-5">
            <div className="shrink-0">
              <Link to="/blog">
                <button className="btn btn-secondary">Blog</button>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white transition hover:bg-white/10"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Link Columns */}
        <div className="py-6 sm:py-8 border-b border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-base sm:text-lg font-semibold text-[#7fd6d8] mb-3">
                  {col.title}
                </h3>

                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-sm sm:text-base text-white/78 hover:text-white transition"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Media Logos */}
        <div className="py-6 sm:py-8 border-b border-white/10">
          <p className="text-sm sm:text-base font-semibold text-white mb-4">
            Featured In
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {mediaLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex h-11 items-center rounded-xl bg-white px-4"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-5 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col xl:flex-row xl:items-start xl:justify-between gap-5">
          <div className="space-y-1.5 max-w-2xl text-sm sm:text-base text-white/76 leading-relaxed">
            <p>
              &copy; 2001–2025 Charlie Parker C. Global Foundation.{" "}
              <strong className="text-white">Built by Kaycee Tech</strong>.
            </p>
            <p>Registered in Nigeria #159089</p>
            <p>
              Plot 208, Zachariah Maimalari Way, Gateway Plaza, CBD, Abuja, Nigeria.
              UK office: 38 Richmond Road, Cardiff, United Kingdom.{" "}
              <Link to="/contact" className="text-white underline underline-offset-4">
                Contact Us
              </Link>
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 xl:justify-end">
            {policyLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm sm:text-base font-medium text-[#7fd6d8] hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;