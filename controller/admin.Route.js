const express = require("express");
const adminRoute = express.Router();

// => Mongoose
const mongoose = require("mongoose");
const modelSchema = require("../models/mongo.Schema");
const User = new mongoose.model("User", modelSchema);

adminRoute.get("/all/users", async (req, res) => {
  const allUsers = await User.find({}).select({
    __v: 0,
  });
  res.json({
    users: allUsers,
  });
});

adminRoute.delete("/delete/:user", async (req, res) => {
  const deletedUser = await User.deleteOne({
    username: req.params.user,
  });
  res.json({
    Deleted: "User has been deleted",
    user: deletedUser,
  });
});

module.exports = adminRoute;
