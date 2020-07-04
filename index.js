const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");

var Products = require("./routers/products");
var Bills = require("./routers/bills");
var Accounts = require("./routers/accounts");

//var Categories = require("./routers/categories");

const { json } = require("express");
var bill = require("./models/bills");

const app = express();
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://concockun:01635263168aA@cluster0.zv1ac.mongodb.net/Shop?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/Account", Accounts);
app.use("/Products", Products);
app.use("/Bill", Bills);

//app.use("/", Categories);
app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + "not found" });
});

// var product = require("./models/products");
// product.create();

app.listen(process.env.PORT || 4000, () =>
  console.log("Server running on port 4000!")
);
