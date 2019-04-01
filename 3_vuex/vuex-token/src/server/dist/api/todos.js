"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

const controller = (req, res) => {
  res.send({
    message: 'hi'
  });
};

const router = (0, _express.Router)();
router.route('/').get(controller).post(controller);
router.route('/:id').put(controller).delete(controller).get(controller);
var _default = router;
exports.default = _default;