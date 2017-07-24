

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../db/models/User');


module.exports = function (passport) {
  passport.serializeUser((user, done) => { // eslint-disable-line unexpected function express
    // console.log('serializeUser is: ', user.dataValues.id); 
    done(null, user.dataValues.id);
  });

  passport.deserializeUser((user, done) => { // eslint-disable-line unexpected function express
    // console.log('Entering deserializeUser, user is: ', user); 
    User.findById(user)
      .then((user) => { // eslint-disable-line
        // console.log('DeserializeUser is: ', user); 
        done(null, user);
      });
  });

  // Google oauth setup
  passport.use(new GoogleStrategy({
    clientID: '748574587907-3stt2ub1q9tnaqh7rci4sort4bl5cqtb.apps.googleusercontent.com',
    clientSecret: 'c5t-iX_qW1DVbuyNMtXgGRCy',
    callbackURL: 'http://localhost:2245/auth/google/callback',
  },
  (accessToken, refreshToken, profile, done) => {
    // error func maybe an issue; done maybe an issue. 
    User.findOne({ where: { googleId: profile.id } })
      .then((user) => {
        if (user) {
          done(null, user);
        } else {
          const newUser = new User();
          newUser.name = profile.displayName;
          newUser.googleId = profile.id;
          newUser.save((err) => {
            if (err) {
              throw err;
            }
            return done(null, newUser);
          });
        }
      });
  }));
};

