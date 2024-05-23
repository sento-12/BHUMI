const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const sendMail = require("./controllers/sendMail");
const Price = require("./models/price")
const passport = require("./auth");
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());

//order api call and get data parts
const Order = require("./models/order");

app.use(cors());

app.use(express.json());

const data = mongoose.connect("mongodb://localhost:27017/BHUMI");

// order api call and get data parts client order data client order data client side
app.post("/data", async (req, res) => {
  console.log(req.body);
  await Order.create(req.body);
  res.send("hello my dear this is work");

});

app.get("/getData", (req, res) => {
  const orderId = req.body.orderId;
  Order.findOne({ _id: orderId })
    // .sort({ _id: orderId })
    // .limit(1)
    // .then((order) => res.json(order))
    // .catch((err) => res.json(err));
});


//get price data base api 
app.get("/getPrice", (req, res) => {  

  Price.find()
  .then((price) => res.json(price))
  .catch((err) => res.json(err));
   console.log("get price data")
  });


//email using node mmailer service
app.get("/email", sendMail);


const adminRoutes = require("./routes/adminRoutes")
// admin pannale api call and get data parts


//testing 

// Handle all other routes by serving the frontend
// app.get('/temp', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'temp.html'));
//   console.log("fetch this api call")
// });

//----------------------------------------------------------------



app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false})


//WHATSAPP messenger api call and get data parts

const whatsapp = require("./controllers/sendWhatsapp")
app.get("/whatsapp", whatsapp)

app.use('/admin', adminRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
