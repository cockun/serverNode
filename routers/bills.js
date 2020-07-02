var express = require("express");
var Bills = require("../models/bills");

var billRouter = express.Router();

billRouter
  .route("/")
  .post(function (req, res) {
    var item = new Bills(req.body);

    item.save();

    res.status(201).send(item);
  })
  .get(function (req, res) {
    Bills.find(function (error, items) {
      if (error) {
        res.status(500).send(error);
        return;
      }
      res.json(items);
    });
  });

billRouter
  .route("/:billID")
  .get(function (req, res) {
    var billID = req.params.billID;

    Bills.findOne({ _id: billID }, function (error, item) {
      if (error) {
        res.status(500).send(error);
        return;
      }

      res.json(item);
    });
  })
  .put(function (req, res) {
    var billID = req.params.billID;

    Bills.findOne({ _id: billID }, function (error, item) {
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
        message: "Bills with id " + billID + " was not found.",
      });
    });
  })

  .delete(function (req, res) {
    var billID = req.params.billID;

    Bills.findOne({ _id: billID }, function (error, item) {
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
billRouter.route("/get/length").get(function (req, res) {
  Bills.find().exec((err, items) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(items.length);
  });
});
billRouter.route("/search/:name/:value").get(function (req, res) {
  let name = req.params.name;
  let value = req.params.value;
  Bills.find({ [name]: new RegExp(value, "i") }, function (err, doc) {
    res.json(doc);
  });
});

module.exports = billRouter;
