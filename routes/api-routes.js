// api-routes.js - this file offers a set of routes for displaying and saving data to the db

// Dependencies
var db = require("../models");
var Sequelize = require("sequelize");

// Routes

module.exports = function(app) {
  //all items in the database
  app.get("/api/all", function(req, res) {
    db.Item.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  //all items with certain category
  app.get("/api/category/:category", function(req, res) {
    db.Category.findAll({
      where: {
        categoryname: req.params.category
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  //all items by a certain user
  app.get("/api/user/:user", function(req, res) {
    db.User.findAll({
      where: {
        name: req.params.user
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  //all items in use
  app.get("/api/inuse", function(req, res) {
    db.Item.findAll({
      where: {
        inUse: 1
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // view things less than some price
  app.get("/api/price/:price", function(req, res) {
    db.Item.findAll({
      where: {
        itemprice: {
          [Sequelize.Op.lte]: req.params.price
        }
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // add a new item
  app.post("/api/new", function(req, res) {
    db.Item.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  // // Add sequelize code to delete a book
  // app.post("/api/delete", function(req, res) {
  //   Book.destroy({
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function(result){
  //     res.end();
  //   });
  // });
};
