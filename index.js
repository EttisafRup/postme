console.clear();
require("dotenv").config();
// != Express Setup
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const checkAdmin = require("./middlewares/checkAdmin");
app.use("/image", express.static("./uploads/"));

// ?>>= Enable CORS
const cors = require("cors");
app.use(cors());

// != DOTENV IMPORTS
const PORT = process.env.PORT || 4000;
const MONGODB_URL = process.env.MONGODB_URL;

// != Route Setups
const userRoute = require("./controller/user.Route");
app.use(userRoute);
const adminRoute = require("./controller/admin.Route");
app.use("/admin", checkAdmin, adminRoute);

// => MongoDB Connection
const mongoose = require("mongoose");

mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err.message));

// !> Error Handler
const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);

app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
