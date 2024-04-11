const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const Price = require('./models/price')


//order api call and get data parts
const Order = require('./models/order')

app.use(cors())

app.use(express.json())

const data = mongoose.connect("mongodb://localhost:27017/BHUMI")

// order api call and get data parts client order data client order data client side
app.post('/data',async (req, res) => {
  console.log(req.body);
  await Order.create(req.body);
  res.send("hello my dear this is work");
})

app.get('/getData', (req, res) => {
    Order.find().sort({_id:-1}).limit(1)
    .then(order => res.json(order))
    .catch(err => res.json(err))
});


//price api call and get data parts

app.post('/price',async (req, res) => {
  console.log(req.body);
  await Price.updateMany({}, req.body).then(()=>{res.send("hello my dear this is work--++");})
})

app.get('/getPrice', (req, res) => {
        Price.find().then(price => res.json(price))
        .catch(err => res.json(err))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})