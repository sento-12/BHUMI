const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  party: { type: String, required: true },
  gst: { type: String, default: 'no value' },
  pancard: { type: String, default: 'no value' },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  item: { type: Array, default: [] }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
