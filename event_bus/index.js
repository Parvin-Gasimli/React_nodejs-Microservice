const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { randomBytes } = require("crypto");
const axios = require("axios");
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event); // Posts
  axios.post("http://localhost:4001/events", event); // Comments
  axios.post("http://localhost:4002/events", event); // Query
  res.send({ status: "OK" });
});
app.listen(4005, () => {
  console.log("Event Bus Listening on 4005");
});
