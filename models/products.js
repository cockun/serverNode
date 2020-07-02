const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productsSchema = new Schema(
  {
    name: String,
    price: Number,
    category: String,
    src: String,
    pirce2: Number,
    description: { type: String, default: "" },
    sold: { type: Number, default: 0 },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Products", productsSchema);
