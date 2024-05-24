const mongoose = require('mongoose');

// Define the schema
const orderSchema = new mongoose.Schema({
  party: { type: String, required: true },
  // gst: { type: String, default: null }, // explicitly setting default to null
  // pancard: { type: String, default: null }, // explicitly setting default to null
  phone: { type: String, required: true },
  city: { type: String, required: true },
  item: { type: Array, default: [] } // default to an empty array
});

// Create the model from the schema
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
