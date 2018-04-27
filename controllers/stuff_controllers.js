//require all the models
//require whatetver is holding sequalize and express
// in server.js, require the following:
// var routes = require("./controllers/stuff_controllers.js");
// applicationCache.use(routes);

//i dont get it are we just using this instead of html-routes

var express = require("express");
var router = express.Router();
var db = require("../models");
var Sequelize = require("sequelize");
//var btoa = require("btoa-atob");

var anotherObject;
router.get("/", function (req, res) {
  // need to wrap the binary image
  db.Category.findAll({})
    .then(function (result) {
      anotherObject = {
        categories: result
      };
    })
    .then(
      db.Item.findAll({}).then(function (results) {
        for (let i = 0; i < results.length; i++) {
          //convert the binary image into something handlebars image can understand
          const element = results[i];
          element.itemImage = new Buffer(element.itemImage).toString('base64');
        }
        anotherObject.Item = results;
        res.render("index", anotherObject);
      })
    );
});

router.get("/newlisting", function (req, res) {
  res.render("newListing");
});

router.post("/newlisting", function (req, res) {
  db.Item.create(req.body).then(function (result) {
    res.redirect("/");
  });
});

// router.get("/:catId", function(req, res) {
//   db.Item.findAll(function(data) {
//     where: {
//       catId: req.params.catId;
//     }
//     var hbsObject = {
//       // key depends on what we use in handlebars
//       stuff: data
//     };
//     //first argument also depends on handlebars
//     res.render("iteminfo", hbsObject);
//   });
// });

// router.post("/", function (req, res) {
//   burger.create(req.body.name, function (
//     result
//   ) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/", function (req, res) {
//   burger.update(req.body.id, req.body.choice, function (result) {
//     res.json({ id: result.insertId });
//   })
// });

module.exports = router;
//require this back in server.js
