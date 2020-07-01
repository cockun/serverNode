const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categoriesSchema = new Schema({
  src: String,
  category:String,
});
module.exports = mongoose.model("Categories", categoriesSchema);
