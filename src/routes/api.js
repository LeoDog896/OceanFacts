// npm
const express = require("express");
const app = express.Router();

// local
const reqAPI = require("../utils/reqAPI");

module.exports = app;

app.get("/random/", async (req, res) => {
  const randomPost = await reqAPI.random();
  res.json(randomPost);
})

app.get("/random/category/:category", async (req, res) => {
  const { category } = req.params;
  const randomCategoryPost = await reqAPI.randomCategory(category);
  if (!randomCategoryPost || !randomCategoryPost.success) res.status(404);
  res.json(randomCategoryPost);
});

app.get("/search/query/:query" , async (req, res) => {
  const { query } = req.params;
  const searchQueryPost = await reqAPI.searchQuery(query);
  if (!searchQueryPost || !searchQueryPost.success) res.status(404);
  res.json(searchQueryPost);
});

app.get("/search/id/:id", async (req, res) => {
  const { id } = req.params;
  const searchIDPost = await reqAPI.searchID(id);
  if (!searchIDPost || !searchIDPost.success) res.status(404);
  res.json(searchIDPost);
});
