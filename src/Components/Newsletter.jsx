// Newsletter.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

const preferenceOptions = [
  { value: "updates", label: "Updates & News" },
  { value: "events", label: "Events & Workshops" },
  { value: "offers", label: "Special Offers" },
];

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [preferences, setPreferences] = useState("");
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const selectedPreferenceLabel = useMemo(() => {
    return (
      preferenceOptions.find((option) => option.value === preferences)?.label ||
      "Select your preferences"
    );
  }, [preferences]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSelectPreference = (value) => {
    setPreferences(value);
    setDropdownOpen(false);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email || !name || !preferences) {
      alert("Please fill out all fields.");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "subscribers"), {
        email,
        name,
        preferences,
        date: new Date(),
      });

      alert(
        "Thank you for subscribing! Check your email for a welcome message."
      );

      setEmail("");
      setName("");
      setPreferences("");
      setDropdownOpen(false);
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14 bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)]">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mx-auto max-w-3xl rounded-[30px] border border-black/5 bg-white">
          <div className="px-6 sm:px-8 lg:px-10 py-8 sm:py-10">
            <div className="mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 tracking-tight">
                Subscribe to our Newsletter
              </h2>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                Stay updated with the latest news, events, and exclusive insights from
                Charlie Parker. Join our community and never miss a beat.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubscribe}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="newsletterEmail"
                    className="block text-base font-semibold text-gray-800 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="newsletterEmail"
                    name="newsletterEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                    className="w-full min-h-[56px] rounded-2xl border border-slate-200 bg-white px-4 text-base text-gray-900 placeholder:text-gray-400 transition focus:border-[#1f3552]/30 focus:outline-none focus:ring-4 focus:ring-[#1f3552]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="newsletterName"
                    className="block text-base font-semibold text-gray-800 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="newsletterName"
                    name="newsletterName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your full name"
                    className="w-full min-h-[56px] rounded-2xl border border-slate-200 bg-white px-4 text-base text-gray-900 placeholder:text-gray-400 transition focus:border-[#1f3552]/30 focus:outline-none focus:ring-4 focus:ring-[#1f3552]/10"
                  />
                </div>
              </div>

              <div ref={dropdownRef} className="relative z-20">
                <label
                  htmlFor="preferences"
                  className="block text-base font-semibold text-gray-800 mb-2"
                >
                  Preferences
                </label>

                <div className="relative">
                  <button
                    type="button"
                    id="preferences"
                    aria-haspopup="listbox"
                    aria-expanded={dropdownOpen}
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className={`w-full min-h-[56px] rounded-2xl border bg-white px-4 text-left text-base transition focus:outline-none ${
                      dropdownOpen
                        ? "border-[#1f3552]/30 ring-4 ring-[#1f3552]/10"
                        : "border-slate-200"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span className={preferences ? "text-gray-900" : "text-gray-400"}>
                        {selectedPreferenceLabel}
                      </span>

                      <svg
                        className={`h-5 w-5 shrink-0 text-[#1f3552] transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {dropdownOpen && (
                    <div
                      role="listbox"
                      aria-label="Preference options"
                      className="absolute left-0 right-0 top-full z-30 mt-2 rounded-2xl border border-slate-200 bg-white p-2"
                    >
                      {preferenceOptions.map((option) => {
                        const isSelected = preferences === option.value;

                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleSelectPreference(option.value)}
                            className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base transition ${
                              isSelected
                                ? "bg-[#1f3552]/[0.06] text-[#1f3552] font-semibold"
                                : "text-gray-700 hover:bg-slate-50"
                            }`}
                          >
                            <span>{option.label}</span>

                            {isSelected && (
                              <svg
                                className="h-4 w-4 text-[#1f3552]"
                                viewBox="0 0 20 20"
                                fill="none"
                                aria-hidden="true"
                              >
                                <path
                                  d="M5 10.5L8.5 14L15 7.5"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-2 text-left">
                <button
                  type="submit"
                  disabled={loading}
                  className={`btn btn-primary ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {loading ? "Subscribing..." : "Subscribe Now"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;