//dependencies
var express = require("express");
var session = require("express-session");
var passport = require("../config/passport");
var router = express.Router();
var db = require("../models");
var Sequelize = require("sequelize");

<<<<<<< HEAD
router.get("/signUp", function (req, res) {
=======
//sign up page
router.get("/signUp", function(req, res) {
>>>>>>> 48d5b83d11a859e242f90c66e5b1a069c89c2279
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
          if (element.itemImage !== null) {
            element.itemImage = new Buffer(element.itemImage).toString(
              "base64"
            );
          }
        }
        anotherObject.Item = results;
        anotherObject.user = req.user ? req.user.id : null;
<<<<<<< HEAD

        // console.log("ANOTHER OBJECT: ", anotherObject);
        // console.log("USER: ");

=======
>>>>>>> 48d5b83d11a859e242f90c66e5b1a069c89c2279
        res.render("signUp", anotherObject);
      })
    );
});

<<<<<<< HEAD
router.get("/login", function (req, res) {
=======
//login page
router.get("/login", function(req, res) {
>>>>>>> 48d5b83d11a859e242f90c66e5b1a069c89c2279
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
          if (element.itemImage !== null) {
            element.itemImage = new Buffer(element.itemImage).toString(
              "base64"
            );
          }
        }
        anotherObject.Item = results;
        anotherObject.user = req.user ? req.user.id : null;
<<<<<<< HEAD

        // console.log("ANOTHER OBJECT: ", anotherObject);
        // console.log("USER: ");

=======
>>>>>>> 48d5b83d11a859e242f90c66e5b1a069c89c2279
        res.render("logIn", anotherObject);
      })
    );
});

//main page 
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
          if (element.itemImage !== null) {
            element.itemImage = new Buffer(element.itemImage).toString(
              "base64"
            );
          }
        }
        anotherObject.Item = results;
        anotherObject.user = req.user ? req.user.id : null;
        res.render("index", anotherObject);
      })
    );
});

//new listing
var hbsObject;
router.get("/newlisting", function (req, res) {
  db.Category.findAll({})
    .then(function (result) {
      hbsObject = {
        categories: result
      };
    })
    .then(
      db.User.findAll({}).then(function (results) {
        hbsObject.user = req.user ? req.user.id : null;
        res.render("newListing", hbsObject);
      })
    );
});

