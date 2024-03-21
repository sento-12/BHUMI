const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  party: String,
  gst: String,
  pancard: String,
  phone: String,
  city: String,
  bag: [String],
  wieght: [String],
  brand: [String],
  price: [String],
});

const Order = mongoose.model("order", orderSchema);
module.exports = Order;
