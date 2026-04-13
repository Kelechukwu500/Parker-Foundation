import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaChevronDown,
  FaArrowRight,
} from "react-icons/fa";
import Fuse from "fuse.js";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo1 from "../assets/Logo1.jpg";

const pageList = [
  { label: "Home", path: "/" },
  { label: "Who We Are", path: "/about-us" },
  { label: "What We Do", path: "/what-we-do" },
  { label: "Nonprofits", path: "/nonprofits" },
  { label: "Disasters", path: "/disasters" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
  { label: "Volunteer", path: "/volunteer" },
  { label: "Gallery", path: "/gallery" },
];

const topThemes = [
  "Education",
  "Gender Equality",
  "Health Care",
  "Climate Action",
  "Food Security",
  "Physical Health",
];

const topLocations = [
  "Nigeria",
  "Africa",
  "United Kingdom",
  "United States",
  "Global",
];



const projectLinks = [
  { label: "Top Funded", path: "/top-funded-projects" },
  { label: "Newest Projects", path: "/newest-projects" },
  { label: "Closest to Goal", path: "/projects-closest-goal" },
  { label: "Climate Crises", path: "/climate-crises" },
  { label: "Most Effective", path: "/most-effective" },
  { label: "Wellness", path: "/wellness" },
];

const mobileNavLinks = [
  { label: "Home", path: "/" },
  { label: "Who We Are", path: "/about-us" },
  { label: "What We Do", path: "/what-we-do" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
  { label: "Volunteer", path: "/volunteer" },
  { label: "Gallery", path: "/gallery" },
];

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "es", label: "ES" },
  { code: "de", label: "DE" },
  { code: "nl", label: "NL" },
  { code: "ar", label: "AR" },
  { code: "pt", label: "PT" },
  { code: "zh", label: "ZH" },
  { code: "it", label: "IT" },
  { code: "hi", label: "HI" },
  { code: "ko", label: "KO" },
  { code: "ja", label: "JA" },
];

const fuse = new Fuse(pageList, {
  keys: ["label"],
  includeScore: true,
  threshold: 0.4,
});

