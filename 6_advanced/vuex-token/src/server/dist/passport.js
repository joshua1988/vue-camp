"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = _interopRequireDefault(require("passport-local"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TEMP_USER = {
  username: 'admin',
  password: 1234
};

_passport.default.use(new _passportLocal.default.Strategy(TEMP_USER, function (username, password, done) {
  User.findOne({
    username: username
  }, function (err, user) {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false, {
        message: 'Incorrect username.'
      });
    }

    if (!user.validPassword(password)) {
      return done(null, false, {
        message: 'Incorrect password.'
      });
    }

    return done(null, user);
  });
}));

module.exports = _passport.default;