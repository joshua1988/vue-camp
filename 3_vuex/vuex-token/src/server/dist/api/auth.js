"use strict";

// libs
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const router = require('express').Router(); // modules


const SECRET_KEY = 'vuex-with-token';

const passport = require('../passport.js');

const UserModel = require('../models/UserModel.js'); // router


router.post('/login', (req, res) => {
  // find the user
  UserModel.findOne({
    username: req.body.username
  }).then(user => {
    // non registered user
    if (!user) {
      res.status(401).send('Authentication failed. User not found.');
    }

    bcrypt.compare(req.body.password, user.password, (error, result) => {
      if (error) {
        res.status(500).send('Internal Server Error');
      }

      if (result) {
        // create token with user info
        const payload = {
          username: user.username,
          _id: user._id
        };
        const token = jwt.sign(payload, SECRET_KEY); // return the information including token as JSON

        const loggedInUser = {
          username: user.username,
          nickname: user.nickname
        };
        res.status(200).json({
          success: true,
          user: loggedInUser,
          message: 'Login Success',
          token: token
        });
      } else {
        res.status(401).json('Authentication failed. Wrong password.');
      }
    });
  }).catch(error => {
    res.status(500).json('Internal Server Error');
    throw error;
  });
});
router.post('/signup', (req, res) => {
  const {
    username,
    password,
    nickname
  } = req.body; // encrypt password
  // NOTE: 10 is saltround which is a cost factor

  bcrypt.hash(password, 10, (error, hashedPassword) => {
    if (error) {
      return res.status(500).json({
        error
      });
    } else {
      const newUser = new UserModel({
        username,
        password: hashedPassword,
        nickname
      });
      newUser.save((error, saved) => {
        if (error) {
          console.log(error);
        } else {
          console.log(saved);
          res.send(saved);
        }
      });
    }
  });
});
module.exports = router;