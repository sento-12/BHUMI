const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const Order = require('./models/order')

app.use(cors())

app.use(express.json())

const data = mongoose.connect("mongodb://localhost:27017/BHUMI")


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


app.get('/getAllData', (req, res) => {
  Order.find()
  .then(order => res.json(order))
  .catch(err => res.json(err))

  console.log(data)
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})