<<<<<<< HEAD
router.post("/newlisting", function (req, res) {
  db.Item.create(req.body).then(function (result) {
=======
//post the new listing
router.post("/newlisting", function(req, res) {
  db.Item.create(req.body).then(function(result) {
>>>>>>> 48d5b83d11a859e242f90c66e5b1a069c89c2279
    res.redirect("/");
  });
});

//individual item page
var infoObj;
router.get("/iteminfo1/:id", function (req, res) {
  // need to wrap the binary image
  db.Item.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (result) {
    db.User.findOne({
      where: {
        id: result.itemUserId
      }
    }).then(function (resultU) {
      db.RentedDates.findAll({
        where: {
          rentItemId: result.id
        }
      }).then(function (resultR) {
        var dates = [];
        for (var i = 0; i < resultR.length; i++) {
          dates.push(resultR[i].rentedDate);
        }
        if (result.itemImage !== null) {
          result.itemImage = new Buffer(result.itemImage).toString("base64");
        }
        infoObj = {
          itemId: result.id,
          itemDescription: result.itemDescription,
          itemPrice: result.itemPrice,
          itemName: result.itemName,
          itemImage: result.itemImage,
          itemURL: result.itemURL,
          name: resultU.name,
          email: resultU.email,
          streetAddress: resultU.streetAddress,
          city: resultU.city,
          state: resultU.state,
          zipcode: resultU.zipcode,
          rentedDates: dates
        };
        res.render("itemInfo", infoObj);
      });
      infoObj = [];
    });

    router.post("/iteminfo1/:id", function (req, res) {
      db.RentedDates.create(req.body).then(function (result) {
        console.log("meh")
      });
    });


    //   if (result.itemImage !== null) {
    //     result.itemImage = new Buffer(result.itemImage).toString('base64');
    //   }
    //   /* <h4>Address: {{this.streetAddress}}, {{this.city}}, {{this.state}}, {{this.zipcode}}</h4> */

    //   infoObj = {
    //     itemDescription: result.itemDescription,
    //     itemPrice: result.itemPrice,
    //     itemName: result.itemName,
    //     itemImage: result.itemImage,
    //     name: resultU.name,
    //     email: resultU.email,
    //     streetAddress: resultU.streetAddress,
    //     city: resultU.city,
    //     state: resultU.state,
    //     zipcode: resultU.zipcode

    //   };
    //   res.render("itemInfo", infoObj);
    // })



  });






  //   console.log(result.itemDescription);
  //   var element = result[0];
  // .done(function (result) {
  //   if (result.itemImage !== null) {
  //     result.itemImage = new Buffer(result.itemImage).toString('base64');
  //   }
  //   infoObj = {
  //     itemDescription: result.itemDescription,
  //     itemPrice: result.itemPrice,
  //     itemName: result.itemName,
  //     itemImage: result.itemImage

  //   };
  //   console.log("Before render: ", result.itemDescription);
  //   res.render("itemInfo", infoObj);
  //   console.log("After render: ", result.itemDescription);
  // });
});

<<<<<<< HEAD


//manager

router.get("/manageItems", function (req, res) {
  var hbsObject = {
    userId: req.user.id
  };
  console.log("MANAGE ITEMS ROUTE -> USER: ", req.user);

  db.Item.findAll({
    where: {
      itemUserId: req.user.id
    }
  }).then(function (results) {
    console.log("After renders", req.user)

    hbsObject.Item = results;

    res.render("manageItems", hbsObject);
  })
});

router.delete("/manageItems/id/:id", function(req, res) {
  db.Item.destroy ({
    where : {
      id : req.params.id
    }
  }).then(function(data){
    res.json(data);
  })
});


router.put("/manageItems", function(req, res){


});




//     .then(
//       db.User.findAll({}).then(function(results) {
//         hbsObject.user = req.user ? req.user.id : null;
//         res.render("newListing", hbsO`bject);
//       })
//     );
// });

// router.post("/newlisting", function(req, res) {
//   db.Item.create(req.body).then(function(result) {
//     res.redirect("/");
//   });
// });

var infoObj;
router.get("/iteminfo1/:id", function (req, res) {
  // need to wrap the binary image
  console.log("TEST");
  console.log(req.params.id);
  // console.log(req);
  db.Item.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (result) {
    db.User.findOne({
      where: {
        id: result.itemUserId
      }
    }).then(function (resultU) {
      db.RentedDates.findAll({
        where: {
          rentItemId: result.id
        }
      }).then(function (resultR) {
        var dates = [];
        for (var i = 0; i < resultR.length; i++) {
          dates.push(resultR[i].rentedDate);
        }
        if (result.itemImage !== null) {
          result.itemImage = new Buffer(result.itemImage).toString("base64");
        }
        console.log("RENTED DATES: ", dates);
        infoObj = {
          itemId: result.id,
          itemDescription: result.itemDescription,
          itemPrice: result.itemPrice,
          itemName: result.itemName,
          itemImage: result.itemImage,
          name: resultU.name,
          email: resultU.email,
          streetAddress: resultU.streetAddress,
          city: resultU.city,
          state: resultU.state,
          zipcode: resultU.zipcode,
          rentedDates: dates
        };
        res.render("itemInfo", infoObj);
      });
      infoObj = [];
    });

    router.post("/iteminfo1/:id", function (req, res) {
      db.RentedDates.create(req.body).then(function (result) {
        console.log("meh")
      });
    });

  });
});

=======
//sort by category
>>>>>>> 48d5b83d11a859e242f90c66e5b1a069c89c2279
var catObj = {};
var catNumber;
router.get("/category/:category", function (req, res) {
  db.Category.findAll({
    where: {
      categoryName: req.params.category
    }
  })
    .then(function (result) {
      catNumber = result[0].dataValues.id;
    })
    .then(function () {
      db.Item.findAll({
        where: {
          itemcatId: catNumber
        }
      })
        .then(function (newresult) {
          catObj.Item = newresult;
        })
        .then(function () {
          db.Category.findAll({}).then(function (anotherresult) {
            catObj.categories = anotherresult;
            res.render("index", catObj);
          });
        });
    });
});

<<<<<<< HEAD
router.get("/about", function (req, res) {
  db.Category.findAll({}).then(function (result) {
=======
//about page
router.get("/about", function(req, res) {
  db.Category.findAll({}).then(function(result) {
>>>>>>> 48d5b83d11a859e242f90c66e5b1a069c89c2279
    anotherObject = {
      categories: result
    };
    res.render("about", anotherObject);
  });
});

<<<<<<< HEAD
router.get("/howitworks", function (req, res) {
  db.Category.findAll({}).then(function (result) {
=======
//howitworks page
router.get("/howitworks", function(req, res) {
  db.Category.findAll({}).then(function(result) {
>>>>>>> 48d5b83d11a859e242f90c66e5b1a069c89c2279
    anotherObject = {
      categories: result
    };
    res.render("howitworks", anotherObject);
  });
});

router.use(passport.initialize());
router.use(passport.session());

module.exports = router;
//require this back in server.js
