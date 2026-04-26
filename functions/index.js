const functions = require("firebase-functions");
const axios = require("axios");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

admin.initializeApp();

const db = admin.firestore();

const paystackSecret = process.env.PAYSTACK_SECRET_KEY;


   // PAYSTACK VERIFY PAYMENT //

exports.verifyPayment = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const { reference } = req.body;

    if (!reference) {
      return res.status(400).json({ error: "No reference provided" });
    }

    try {
      const response = await axios.get(
        `https://api.paystack.co/transaction/verify/${reference}`,
        {
          headers: {
            Authorization: `Bearer ${paystackSecret}`,
          },
        },
      );

      return res.status(200).json({
        success: true,
        data: response.data.data,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  });
});


   // NEWSLETTER SUBSCRIPTION //

exports.subscribeNewsletter = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const { email, name, preferences } = req.body;

    if (!email || !name || !preferences) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    try {
      const existing = await db
        .collection("newsletterSubscribers")
        .where("email", "==", email.toLowerCase())
        .get();

      if (!existing.empty) {
        return res.json({
          success: true,
          message: "Already subscribed",
        });
      }

      await db.collection("newsletterSubscribers").add({
        email: email.toLowerCase(),
        name,
        preferences,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      return res.json({
        success: true,
        message: "Subscribed successfully",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  });
});