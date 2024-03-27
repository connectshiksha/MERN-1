
const express = require('express')

const router = express.Router();
const Product = require("../models/product")

router.get('/products', async (req, res) => {

    try {
        const products = await Product.find();
        res.status(200).json({
            status: true,
            message: "Products is fetched successfully",
            data: products
        })

    } catch (e) {
        console.log("Error while fetching product data", e.message)
        res.status(500).json({
            status: false,
            message: "Internal server Error"
        })

    }

})

router.post("/product", async (req, res) => {

    const { name, description, imageurl, quantity } = req.body;

    try {
        const result = await Product.create({
            "name": name,
            "description": description,
            "imageurl": imageurl,
            "quantity": quantity

        })
        res.status(201).json({
            status: true,
            message: "Product created succesfully",

        })


    } catch (e) {
        console.log("Error while creating product", e.message);
        res.status(500).json({
            status: false,
            message: "Internal server error"
        })

    }
})

router.delete("/product/:id", async (req, res) => {
    const { id } = req.params ;
    console.log("product id ",id)
    try {
        const result = await Product.findByIdAndDelete(id)
        res.status(200).json({
            status: true,
            message: "Product deleted successfully"
        })
    } catch (e) {
        console.log("Error while creating product", e.message);
        res.status(500).json({
            status: false,
            message: "Internal server error"
        })

    }
})

module.exports = router