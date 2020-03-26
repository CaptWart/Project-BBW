const db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the money by all users
  // app.get("/api/money", function(req, res) {
  //   const query = {};
  //   if (req.query.user_id) {
  //     query.UserId = req.query.user_id;
  //   }
  //   // Join the "users" table to include the user info
  //   db.money.findAll({
  //     include: [db.user],
  //     where: query
  //   }).then(function(dbMoney) {
  //     res.json(dbMoney);
  //   });
  // });

  // GET route for retrieving money by a single money
  // app.get("/api/money/:id", function(req, res) {
  // // Join the "users" table to include the user info
  //   db.money.findOne({
  //     include: {
  //       model: db.user
  //     },
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbMoney) {
  //     res.json(dbMoney);
  //   });
  // });

  // GET route for retrieving all of the money by a single user
  app.get("/api/money", function(req, res) {
    // Join the "users" table to include the user info
    console.log(req.query);
    db.money.findAll({
      include: {
        model: db.user
      },
      where: {
        userId: req.query.userId,
        day: req.query.day
      }
    }).then(function(dbMoney) {
      res.json(dbMoney);
    });
  });

  // POST route for saving a new money
  app.post("/api/money", function(req, res) {
    db.money.create(req.body).then(function(dbMoney) {
      res.json(dbMoney);
    });
  });

  // DELETE route for deleting money
  app.delete("/api/money", function(req, res) {
    db.money.destroy({
      where: {
        id: req.body.id
      }
    }).then(function(dbMoney) {
      res.json(dbMoney);
    });
  });

  // PUT route for updating Money
  app.put("/api/money", function(req, res) {
    db.money.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbMoney) {
      res.json(dbMoney);
    });
  });
};