const express = require("express");
const userRoute = express.Router();
const path = require("path");
// => Multer Import
const upload = require("../models/multer.model");

// => Mongoose
const mongoose = require("mongoose");
const modelSchema = require("../models/mongo.Schema");
const User = new mongoose.model("User", modelSchema);

userRoute.get("/", (req, res) => {
  res.status(200).render("index");
});

userRoute.get("/postme", (req, res) => {
  res.status(200).render("post");
});

userRoute.post("/postme", upload.single("avatar"), async (req, res) => {
  try {
    const newUser = new User({
      avatar: req.avatarID,
      username: req.body.username,
      profession: req.body.profession,
      facebook: req.body.facebook,
    });

    avatar = "image/" + req.avatarID;
    username = req.body.username;
    profession = req.body.profession;
    facebook = req.body.facebook;

    await newUser.save();
    res.render("success");
  } catch (err) {
    res.json({ message: err.message });
  }
});

// => Open API route
userRoute.get("/api/users", async (req, res) => {
  const find = await User.find({}).select({
    _id: 0,
    __v: 0,
  });
  res.json({
    users: find,
  });
});

module.exports = userRoute;
