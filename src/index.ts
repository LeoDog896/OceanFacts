// npm
import mongoose from "mongoose"
import express from "express"
import ejs from "ejs"
import path from "path"
import bodyParser from "body-parser";

// local
import config from "./config";
import logger from "./utils/logger"
import * as reqAPI from "./utils/reqAPI";

// register express app
const app = express();

// register ejs
app.engine("ejs", ejs.renderFile);
app.set("view engine", "ejs");
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

if (config.mongo) {
	mongoose.connect(config.mongo)
} else {
	logger.warn("No mongo connection found")
}
app.listen(config.port, () => logger.info(`App started at port ${config.port}`));