const express = require('express');
const router = express.Router();
const User = require('../models/User');
const UrlFrequency = require('../models/UrlFrequency');

router.get('/users', function(req, res, next) {
  User.find('').then(function(users) {
    res.send(users);
  });
});

router.post('/users', function(req, res, next) {
  User.create(req.body).then(function(user) {
    res.send(user);
  }).catch(next);
});

router.put('/users/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(user){
    res.send(user);
  });
});

router.delete('/users/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id).then(function(user){
    res.send(user);
  });
});

router.get('/urlupdate', function(req, res, next) {
  var uid = req.user_id;
  var urldata = req.urldata;
  User.findById(uid).then(function(user)){
    if ( user != undefined ) {
      //TODO: convert urldata to list and update databse

      //UrlFrequency.find('').then(function(UrlFrequency) {
        //res.send(UrlFrequency);
      });
    }
  }

});

router.post('/url', function(req, res, next) {
  UrlFrequency.create(req.body).then(function(UrlFrequency) {
    res.send(UrlFrequency);
  }).catch(next);
});

router.put('/url/:id', function(req, res, next) {
  UrlFrequency.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(UrlFrequency){
    res.send(UrlFrequency);
  });
});

router.delete('/url/:id', function(req, res, next) {
  UrlFrequency.findByIdAndRemove(req.params.id).then(function(UrlFrequency){
    res.send(UrlFrequency);
  });
});



module.exports = router;
