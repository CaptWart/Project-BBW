const db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the food by all users
  app.get("/api/food", function(req, res) {
    const query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Join the "users" table to include the user info
    db.food.findAll({
      include: [db.user],
      where: query
    }).then(function(dbFood) {
      res.json(dbFood);
    });
  });

  // GET route for retrieving food by a single food
  app.get("/api/food/:id", function(req, res) {
    // Join the "users" table to include the user info
    db.food.findOne({
      include: {
        model: db.user
      },
      where: {
        id: req.params.id
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
  app.delete("/api/food/:id", function(req, res) {
    db.food.destroy({
      where: {
        id: req.params.id
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