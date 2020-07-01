const express = require("express");

const mongoose = require("mongoose");
var Products = require("./routers/products");
var Bills = require("./routers/bills");
var bodyParser = require("body-parser");
var Accounts = require("./routers/accounts");
const { json } = require("express");
var bill = require("./models/bills");

const app = express();

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

app.use("/", Accounts);
app.use("/", Products);
app.use("/", Bills);

app.listen(process.env.PORT || 3000, () =>
  console.log("Server running on port 3000!")
);
