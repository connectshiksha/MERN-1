
const express = require("express")
const app = express();
const port = 4000;
const { connectDB } = require("./connection/db");

const ProductRouter = require('./routes/product');
const bodyParser = require('body-parser')

// create application/json parser
app.use(bodyParser.json());
// connecting to database 
connectDB();

app.get("/", (req, res) => {

    res.status(200).json({
        message: "hello world xyz"
    })
})

app.use(ProductRouter);


app.listen(port, () => console.log(`your app is running on port ${port}`));
