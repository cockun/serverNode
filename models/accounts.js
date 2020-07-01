const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AccountsSchema = new Schema({
  name: String,
  password: String,
  fullname: String,
  phone: Number,
  address: String,
  author: String,
});
module.exports = mongoose.model("Accounts", AccountsSchema);
