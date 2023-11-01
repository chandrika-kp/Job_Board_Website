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

![Screenshot 2023-10-16 165541](https://github.com/chandrika-kp/Job_Board_Website/assets/102351627/5cc58999-3505-429e-8d57-e099fb34c0ee)

-------------------------------------------------------------
now run localhost:9000

![Screenshot 2023-10-16 162607](https://github.com/chandrika-kp/Job_Board_Website/assets/102351627/182db51d-5c2d-40dc-8840-cc90050f3c8a)


--------------------------------------------------------------
To connect with the database, (using Mongodb)
         npm install mongodb
         npm install mongoose --save

MongoDB is a database management system and Mongoose is a library that makes it easier to interact with a MongoDB database in a Node.js application.

again run the server ... npm start server

![image](https://github.com/chandrika-kp/Job_Board_Website/assets/102351627/e894f3ea-00f7-40c5-a4a7-209f9fd06824)

instead of running sever for every change in the application, we can install nodemon ( automatically restarting the node application when file changes in the directory are detected. )
         npm i nodemon -D

In package.json, 
     1) change in scripts
         "start server": "node server",
         "dev": "nodemon server",
     2) To run the script,
         npm run dev
 ![image](https://github.com/chandrika-kp/Job_Board_Website/assets/102351627/62503393-ceb2-42de-988a-8f114fc8eccb)
     

-----------------------------------------------------
Note : Don't forgot to connect mongodb via mongodb compass or vs.code or mongo Atlas
