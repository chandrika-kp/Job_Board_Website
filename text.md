To run the server,
I created a Backend Folder,

To install node packages

   npm init -y
   npm i express

In package.json, the given file name is as
   1)  "main": "server.js"

   2) To run the script,
      "start server": "node server",

      ![Screenshot 2023-10-16 163613](https://github.com/chandrika-kp/Job_Board_Website/assets/102351627/91e39d9f-46e8-4181-88ca-a692350281bd)

--------------------------------------------------------------
server.js file

const express = require("express");
const app = express();

app.get('/', (req,res) =>  {
    res.send("hello .... local server")
})

app.listen(9000, () =>{
    console.log("server running at port 9000...")
})
-------------------------------------------------------------
now run localhost:9000

![Screenshot 2023-10-16 162607](https://github.com/chandrika-kp/Job_Board_Website/assets/102351627/182db51d-5c2d-40dc-8840-cc90050f3c8a)


