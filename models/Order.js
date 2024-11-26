// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    foodImage: String,
    foodName: String,
  foodPrice: Number,
  quantity: Number,
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now },
});


// Virtual field to format date and time as "MM/DD/YYYY, hh:mm AM/PM"
orderSchema.virtual('formattedDate').get(function() {
  return this.createdAt.toLocaleString('en-US', {
      month: 'short', //2-digit
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
  });
});

module.exports = mongoose.model('Order', orderSchema);
