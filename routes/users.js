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

    if (dbUser === null){
      db.user.create({
        auth0: userProfile.user_id,
        email: userProfile.displayName
      }).then(newUser => {
        console.log(`New user ${newUser.auth0}, with id ${newUser.email} has been created.`);
      });
      res.render('create',{
        userProfile,
      });
    }
    else{
      res.render('user', {
        userProfile,
        title: 'Profile page'
      });
    }
  });


});

/* Get user profile from DB*/
router.get('/userdb', function (req, res, next){


})

/* Add user information to DB*/
router.post('/addprofile', function (req, res, next){
  db.user.update(
    req.body,
    { 
    where: {
      email: req.body.email
    }
  }).then(function(dbUser) {
  });
  res.redirect(200, '/user');
})
module.exports = router;