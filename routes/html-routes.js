var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // david_test route loads david_test.html
  app.get("/david_test", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/david_test.html"));
  });

  // emi_test route loads emi_test.html
  app.get("/emi_test", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/emi_test.html"));
  });
};