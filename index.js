const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000;
const router = require('./router/productRoute')
const url = "mongodb+srv://khuongdev11:khuongle1102@cluster0.ttgcd6s.mongodb.net/list?retryWrites=true&w=majority"

app.use(express.json())

mongoose.connect(url)
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