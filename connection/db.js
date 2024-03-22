const mongoose = require("mongoose") ;

const connectDB = ()=>{
    
    const url = "mongodb+srv://Rohit:Rohit@cluster0.vrcqw6n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

    mongoose.connect(url).then(()=>{ 
        console.log("Data base is connected") ;
    }).catch((e)=>{
        console.log("error while connection with Db",e.message);
    })
}

module.exports = {connectDB} ;