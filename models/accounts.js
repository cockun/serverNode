const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AccountsSchema = new Schema({
  name: { type: String },
  password: String,
  fullname: String,
  phone: Number,
  address: { type: String, default: "" },
  author: { type: String, default: "1" },
});
module.exports = mongoose.model("Accounts", AccountsSchema);
