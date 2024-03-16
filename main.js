import express from 'express';
import mongoose from "mongoose";


await mongoose.connect("mongodb://localhost:27017/BHUMI")
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})