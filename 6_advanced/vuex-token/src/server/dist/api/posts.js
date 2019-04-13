"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _PostModel = _interopRequireDefault(require("../models/PostModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// router init
const router = (0, _express.Router)();
router.post('/', async (req, res) => {
  try {
    const doc = await _PostModel.default.create(_objectSpread({}, req.body, {
      createdBy: req.user._id
    }));
    res.status(201).json({
      data: doc
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: 'sth wrong',
      error
    });
  }
});
router.get('/', async (req, res) => {
  try {
    const docs = await _PostModel.default.find({
      createdBy: req.user._id
    }).lean().exec();
    res.status(200).json({
      posts: docs
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: 'sth wrong',
      error
    });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const doc = await _PostModel.default.findOne({
      createdBy: req.user._id,
      _id: req.params.id
    }).lean().exec();

    if (!doc) {
      return res.status(400).json({
        message: 'The data is not found'
      });
    }

    res.status(200).json(_objectSpread({}, doc));
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: 'sth wrong',
      error
    });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const updatedDoc = await _PostModel.default.findOneAndUpdate({
      createdBy: req.user._id,
      _id: req.params.id
    }, req.body, {
      new: true
    }).lean().exec();

    if (!updatedDoc) {
      return res.status(400).json({
        message: 'cannot update the data'
      });
    }

    res.status(200).json(_objectSpread({}, updatedDoc));
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: 'sth wrong',
      error
    });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const removed = await _PostModel.default.findOneAndRemove({
      createdBy: req.user._id,
      _id: req.params.id
    }).lean().exec();

    if (!removed) {
      return res.status(400).json({
        message: 'cannot remove the data'
      });
    }

    return res.status(200).json(_objectSpread({}, removed));
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: 'sth wrong',
      error
    });
  }
});
var _default = router;
exports.default = _default;