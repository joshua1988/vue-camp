"use strict";

const router = require('express').Router();

const controller = (req, res) => {
  res.send({
    message: 'hi'
  });
};

router.route('/').get(controller).post(controller);
router.route('/:id').put(controller).delete(controller).get(controller);
module.exports = router;