// routes/users.js
var db = require("../models");
const express = require('express');
const secured = require('../lib/middleware/secured');
const router = express.Router();
var path = require("path");

/* GET user profile. From Auth0*/
router.get('/user', secured(), function (req, res, next) {
  const { _raw, _json, ...userProfile } = req.user;

  console.log("UserId: " + userProfile.user_id)

  db.user.findOne({
    where: {
      auth0: userProfile.user_id
    }
  }).then(function(dbUser) {
    // We have access to the todos as an argument inside of the callback function
    // const info = JSON.stringify(dbUser);
    // const infojson = JSON.parse(info);
    // console.log(infojson)
    // console.log(infojson.id)
    // console.log(infojson[0].id)
    //console.log(dbUser)
    if (dbUser === null){
      res.sendFile(path.join(__dirname, "../public/test/david_test/david_index.html"));
    }
    else{
      res.render('user', {
        userProfile: JSON.stringify(userProfile, null, 2),
        title: 'Profile page'
      });
    }
  });


});

/* Get user profile from DB*/
router.get('/userdb', function (req, res, next){


})

/* Add user information to DB*/
router.post('/usercreate', function (req, res, next){

})
module.exports = router;