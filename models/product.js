const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const productSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageurl: {
        type: String,
    },
    quantity : {
        type :Number,
        required : true ,
        default : 1
    }

})

const productModel = mongoose.Model('product',productSchema)

module.exports = productModel 