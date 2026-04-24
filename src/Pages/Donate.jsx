import React, { useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "emailjs-com";
import paystack2 from "../assets/paystack2.jpg";
import axios from "axios";

const Donate = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("NGN");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [description, setDescription] = useState("");

  const presetAmounts = {
    NGN: [5000, 10000, 20000],
    USD: [10, 50, 100],
    GBP: [10, 40, 80],
    EUR: [10, 50, 90],
  };

  const sendEmail = () => {
    const templateParams = {
      name,
      email,
      amount,
      currency,
      description,
    };

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      templateParams,
      "YOUR_PUBLIC_KEY",
    );
  };

  const saveDonation = async () => {
    await addDoc(collection(db, "donations"), {
      name,
      email,
      amount,
      currency,
      description,
      createdAt: serverTimestamp(),
    });
  };

  const handlePayment = () => {
    if (!window.PaystackPop) {
      alert("Paystack not loaded");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: "pk_live_f6480eb92816869cecc571512b302c0ac6f4602e",
      email: email,
      amount: Number(amount) * 100,
      currency: currency,
      reference: "donation_" + Date.now(),

      callback: function (response) {
        console.log("SUCCESS:", response.reference);
        alert("Payment successful!");
      },

      onClose: function () {
        console.log("Payment closed");
      },
    });

    handler.openIframe();
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#f8fafc_0%,#ffffff_20%,#f8fafc_100%)] flex items-center justify-center px-3 sm:px-4 md:px-6 py-6 md:py-10">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md md:max-w-lg p-5 sm:p-6 md:p-8">
        {success ? (
          <div className="text-center py-10">
            <div className="text-5xl mb-4">❤️</div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Thank You!</h2>

            <p className="text-gray-600 text-sm sm:text-base mb-6">
              Your payment has been received for processing.
            </p>

            <button
              onClick={() => {
                setSuccess(false);
                setAmount("");
                setName("");
                setEmail("");
              }}
              className="bg-yellow-500 text-black px-6 py-2.5 rounded font-semibold hover:bg-yellow-400 transition"
            >
              Make Another Donation
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              Make a Donation ❤️
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <select
              className="w-full border p-3 rounded mb-4"
              value={currency}
              onChange={(e) => {
                setCurrency(e.target.value);
                setAmount("");
              }}
            >
              <option value="NGN">🇳🇬 Naira (₦)</option>
              <option value="USD">🌍 US Dollar ($)</option>
              <option value="GBP">🌍 Pound (£)</option>
              <option value="EUR">🌍 Euro (€)</option>
            </select>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
              {presetAmounts[currency].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setAmount(amt)}
                  className="border rounded p-2 hover:bg-yellow-400"
                >
                  {amt}
                </button>
              ))}
            </div>

            <input
              type="number"
              placeholder="Enter custom amount"
              className="w-full border p-3 rounded mb-6"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Description
              </label>
              <input
                type="text"
                placeholder="Specify the project or purpose of your donation"
                className="w-full border p-3 rounded"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button
              type="button"
              onClick={handlePayment}
              className="w-full bg-yellow-500 text-black py-3 rounded font-bold"
            >
              Donate Now
            </button>

            <div className="flex items-center justify-center gap-2 mt-4">
              <img
                src={paystack2}
                alt="Paystack Logo"
                className="w-5 h-5 object-contain"
              />
              <p className="text-xs text-gray-500 text-center">
                Secure payments powered by Paystack
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Donate;
