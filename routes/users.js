// routes/users.js
var db = require("../models");
const express = require('express');
const secured = require('../lib/middleware/secured');
const router = express.Router();
var path = require("path");

/* GET user profile. From Auth0*/
router.get('/user', secured(), function (req, res, next) {
  const { _raw, _json, ...userProfile } = req.user;
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
      });
      // This is how I use handlebars
      res.render('create',{
        userProfile,
      });
    }
    else if ( dbUser.profile != 1 ){
      console.log(dbUser)
      res.render('create',{
        userProfile,
      });
    }
      else{
      const userInfo = { 
        id: dbUser.id,
        firstname: dbUser.firstname,
        lastname: dbUser.lastname,
        description: dbUser.description,
        days: dbUser.days
      }
          // This is how I use handlebars
      res.render('user', {
        userInfo,
        title: 'Profile page'
      });
    }
  });


});


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