const express = require('express');
const router = express.Router();
const Product = require('../models/productModels')


router.get('/products', async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/products/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.post('/products', async (req, res) => {
    const data = req.body
    try {
        const product = await Product.create(data);
        res.status(200).json(product)
    } catch(err) {
        res.status(500).json({message: err.message})
    } 
})

router.put('/products/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body
    try {
        const product = await Product.findByIdAndUpdate(id, data);
        res.status(200).json(product)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.delete('/products/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findByIdAndDelete(id);
        res.status(200).json(product)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = router