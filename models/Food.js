// Models/Food.js
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String, // Path to the image file
    required: true
  }
});

module.exports = mongoose.model('Food', foodSchema);
