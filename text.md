To run the server,
I created a Backend Folder,

To install node packages

   npm init -y
   npm i express

In package.json, the given file name is as
   1)  "main": "server.js"

   2) To run the script,
      "start server": "node server",
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
![Screenshot 2023-10-16 162607](https://github.com/chandrika-kp/Job_Board_Website/assets/102351627/10ebd795-76e2-4a46-a686-3b64b2222211)
![Screenshot 2023-10-16 162607](https://github.com/chandrika-kp/Job_Board_Website/assets/102351627/64e7c3f7-db0c-4cf2-9a2e-ee425650c565)

