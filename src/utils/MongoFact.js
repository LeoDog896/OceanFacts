const mongoose = require("mongoose");

const FactSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  categories: {
    type: Object,
    required: true
  },
  factPath: {
    type: String,
    required: true
  },
  success: {
    type: Boolean,
    required: true,
    default: true,
  }
}, { timestamps: true,  collation: { locale: 'en', strength: 2 }, versionKey: false });

module.exports = mongoose.model("Fact", FactSchema);