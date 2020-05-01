const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let User = new Schema({
  user_username: {
    type: String,
  },
  user_id: {
    type: String,
  },
  user_password: {
    type: String,
  },
  user_email: {
    type: String,
  },
});

module.exports = mongoose.model("User", User);
