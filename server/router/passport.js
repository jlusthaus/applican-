require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../db/models/User');

module.exports = function (passport) {
  passport.serializeUser((user, done) => {
    done(null, user.dataValues.id);
  });

  passport.deserializeUser((user, done) => {
    User.findById(user)
      .then((user) => {
        done(null, user);
      });
  });

  // Google oauth setup
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_AUTH_CALLBACK,
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ where: { googleId: profile.id } })
      .then((user) => {
        if (user) {
          done(null, user);
        } else {
          const newUser = new User();
          newUser.name = profile.displayName;
          newUser.googleId = profile.id;
          newUser.save((err) => {
            if (err) { throw err; }
            return done(null, newUser);
          });
        }
      });
  }));
};

