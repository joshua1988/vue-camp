"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateUser = exports.verifyToken = exports.newToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = require("../config");

var _UserModel = _interopRequireDefault(require("../models/UserModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// json related
// modules
const newToken = user => {
  const payload = {
    username: user.username,
    _id: user._id
  };
  return _jsonwebtoken.default.sign(payload, _config.SECRET_KEY, {
    expiresIn: _config.EXPIRATION_DATE
  });
};

exports.newToken = newToken;

const verifyToken = token => new Promise((resolve, reject) => {
  _jsonwebtoken.default.verify(token, _config.SECRET_KEY, (err, payload) => {
    if (err) return reject(err);
    resolve(payload);
  });
}); // middleware


exports.verifyToken = verifyToken;

const authenticateUser = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: 'token must be included'
    });
  }

  const token = req.headers.authorization;
  let payload;

  try {
    payload = await verifyToken(token);
  } catch (e) {
    return res.status(401).json({
      message: 'token is invalid'
    });
  }

  const user = await _UserModel.default.findById(payload._id).select('-password').lean().exec();

  if (!user) {
    return res.status(401).json({
      message: 'user is not found'
    });
  }

  req.user = user;
  next();
};

exports.authenticateUser = authenticateUser;