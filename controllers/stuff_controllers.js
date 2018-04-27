//require all the models
//require whatetver is holding sequalize and express
// in server.js, require the following:
// var routes = require("./controllers/stuff_controllers.js");
// applicationCache.use(routes);

//i dont get it are we just using this instead of html-routes

var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
  db.Item.findAll(function(data) {
    var hbsObject = {
      // key depends on what we use in handlebars
      stuff: data
    };
    //first argument also depends on handlebars
    res.render("index", hbsObject);
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
