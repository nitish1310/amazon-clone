const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HW2EnCRlwJlGJf5W7aLxOvIfVUJltd1bugEvfoOpCt44JYNURqKDnnoa1OUtUqahiB5ywYTm9shpW9rdRsDBFlI00wUXeWYCY"
);

//API

// - App config
const app = express();

// - Middleares
app.use(cors({ origin: true }));
//send data and parse json data
app.use(express.json());
// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request receieved Boom!! for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
// http://localhost:5001/clone-fcc92/us-central1/api
