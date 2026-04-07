// GiftCards.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

// Example gift card data
const giftCards = [
  { amount: 25, description: "Provides basic school supplies for a student" },
  { amount: 50, description: "Covers one month of mentorship sessions" },
  { amount: 100, description: "Supports a student’s meals for a month" },
  { amount: 250, description: "Funds educational materials for a classroom" },
];

const GiftCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleBuyClick = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle gift card submission logic here (e.g., redirect to payment or download PDF)
    console.log("Gift card purchased:", {
      selectedCard,
      recipientName,
      message,
    });
    setModalOpen(false);
    setRecipientName("");
    setMessage("");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-600">
            Gift a Chance to Make a Difference
          </h2>
          <p className="mt-4 text-gray-700 italic text-lg">
            Purchase a gift card and support education, empowerment, and
            community projects.
          </p>
        </motion.div>

        {/* Gift Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-6"
        >
          {giftCards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 flex flex-col items-center text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900">
                ${card.amount}
              </h3>
              <p className="mt-2 text-gray-700">{card.description}</p>
              <button
                onClick={() => handleBuyClick(card)}
                className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
              >
                Send Gift
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for Personalization */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white rounded-lg p-8 w-11/12 max-w-md shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Personalize Your Gift</h3>
              <p className="mb-4 text-gray-700">
                You are sending a ${selectedCard?.amount} gift card.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Recipient Name"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                  rows={3}
                  required
                ></textarea>
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                  >
                    Purchase
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GiftCards;
