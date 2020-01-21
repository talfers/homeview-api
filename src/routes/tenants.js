const express = require('express');
const router = express.Router();
const requireAuth = require('../config/auth');
const Tenant = require('../models/Tenant');

router.get('/tenants', requireAuth, (req, res) => {
  Tenant.find()
    .then(tenants => {
      res.status(200).send({tenants: tenants, loggedIn: true});
    })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;
