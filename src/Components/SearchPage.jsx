import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";

const rawProjects = [
  { name: "Top Funded Projects", path: "/top-funded-projects" },
  { name: "Newest Projects", path: "/newest-projects" },
  { name: "Projects Closest to Goal", path: "/projects-closest-goal" },
  { name: "Climate Crises", path: "/climate-crises" },
  { name: "Most Effective", path: "/most-effective" },
  { name: "Wellness", path: "/wellness" },
  { name: "Browse All Projects", path: "/browse-all-projects" },
  { name: "Community Health Clinics", path: "/wellness" },
  { name: "Nutrition & Wellness Programs", path: "/wellness" },
  { name: "Clean Water and Sanitation", path: "/wellness" },
  { name: "Mobile Health Camps", path: "/wellness" },
  { name: "Climate-Resilient Farming", path: "/climate-crises" },
  { name: "Community Irrigation Projects", path: "/climate-crises" },
  { name: "what we do", path: "/what-we-do" },
  { name: "who we are", path: "/about-us" },
  { name: "contact", path: "/contact" },
  { name: "blog", path: "/blog" },
  { name: "faq", path: "/faq" },
  { name: "stories", path: "/story" },
  { name: "gallery", path: "/gallery" },
  { name: "reports", path: "/reports" },
  { name: "donate-now", path: "/donate" },
  { name: "volunteer", path: "/volunteer" },
  { name: "nonprofits", path: "/nonprofits" },
  { name: "corporate-giving", path: "/corporate-giving" },
  { name: "success-stories", path: "/success-stories" },
  { name: "data-terms", path: "/data-terms" },
  { name: "philanthropic-gifts", path: "/philanthropic-gifts" },
  { name: "donate-in-honor", path: "/donate-in-honor" },
  { name: "start-an-application", path: "/start-an-application" },
  { name: "why-join", path: "/why-join" },
  { name: "handbook", path: "/handbook" },
  { name: "our-partners", path: "/our-partners" },
  { name: "gift-cards", path: "/gift-cards" },
  { name: "nonprofit-resources", path: "/nonprofit-resources" },
  { name: "cookie policy", path: "/cookie-policy" },
  { name: "privacy policy", path: "/privacy-policy" },
  { name: "terms of service", path: "/terms-of-service" },
  { name: "bronze tier", path: "/bronze-tier" },
  { name: "silver tier", path: "/silver-tier" },
  { name: "gold tier", path: "/gold-tier" },
  { name: "platinum tier", path: "/platinum-tier" },
  { name: "breaking barriers pdf", path: "/breaking-barriers-pdf" },
  { name: "empowering communities pdf", path: "/empowering-communities-pdf" },
  { name: "juliet story pdf", path: "/juliet-story-pdf" },
  { name: "disasters", path: "/disasters" },
  { name: "about us", path: "/about-us" },
  { name: "safe haven", path: "/safe-haven" },
  { name: "student champion", path: "/student-champion" },
  { name: "board of directors", path: "/board-of-directors" },
  { name: "financial integrity", path: "/financial-integrity" },
  { name: "volunteer toolkit pdf", path: "/volunteer-toolkit-pdf" },
  { name: "community engagement pdf", path: "/community-engagement-pdf" },
  { name: "fundraising guide pdf", path: "/fundraising-guide-pdf" },
  { name: "nonprofit legal guide pdf", path: "/nonprofit-legal-guide-pdf" },
  { name: "grant writing essentials pdf", path: "/grant-writing-essentials-pdf" },
  { name: "impact measurement vd", path: "/impact-measurement-vd" },
  { name: "bronze tier partner form", path: "/bronze-tier-partner-form" },
  { name: "silver tier form", path: "/silver-tier-form" },
  { name: "gold tier partner form", path: "/gold-tier-partner-form" },
  { name: "platinum tier partner form", path: "/platinum-tier-partner-form" },
  { name: "corporate partnership", path: "/corporate-partnership" },
];

const quickLinks = [
  { name: "Top Funded Projects", path: "/top-funded-projects" },
  { name: "Newest Projects", path: "/newest-projects" },
  { name: "Browse All Projects", path: "/browse-all-projects" },
  { name: "What We Do", path: "/what-we-do" },
  { name: "Who We Are", path: "/about-us" },
  { name: "Financial Integrity", path: "/financial-integrity" },
];

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const projects = useMemo(() => {
    const seen = new Set();

    return rawProjects
      .map((item) => ({
        name: item.name.trim(),
        path: item.path.trim(),
      }))
      .filter((item) => {
        const key = `${item.name.toLowerCase()}|${item.path.toLowerCase()}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
  }, []);

  const fuse = useMemo(
    () =>
      new Fuse(projects, {
        keys: ["name"],
        includeScore: true,
        threshold: 0.32,
        ignoreLocation: true,
        minMatchCharLength: 2,
      }),
    [projects]
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const results = fuse.search(value).map((res) => res.item).slice(0, 8);
    setSuggestions(results);
  };

  const handleSuggestionClick = (project) => {
    setQuery(project.name);
    setSuggestions([]);
    navigate(project.path);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    const results = fuse.search(query).map((res) => res.item);

    if (results.length > 0) {
      handleSuggestionClick(results[0]);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mx-auto w-full max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-base font-semibold tracking-[0.12em] uppercase text-[#1f3552]">
              Search
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Search Pages
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-8 max-w-2xl mx-auto">
              Enter keywords related to the project or page you want to find.
            </p>
          </div>

          <div className="rounded-[28px] border border-black/6 bg-white p-5 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-5" ref={wrapperRef}>
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />

                <input
                  type="text"
                  value={query}
                  onChange={handleInputChange}
                  placeholder="Type your search..."
                  className="w-full min-h-[56px] rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-base text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#1f3552]/25 focus:ring-4 focus:ring-[#1f3552]/10"
                />

                {suggestions.length > 0 && (
                  <ul className="absolute top-[calc(100%+10px)] left-0 right-0 z-50 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    {suggestions.map((project, index) => (
                      <li key={`${project.path}-${index}`}>
                        <button
                          type="button"
                          onClick={() => handleSuggestionClick(project)}
                          className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-base text-gray-800 transition hover:bg-slate-50"
                        >
                          <span>{project.name}</span>
                          <FaArrowRight size={12} className="shrink-0 text-[#1f3552]" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-full justify-center">
                Search
              </button>
            </form>

            {query && suggestions.length === 0 && (
              <p className="mt-5 text-base text-gray-500 text-center">
                No results found for "{query}".
              </p>
            )}

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="mb-4 text-base font-semibold text-gray-900">
                Popular Pages
              </p>

              <div className="flex flex-wrap gap-3">
                {quickLinks.map((item) => (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => navigate(item.path)}
                    className="btn btn-secondary !min-h-[48px] !px-5"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchPage;