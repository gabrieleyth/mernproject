// this enables us to write code that can alter values in the database

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require("./models/Users");

mongoose.connect("mongodb+srv://user123:Password123Tech@cluster0.zgyujfc.mongodb.net/mernproject?retryWrites=true&w=majority"); 
// takes a string which connects to the cluster we created in mdb website, tells mongo ^^^^^^ which db we are connecting to

// now we need to request data from DB from front end & we dont have any way to add data from FE to DB
app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  }); // empty object returns back all data inside collection
}); // receive and send info in FE by retreiving the list of all current users 
/*
app.post("/createUser", async (req, res) => {
  const user = req.body; // this is the data we want to insert in DB, sent from the front end;
  const newUser = new UserModel(user); // creates a new user 
  await newUser.save(); // awaits and saves the data
  
  res.json(user)
});
//*/

app.listen(3001, () => {
  console.log("server runs perfectly");
}); // callback function runs when server starts running

// node index.js the server will continue running until we kill the terminal ctrl c