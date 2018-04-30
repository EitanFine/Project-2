// api-routes.js - this file offers a set of routes for displaying and saving data to the db

// Dependencies
var db = require("../models");
var Sequelize = require("sequelize");
var passport = require("../config/passport")

// Routes

module.exports = function(app) {
  //all items in the database
  app.get("/api/all", function(req, res) {
    db.Item.findAll({}).then(function(results) {
      res.json(results);
    });
  });



  //all items with certain category
  // app.get("/api/category/:category", function(req, res) {
  //   db.Category.findAll({
  //     where: {
  //       categoryname: req.params.category
  //     }
  //   }).then(function(result) {
  //     res.json(result);
  //   });
  // });
  var catNumber;
  app.get("/api/category/:category", function(req, res) {
    db.Category.findAll({
      where: {
        categoryName: req.params.category
      }
    }).then(function(result) {
        catNumber = result[0].dataValues.id;
      }).then(function(){
        db.Item.findAll({
          where: {
            itemcatId: catNumber
          }
        })
          .then(function(newresult) {
            res.json(newresult);
          });;
      })
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
  app.post("/api/newItem", function(req, res) {
    db.Item.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/newUser", function(req, res) {
    db.User.create(req.body).then(function(result) {
      res.json(result);
    });
  });
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/");
  });
  
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      creditCard: req.body.creditCard,
      streetAddress: req.body.streetAddress,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode
      
    }).then(function (dbUser) {
      console.log(dbUser.isNewRecord);
      res.json(dbUser.isNewRecord);
    }).catch(function (err) {
      console.log(err);
      res.send(false);
      // res.status(422).json(err.errors[0].message);
    });
  });
  
  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
  
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.User) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.User.email,
        id: req.User.id
      });
    }
  });
  };
  // // Add sequelize code to delete a book
  // app.post("/api/delete", function(req, res) {
  //   db.Item.destroy({
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function(result){
  //     res.end();
  //   });
  // });
