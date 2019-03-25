const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const TEMP_USER = {
  username: 'admin',
  password: 1234,
};

passport.use(new LocalStrategy(
  TEMP_USER,
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

module.exports = passport;