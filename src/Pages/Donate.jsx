import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const API_BASE_URL = window.APP_CONFIG?.API_BASE_URL || "";

export default function Donate() {
  const [searchParams] = useSearchParams();

  const [form, setForm] = useState({
    amount: searchParams.get("amount") || "",
    fullName: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const source = searchParams.get("source") || "";
  const campaign = searchParams.get("campaign") || "";
  const label = searchParams.get("label") || "";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const amountNumber = Number(form.amount);

    if (!Number.isFinite(amountNumber) || amountNumber <= 0) {
      setError("Enter a valid donation amount.");
      return;
    }

    if (!form.email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!API_BASE_URL) {
      setError("Frontend is ready, but API_BASE_URL is not configured yet.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE_URL}/donations/create-payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amountNumber,
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          source,
          campaign,
          label,
          successUrl: `${window.location.origin}/thank-you`,
          cancelUrl: `${window.location.origin}/donate`,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data?.payment_link) {
        throw new Error(data?.message || "Unable to start payment.");
      }

      window.location.assign(data.payment_link);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">Make a Donation</h1>
        <p className="mb-8 text-gray-600">
          Enter any amount you would like to give.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Donation Amount
            </label>
            <input
              type="number"
              name="amount"
              min="1"
              step="0.01"
              value={form.amount}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              placeholder="Enter amount"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              placeholder="Enter full name"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              placeholder="Enter phone number"
            />
          </div>

          {error && (
            <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
                      className="w-full disabled:opacity-60 btn-primary btn" 
                
          >
            {loading ? "Starting payment..." : "Continue to Payment"}
          </button>
        </form>
      </div>
    </section>
  );
}