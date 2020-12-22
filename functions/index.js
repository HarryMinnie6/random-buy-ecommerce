const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HzgknDGOy5si9f7wn1g4HWEH1CWE7EPws0ePFe95DeCqUmIRj4tN3BJrU7dtTTFMVYJsOQsJRcDGiRwUbhfoOIC00rmGK48FE"
);

//API (setting up) ---- below is what we need

// - App Config
const app = express();

// - middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - api routes

//below is a dummy route just for setup.
app.get("/", (req, res) => res.status(200).send("hello"));

app.post("/payment/create", async (req, res) => {
  //--->  /payment/create  this route is used in Payment.js line 31
  const total = req.query.total;
  console.log("payment request recieved for this amount --->", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
      clientSecret: paymentIntent.client_secret
  })
});
// - Listener
exports.api = functions.https.onRequest(app);
