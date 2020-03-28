const db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the users
  app.get("/api/users", function(req, res) {
    db.user.findAll({
      include: [
        {model: db.fitness},
        {model: db.food},
        {model: db.money}
      ]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // GET route for retrieving user data by a single user
  app.get("/api/users/:id", function(req, res) {
    db.user.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // POST route for adding a user
  app.post("/api/users", function(req, res) {
    db.user.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // DELETE route for deleting user
  app.delete("/api/users/:id", function(req, res) {
    db.user.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // PUT route for updating user
  app.put("/api/users", function(req, res) {
    db.user.update(req.body,{
      where: {
        id: req.body.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};