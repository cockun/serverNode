var express = require("express");
var Categories = require("../models/categories");

var categoryRouter = express.Router();

categoryRouter
  .route("/categories")
  .post(function (req, res) {
    var item = new Categories(req.body);

    item.save();

    res.status(201).send(item);
  })
  .get(function (req, res) {
    Categories.find(function (error, items) {
      if (error) {
        res.status(500).send(error);
        return;
      }
      res.json(items);
    });
  });

categoryRouter
  .route("/categories/:categoryID")
  .get(function (req, res) {
    var categoryID = req.params.categoryID;

    Categories.findOne({ _id: categoryID }, function (error, item) {
      if (error) {
        res.status(500).send(error);
        return;
      }

      res.json(item);
    });
  })
  .put(function (req, res) {
    var categoryID = req.params.categoryID;

    Categories.findOne({ _id: categoryID }, function (error, item) {
      if (error) {
        res.status(500).send(error);
        return;
      }

      if (item) {
        console.log(req.body);
        Object.keys(req.body).map((a) => {
          console.log(a);
          item[a] = req.body[a];
        });

        item.save();

        res.json(item);
        return;
      }

      res.status(404).json({
        message: "Categories with id " + categoryID + " was not found.",
      });
    });
  })

  .delete(function (req, res) {
    var categoryID = req.params.categoryID;

    Categories.findOne({ _id: categoryID }, function (error, item) {
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
            message: "Đã xóa",
          });
        });
      } else {
        res.status(404).json({
          message: "Lôi",
        });
      }
    });
  });

module.exports = categoryRouter;
