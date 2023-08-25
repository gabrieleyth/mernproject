// server constitutes the backend

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors");

app.use(express.json());
// if you dont do this any request that involve the body will give you an error
app.use(cors());

mongoose.connect(
  "mongodb+srv://user123:Password123Tech@cluster0.zgyujfc.mongodb.net/mernproject?retryWrites=true&w=majority"
);

app.get("/getUsers", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  
  try {
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});
