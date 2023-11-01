const express = require("express");
const mongoose = require("mongoose");

const app = express();

// database connection
const uri = "mongodb://0.0.0.0/JobBoard"
mongoose.connect(uri)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err))

app.get('/', (req,res) =>  {
    res.send("hello .... local server")
})

app.listen(9000, () =>{
    console.log("server running at port 9000...")
})

