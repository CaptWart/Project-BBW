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

  app.get("/api/users/:id", function(req, res) {
    db.user.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {model: db.fitness},
        {model: db.food},
        {model: db.money}
      ]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/users", function(req, res) {
    db.user.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/api/users/:id", function(req, res) {
    db.user.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};