const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        productName: {
            type: String,
            require: [ true, 'Please enter product name']
        },
        type: {
            type: String,
            require: true,
        },
        price: {
            type: String,
            require: true
        },
        color: {
            type: String,
            require: true
        }
    }
)

const Product = mongoose.model('Product', productSchema);

module.exports = Product