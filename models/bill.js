const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var billsSchema = new Schema({
  billinfo: Array,
  total: Number,
  date: Date,
  fullname: String,
  phone: Number,
  address: {type:String,default:''},
  name: {type:String,default:''},
});
module.exports = mongoose.model("Bills", billsSchema);
