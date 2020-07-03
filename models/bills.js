const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var billsSchema = new Schema({
  billinfo: Array,
  total: Number,
  date: String,
  fullname: String,
  phone: String,
  address: {type:String,default:''},
  name: {type:String,default:''},
},{timestamps:true});
module.exports = mongoose.model("Bills", billsSchema);
