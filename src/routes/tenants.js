const express = require('express');
const router = express.Router();
const requireAuth = require('../config/auth');
const Tenant = require('../models/Tenant');
const User = require('../models/User');

router.get('/tenants', requireAuth, (req, res) => {
  Tenant.find()
    .then(tenants => {
      res.status(200).send({tenants: tenants, loggedIn: true});
    })
    .catch(err => {
      console.log(err);
    })
});



router.post('/tenants', requireAuth, (req, res) => {
  if(req.body.type && req.body.type === 'findOne') {
    const { email } = req.body;
    Tenant.findOne({email: email})
      .then(tenant => {
        if(tenant) {
          res.status(200).send({ tenant })
        } else {
          res.send(null)
        }
      })
      .catch(err => console.log(err));
  } else {
    const {
      first_name,
      last_name,
      email,
      phone,
      dl_number,
      dl_state,
      address1,
      address2,
      city,
      state,
      zipcode,
      ref_name,
      ref_phone,
      start_date,
      end_date,
      why_left
    } = req.body;
    Tenant.create({
      first_name,
      last_name,
      email,
      phone,
      previous_address: {
        address1,
        address2,
        city,
        state,
        zipcode,
        ref_name,
        ref_phone,
        start_date,
        end_date,
        why_left
      },
      dl_number,
      dl_state,
      user: {
        email,
        name: first_name
      }
    })
      .then(tenant => {
        res.status(200).send({tenant:tenant});
      })
      .catch(err => {
        console.log(err);
      })
  }

});

module.exports = router;
