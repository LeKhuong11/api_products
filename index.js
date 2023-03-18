const bodyParser = require('body-parser');
require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000;
const router = require('./router/productRoute')
const db_url = process.env.MONGODB_URL

app.use(express.json())

mongoose.connect(db_url)
    .then(res => {
        console.log('connected susscessfully');
    })

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

    
app.use('/api/', router);

app.get('/', (req, res) => {
  res.send({message: "SERVER ON"})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})