const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [ true, 'Please enter product name']
        },
        price: {
            type: Number,
            require: [ true, 'Please enter product price'],
            default: 0
        },
        size: {
            type: String,
            require: [ true, 'Please enter product size'],
            default: "M"
        },
        description: {
            type: String,
            require: [ true, 'Please enter product description'],
        },
        img: {
            type: Array,
            require: [ true, 'Please enter product img'],
        },
        discouter: {
            type: Number,
            require: [ true, 'Please enter product discouter'],
        },
        color: {
            type: Array,
            require: [ true, 'Please enter product color'],
            default: [
                "#DE9034",
                "#EC42A2",
                "#8568FF"
              ]
        },
        star: {
            type: Number,
            require: [ true, 'Please enter product start'],
            default: 1
        },
        store: {
            type: Number,
            require: [ true, 'Please enter product store'],
            default: 0
        },
        categories: {
            type: String    ,
            require: [ true, 'Please enter product categories'],
        },
        brand: {
            type: String    ,
            require: [ true, 'Please enter product brand'],
        }
    }
)

const Product = mongoose.model('Product', productSchema);

module.exports = Product