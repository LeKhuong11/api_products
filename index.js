const bodyParser = require('body-parser');
require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const port = 3000;
const router = require('./router/productRoute')
const db_url = 'mongodb+srv://khuongdev11:khuongle1102@cluster0.ttgcd6s.mongodb.net/list?retryWrites=true&w=majority'


app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

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