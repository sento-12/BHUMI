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
  res.send("hello my dear i am TSN");
})

app.get('/', (req, res) => {

});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})