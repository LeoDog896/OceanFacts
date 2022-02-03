import randomNum from "random";

// local
import Fact from "./MongoFact";

const random = async () => {
	const results = await Fact.find();
	const randomResult = Math.floor(Math.random() * results.length);
	return results[randomResult];
}

const randomCategory = async (categories) => {
  let results = await Fact.find({ category: categories });
  if (results.length === 0) {
    return { success: false, value: "No results found!" };
  } else {
    const randomResult = randomNum.uniformInt(0, results.length);
    return results[randomResult()];
  }
}

const searchQuery = async (query) => {
  let results = await Fact.findOne({ value: new RegExp(query, "i")});
  
  if (!results) {
    return { success: false, value: "No results found!" };
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

export { random, randomCategory, searchQuery, searchID };