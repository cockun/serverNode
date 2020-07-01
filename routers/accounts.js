var express = require("express");
var Accounts = require("../models/accounts");

var accountRouter = express.Router();

accountRouter
  .route("/accounts")
  .post(function (req, res) {
    var item = new Accounts(req.body);

    item.save();

    res.status(201).send(item);
  })
  .get(function (req, res) {
    Accounts.find(function (error, items) {
      if (error) {
        res.status(500).send(error);
        return;
      }
      res.json(items);
    });
  });

accountRouter
  .route("/accounts/:accountID")
  .get(function (req, res) {
    var accountID = req.params.accountID;

    Accounts.findOne({ _id: accountID }, function (error, item) {
      if (error) {
        res.status(500).send(error);
        return;
      }

      res.json(item);
    });
  })
  .put(function (req, res) {
    var accountID = req.params.accountID;

    Accounts.findOne({ _id: accountID }, function (error, item) {
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
        message: "Accounts with id " + accountID + " was not found.",
      });
    });
  })

.delete(function (req, res) {



  var accountID = req.params.accountID;

  Accounts.findOne({ _id: accountID }, function (error, item) {

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

module.exports = accountRouter;
