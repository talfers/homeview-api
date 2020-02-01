const express = require('express');
const router = express.Router();
const requireAuth = require('../config/auth');
const Home = require('../models/Home');
const User = require('../models/User');

router.get('/homes', requireAuth, (req, res) => {
  Home.find()
    .then(homes => {
      res.status(200).send({homes: homes, loggedIn: true});
    })
    .catch(err => {
      console.log(err);
    })
});



router.post('/homes', requireAuth, (req, res) => {
  if(req.body.type && req.body.type === 'findOne') {
    const { id } = req.body;
    Home.findOne({id: id})
      .then(home => {
        if(home) {
          res.status(200).send({ home })
        } else {
          res.send(null)
        }
      })
      .catch(err => console.log(err));
  } else {

  }
});

module.exports = router;
