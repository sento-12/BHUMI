const express = require('express');
const router = express.Router();
const Price = require("../models/price");
const passport = require("../auth");
const path = require('path');
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const app = express();

const Admin = require('../models/admin');
const {jwtAuthMiddleware, generateToken} = require("../jwt")


// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


// app.use(passport.initialize());
// const localAuthMiddleware = passport.authenticate('local', {session: false})

app.use(cookieParser());


const relativePath = '../admin/public/admin_login.html';
const adminPage = path.resolve(__dirname, relativePath);

const asulatePath = '../admin/public/ad_pannel.html';

const absolutePath = path.join(__dirname, asulatePath);


const Price_ = '../admin/public/price/price.html';
const pricePannel  = path.join(__dirname, Price_);


router.get("/", (req, res) => {
  res.sendFile(adminPage)
})



router.get("/singup", (req, res) => {
        Admin.create(req.body)
        res.send(req.body)
}
)




// POST route to add a adminx
router.post('/login', async (req, res) =>{
  try{
    // Extract username and password from request body
    const {username, password} = req.body;

    // Find the user by username
    const user = await Admin.findOne({username: username});

    // If user does not exist or password does not match, return error
    if( !user || !(await user.comparePassword(password))){
        return res.status(401).json({error: 'Invalid username or password'});
    }

    // generate Token 
    const payload = {
        id: user.id,
        username: user.username
    }
    const token = generateToken(payload);
    // console.log(token)
  //  res.cookie('token', token)
  //  res.redirect("/admin/pannel")
  // res.cookie('token', token, { httpOnly: true, secure: true }); // Set cookie
  res.json({ message: 'Login successful', token: token });
        // res.json({ message: 'Login successful', token: token });
  
  
}catch(err){  
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
}
} )

router.get("/pannel",  (req, res) => {
  res.sendFile(absolutePath);
  console.log("you are in admin pannnel routere ")
  // return res.redirect("http://127.0.0.1:5500/backend/admin/public/ad_pannel.html")
 
})

router.get("/pricePannel", (req, res) => {
  res.sendFile(pricePannel)
})

router.post("/price",jwtAuthMiddleware, async (req, res) => {
  console.log("work......... to price api ")
    console.log(req.body);
    await Price.updateMany({}, req.body).then(() => {
      res.send("thiss is admin pannel price change routes updated");
    });
    // Price.create(req.body)
  });
  

  

module.exports = router;
