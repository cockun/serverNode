const express = require("express");

const mongoose = require("mongoose");
var Products = require("./models/products");

var Schema = mongoose.Schema;
// Create Express app
const app = express();

app.get("/Products", function (req, res) {
  Products.find().exec((err, product) => {
    res.send(product);
  });
});

mongoose.connect("mongodb://localhost/myData", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Products.create({
  name: "coc",
  price: 3232,
  category: "mouse",
  src: "kfdjf",
  price2: 32323,
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Server running on port 3000!")
);
