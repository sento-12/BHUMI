const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  party: String,
  gst: String,
  pancard: String,
  phone: String,
  city: String,
  item : Array,
});
const Order = mongoose.model("order", orderSchema);
 module.exports = Order;