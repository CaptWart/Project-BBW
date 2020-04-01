const db = require("../models");

module.exports = function(app) {
  // GET route for retrieving all of the food by a single user
  app.get("/api/food/total", function(req, res) {
    // Join the "users" table to include the user info
    db.food.findAll({
      include: {
        model: db.user
      },
      where: {
        userId: req.query.userId
      }
    }).then(function(dbFood) {
      res.json(dbFood);
    });
  });

  // GET route for retrieving food data by a single user and a single day
  app.get("/api/food", function(req, res) {
    // Join the "users" table to include the user info
    db.food.findAll({
      include: {
        model: db.user
      },
      where: {
        userId: req.query.userId,
        day: req.query.day
      }
    }).then(function(dbFood) {
      res.json(dbFood);
    });
  });

  // POST route for saving a new food
  app.post("/api/food", function(req, res) {
    db.food.create(req.body).then(function(dbFood) {
      res.json(dbFood);
    });
  });

  // DELETE route for deleting food
  app.delete("/api/food", function(req, res) {
    db.food.destroy({
      where: {
        id: req.body.id
      }
    }).then(function(dbFood) {
      res.json(dbFood);
    });
  });

  // PUT route for updating food
  app.put("/api/food", function(req, res) {
    db.food.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbFood) {
      res.json(dbFood);
    });
  });
};