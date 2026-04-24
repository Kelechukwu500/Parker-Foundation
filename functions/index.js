const functions = require("firebase-functions");
const axios = require("axios");
const cors = require("cors")({ origin: true });


const paystackSecret = process.env.PAYSTACK_SECRET_KEY;

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
