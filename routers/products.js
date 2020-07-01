var express = require("express");
var Products = require("../models/products");

var productRouter = express.Router();

productRouter
  .route("/products")
  .post(function (req, res) {
    var item = new Products(req.body);

    item.save();

    res.status(201).send(item);
  })
  .get(function (req, res) {
    Products.find(function (error, items) {
      if (error) {
        res.status(500).send(error);
        return;
      }
      res.json(items);
    });
  });

productRouter
  .route("/products/:productID")
  .get(function (req, res) {
    var productID = req.params.productID;

    Products.findOne({ _id: productID }, function (error, item) {
      if (error) {
        res.status(500).send(error);
        return;
      }

      res.json(item);
    });
  })
  .put(function (req, res) {
    var productID = req.params.productID;

    Products.findOne({ _id: productID }, function (error, item) {
      if (error) {
        res.status(500).send(error);
        return;
      }

      if (item) {
        console.log(req.body);
        Object.keys(req.body).map(a => {
          console.log(a);
          item[a] = req.body[a];
        })
  
        item.save();

        res.json(item);
        return;
      }

      res.status(404).json({
        message: "Products with id " + productID + " was not found.",
      });
    });
  })

.delete(function (req, res) {



  var productID = req.params.productID;

  Products.findOne({ _id: productID }, function (error, item) {

    if (error) {
      res.status(500).send(error);
      return;
    }

    if (item) {
      item.remove(function (error) {

        if (error) {
          res.status(500).send(error);
          return;
        }

        res.status(200).json({
          'message': 'Đã xóa'
        });
      });
    } else {
      res.status(404).json({
        message: 'Lôi'
      });
    }
  });
});

module.exports = productRouter;