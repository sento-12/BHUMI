const mongoose = require('mongoose');
const pricescheme =   new mongoose.Schema({
    kesar_gold : Object,
    padhadi : Object,
    vrundavan : Object
  })
  
  const Price = mongoose.model("price", pricescheme);
  module.exports =  Price
  