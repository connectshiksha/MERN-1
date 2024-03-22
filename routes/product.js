
const express = require('express')

const router = express.Router();

router.get('/products', (req, res) => {

    res.status(200).json({
        message: "Product route is hitted"
    })
})

router.post("/product", (req, res) => {

    console.log("test", req.body)
    res.status(200).json({
        message: "create product route is hitted"
    })
})

module.exports = router