const Navbar = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileDonateOpen, setMobileDonateOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [headerVisible, setHeaderVisible] = useState(true);

  const donateRef = useRef(null);
  const langRef = useRef(null);
  const lastScrollY = useRef(0);

  const currentLanguage = useMemo(() => {
    return (i18n.resolvedLanguage || i18n.language || "en")
      .slice(0, 2)
      .toUpperCase();
  }, [i18n.language, i18n.resolvedLanguage]);

  useEffect(() => {
    const handler = (e) => {
      if (donateRef.current && !donateRef.current.contains(e.target)) {
        setDonateOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDonateOpen(false);
    setLangOpen(false);
    setMobileDonateOpen(false);
    setMobileLangOpen(false);
    setSuggestions([]);
    setQuery("");
  }, [location.pathname]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("siteLanguage");
    if (savedLanguage && savedLanguage !== i18n.resolvedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  useEffect(() => {
    const activeLanguage = (
      i18n.resolvedLanguage ||
      i18n.language ||
      "en"
    ).slice(0, 2);
    document.documentElement.lang = activeLanguage;
    document.documentElement.dir = activeLanguage === "ar" ? "rtl" : "ltr";
    localStorage.setItem("siteLanguage", activeLanguage);
  }, [i18n.language, i18n.resolvedLanguage]);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 24) {
        setHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = (e) => {
    const text = e.target.value;
    setQuery(text);

    if (text.trim().length > 0) {
      const results = fuse.search(text).map((r) => r.item);
      setSuggestions(results.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (item) => {
    setQuery("");
    setSuggestions([]);
    setMobileOpen(false);
    navigate(item.path);
  };

  const changeLanguage = async (code) => {
    await i18n.changeLanguage(code);
    document.documentElement.lang = code;
    document.documentElement.dir = code === "ar" ? "rtl" : "ltr";
    localStorage.setItem("siteLanguage", code);
    setLangOpen(false);
    setMobileLangOpen(false);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDonateOpen(false);
    setMobileLangOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] w-full border-b border-black/5 bg-[#DBE9EA] transition-transform duration-300 ${
          headerVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="min-h-[84px] lg:min-h-[92px] flex items-center justify-between gap-4">
            {/* Logo + Name */}
            <Link
              to="/"
              className="flex items-center gap-3 min-w-0"
              onClick={closeMobile}
            >
              <img
                src={Logo1}
                alt="Charlie Parker C. Global Foundation"
                className="h-12 w-12 object-contain flex-shrink-0"
              />
              <span className="text-sm sm:text-base lg:text-xl font-bold text-black leading-tight">
                Charlie Parker C. <br /> Global Foundation
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-7 font-medium text-[16px] xl:text-[17px] text-black">
              <li>
                <Link to="/" className="hover:text-[#1f3552] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-[#1f3552] transition"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  to="/what-we-do"
                  className="hover:text-[#1f3552] transition"
                >
                  What We Do
                </Link>
              </li>
            </ul>

            {/* Desktop Right Controls */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Donate Dropdown */}
              <div className="relative" ref={donateRef}>
                <button
                  onClick={() => setDonateOpen((v) => !v)}
                  className="btn btn-primary !min-h-[48px] !px-5 !text-[14px] flex items-center gap-2"
                >
                  DONATE TO PROJECTS <FaChevronDown size={11} />
                </button>

                {donateOpen && (
                  <div className="absolute right-0 top-full mt-3 w-[520px] max-w-[95vw] rounded-[24px] border border-black/8 bg-white p-6 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <p className="font-semibold text-[#1f3552] mb-3 text-sm uppercase tracking-[0.08em]">
                          Projects
                        </p>
                        <div className="space-y-1.5">
                          {projectLinks.map((project) => (
                            <Link
                              key={project.path}
                              to={project.path}
                              onClick={() => setDonateOpen(false)}
                              className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-[#1f3552] transition hover:bg-slate-50"
                            >
                              <span>{project.label}</span>
                              <FaArrowRight size={12} />
                            </Link>
                          ))}
                        </div>
                      </div>

                      <p className="font-semibold text-[#1f3552] mb-3 text-sm uppercase tracking-[0.08em]">
                        Top Themes
                      </p>
                      <div className="space-y-2">
                        {topThemes.map((theme) => (
                          <div
                            key={theme}
                            className="rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-600 cursor-default"
                          >
                            {theme}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 pt-5 border-t border-slate-200">
                      <Link
                        to="/browse-all-projects"
                        onClick={() => setDonateOpen(false)}
                      >
                        <button className="btn btn-primary !w-full">
                          BROWSE ALL PROJECTS
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Search icon */}
              <Link
                to="/search-page"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#1f3552] hover:bg-white/55 transition"
              >
                <FaSearch size={18} />
              </Link>

              {/* Language Dropdown */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen((v) => !v)}
                  className="btn btn-secondary !min-h-[48px] !px-4 !text-[14px] flex items-center gap-2"
                >
                  {currentLanguage} <FaChevronDown size={11} />
                </button>

                {langOpen && (
                  <ul className="absolute right-0 top-full mt-2 min-w-[92px] rounded-2xl border border-slate-200 bg-white p-2 max-h-72 overflow-y-auto">
                    {LANGUAGES.map((lang) => (
                      <li key={lang.code}>
                        <button
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full rounded-xl px-3 py-2 text-sm text-left transition ${
                            currentLanguage.toLowerCase() === lang.code
                              ? "bg-[#1f3552]/[0.07] text-[#1f3552] font-semibold"
                              : "text-gray-700 hover:bg-slate-50"
                          }`}
                        >
                          {lang.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                to="/search-page"
                onClick={closeMobile}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#1f3552] hover:bg-white/55 transition"
              >
                <FaSearch size={18} />
              </Link>

              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#1f3552] hover:bg-white/55 transition"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-black/5 bg-white px-4 py-4 space-y-4 rounded-b-[24px]">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search pages…"
                  value={query}
                  onChange={handleSearch}
                  className="w-full min-h-[52px] pl-11 pr-4 border border-slate-200 rounded-2xl text-base text-black focus:outline-none focus:border-[#1f3552]/30 focus:ring-4 focus:ring-[#1f3552]/10"
                />
                <FaSearch
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={15}
                />
                {suggestions.length > 0 && (
                  <ul className="absolute z-50 bg-white w-full mt-2 rounded-2xl border border-slate-200 p-2">
                    {suggestions.map((s, i) => (
                      <li key={i}>
                        <button
                          onClick={() => handleSuggestionClick(s)}
                          className="w-full px-3 py-2.5 rounded-xl text-left text-sm text-gray-800 hover:bg-slate-50"
                        >
                          {s.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Mobile Nav Links */}
              <ul className="space-y-1">
                {mobileNavLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={closeMobile}
                      className="block px-3 py-2.5 rounded-xl text-base font-medium text-gray-800 hover:bg-slate-50 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Donate Accordion */}
              <div className="space-y-2">
                <button
                  onClick={() => setMobileDonateOpen((v) => !v)}
                  className="btn btn-primary !w-full !justify-between !min-h-[52px] !text-[14px]"
                >
                  DONATE TO PROJECTS
                  <FaChevronDown
                    size={12}
                    className={`transition-transform ${mobileDonateOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileDonateOpen && (
                  <div className="rounded-2xl border border-slate-200 p-4 space-y-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#1f3552] mb-2">
                        Top Themes
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {topThemes.map((theme) => (
                          <span
                            key={theme}
                            className="rounded-full bg-slate-50 px-3 py-1.5 text-sm text-slate-600"
                          >
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#1f3552] mb-2">
                        Top Locations
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {topLocations.map((locationName) => (
                          <span
                            key={locationName}
                            className="rounded-full bg-slate-50 px-3 py-1.5 text-sm text-slate-600"
                          >
                            {locationName}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#1f3552] mb-2">
                        Projects
                      </p>
                      <div className="space-y-1">
                        {projectLinks.map((project) => (
                          <Link
                            key={project.path}
                            to={project.path}
                            onClick={closeMobile}
                            className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-[#1f3552] hover:bg-slate-50 transition"
                          >
                            <span>{project.label}</span>
                            <FaArrowRight size={12} />
                          </Link>
                        ))}

                        <Link
                          to="/browse-all-projects"
                          onClick={closeMobile}
                          className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-[#1f3552] hover:bg-slate-50 transition"
                        >
                          <span>Browse All Projects</span>
                          <FaArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Language */}
              <div className="space-y-2">
                <button
                  onClick={() => setMobileLangOpen((v) => !v)}
                  className="btn btn-secondary !w-full !justify-between !min-h-[52px] !text-[14px]"
                >
                  Language: {currentLanguage}
                  <FaChevronDown
                    size={12}
                    className={`transition-transform ${mobileLangOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileLangOpen && (
                  <div className="grid grid-cols-4 gap-2">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code);
                          closeMobile();
                        }}
                        className={`rounded-xl border px-2 py-2 text-sm transition ${
                          currentLanguage.toLowerCase() === lang.code
                            ? "border-[#1f3552]/20 bg-[#1f3552]/[0.06] text-[#1f3552] font-semibold"
                            : "border-slate-200 text-gray-700 hover:bg-slate-50"
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="h-[84px] lg:h-[92px]" />
    </>
  );
};

export default Navbar;
