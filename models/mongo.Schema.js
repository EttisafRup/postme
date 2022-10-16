const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  avatar: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  facebook: {
    type: String,
    rquals: true,
  },
});

module.exports = Schema;
