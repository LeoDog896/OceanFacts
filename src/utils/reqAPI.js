// npm
const mongoose = require("mongoose");
const randomNum = require("random");

// local
const Fact = require("./MongoFact");

const random = async () => {
  const results = await Fact.find();
  const randomResult = Math.floor(Math.random() * results.length);
  return results[randomResult];
}

const randomCategory = async (categories) => {
  let results = await Fact.find({ categories });
  if (results.length === 0) {
    results[0] = { success: false, value: "No results found!" };
    return results[0];
  } else {
    const randomResult = randomNum.uniformInt((min = 0), (max = results.length));
    return results[randomResult];
  }
}

const searchQuery = async (query) => {
  let results = await Fact.findOne({ value: new RegExp(query, "i")});
  if (!results) {
    results = { success: false, value: "No results found!" };
  }
  return results;
}

const searchID = async (id) => {
  let results = await Fact.findById(id);
  if (!results) {
    results = { success: false, value: "No results found!" };
  }
  return results;
}

module.exports = { random, randomCategory, searchQuery, searchID };