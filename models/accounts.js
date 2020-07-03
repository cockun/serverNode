const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AccountsSchema = new Schema({
  name: { type: String },
  password: {type:String,default:"1"},
  fullname: String,
  phone: String,
  address: { type: String, default: "" },
  author: { type: String, default: "1" },
});
module.exports = mongoose.model("Accounts", AccountsSchema);
