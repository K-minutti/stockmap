const express = require("express");
const path = require("path");
const volleyball = require("volleyball");
const bodyParser = require("body-parser");

const app = express();

// logging middleware for debugging
app.use(volleyball);

// body parsing middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api", require("./api")); //  app use our routes

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
}); // for any requests we can't statisfy in our routes send index.html

// error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || "Internal server error");
});

module.exports = app;
