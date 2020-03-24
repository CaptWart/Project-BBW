var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    console.log(db);
    console.log("hi");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // david_test route loads david_test.html
  app.get("/david_test", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/test/david_test/david_index.html"));
  });

  // emi_test route loads emi_test.html
  app.get("/emi_test", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/test/emi_test/emi_everythingTracker.html"));
  });
};