// npm
const mongoose = require("mongoose");
const express = require("express");
const ejs = require("ejs");
const path = require("path");
const bodyParser = require("body-parser");
const { v4: uuid } = require("uuid");

// local
const { port, mongo } = require("./config");
const reqAPI = require("./utils/reqAPI");

// register express app
const app = express();

// register ejs
app.engine("ejs", ejs.renderFile);
app.set("view engine", ejs);
app.set("views", path.join(__dirname, "views"));

// register body parser
app.use(bodyParser.urlencoded({ extended: true }));

// register static files
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/", require(path.join(__dirname, "routes", "api.js")));

app.get("/", async (req, res) => {
  const randomFact = await reqAPI.random();
  res.render("index.ejs", { randomFact });
});

app.get("/fact/random", async (req, res) => {
  const randomFact = await reqAPI.random();
  res.render("random.ejs", { randomFact });
});

app.get("/fact/:id", async (req, res) => {
  const { id } = req.params;
  const idFact = await reqAPI.searchID(id);
  res.render("fact.ejs", { idFact });
})

mongoose.connect(mongo).then(() => app.listen(port, () => console.log("App started 8080")));