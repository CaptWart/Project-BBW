const db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the fitnesses by all users
  app.get("/api/fitnesses", function(req, res) {
    const query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Join the "users" table to include the user info
    db.fitness.findAll({
    //   include: [db.User],
      where: query
    }).then(function(dbFitness) {
      res.json(dbFitness);
    });
  });

  // GET route for retrieving fitnesses by a single fitness
  app.get("/api/fitnesses/:id", function(req, res) {
    // Join the "users" table to include the user info
    db.fitness.findOne({
    //   include: {
    //     model: db.User
    //   },
      where: {
        id: req.params.id
      }
    }).then(function(dbFitness) {
      res.json(dbFitness);
    });
  });

  // POST route for saving a new fitness
  app.post("/api/fitnesses", function(req, res) {
    db.fitness.create(req.body).then(function(dbFitness) {
      res.json(dbFitness);
    });
  });

  // DELETE route for deleting fitness
  app.delete("/api/fitnesses/:id", function(req, res) {
    db.fitness.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbFitness) {
      res.json(dbFitness);
    });
  });

  // PUT route for updating fitness
  app.put("/api/fitnesses", function(req, res) {
    db.fitness.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbFitness) {
      res.json(dbFitness);
    });
  });
};