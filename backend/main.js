const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const sendMail = require("./controllers/sendMail");
const Price = require("./models/price")
const passport = require("./auth");
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, 'privet')));


app.use(bodyParser.json());

//order api call and get data parts
const Order = require("./models/order");

app.use(cors());

app.use(express.json());

// const uri = process.env.LOCAL_URL
const uri = process.env.URL_MONGODB

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000 // 10 seconds
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});



const relativePath = '/index.html';
const indexPage = path.resolve(__dirname, relativePath);


const form = 'privet/form.html';
const formPage = path.resolve(__dirname, form);



const templet = 'privet/Pamphlet.html';
const templetPage = path.resolve(__dirname, templet);


app.get("/", (req, res) => {
  res.sendFile(indexPage)
})

app.get("/form", (req, res) => {
  res.sendFile(formPage)
})


app.get("/templet", (req, res) => {
  res.sendFile(templetPage)
})


// order api call and get data parts client order data client order data client side
app.post("/data", async (req, res) => {
  console.log("access to order save pannele ")
  const userData =await req.body;

    const newUser = new Order(userData);

   await newUser.save()
        .then(user => {
            res.status(201).json({
                message: 'User created successfully',
                user
            });
        })
        .catch(err => {
            res.status(400).json({
                message: 'Error creating user',
                error: err.message
            });
        });
});



app.get("/getData", async(req, res) => {
  
  await  Order.findOne()
    .sort({ _id: -1 })
    .limit(1)
    .then((order) => res.json(order))
    .catch((err) => res.json(err));
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

const whatsapp = require("./controllers/sendWhatsapp");
const { TIMEOUT } = require("dns");
app.get("/whatsapp", whatsapp)

app.use('/admin', adminRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
