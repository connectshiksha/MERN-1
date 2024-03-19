
const express = require("express")
const app = express();
const port = 4000;

app.get("/", (req, res) => {

    res.status(200).json({
        message : "hello world xyz"
    })
})

// app.post("/login",(req,res)=>{
//     res.status(200).json({
//         message :"login route hited"
//     })
// })

app.listen(4000, () => console.log(`your app is running on port ${port}`));
