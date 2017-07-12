const express = require('express');
const path = require('path');
const Session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const apiRouter = require('./router/apiRouter');
const authRouter = require('./router/authRouter');
const cookieParser = require('cookie-parser')();
const passport = require('passport');


app.use(express.static(path.join(__dirname, '/public')));


// MIDDLEWARE
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser);

// PASSPORT SETUP
require('./router/passport.js')(passport);

app.use(Session({ secret: 'hippos', resave: true, saveUninitialized: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());


// ROUTING
app.use('/api', apiRouter);
app.use('/auth', authRouter);

//   app.get('/test', isLoggedIn, function(req, res) {
//     res.send('blah blah');
//   });

// function isLoggedIn(req, res, next) {
//   // console.log('This is req.isAuthenticated: ', req.isAuthenticated);
//   // console.log('Session is: ', req.session.passport.user); //return 2, which is the user_id.
//   if (req.isAuthenticated())
//     return next();
//   res.redirect('/');
// }

// Automatically redirects to index.html for React-Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

// INIT
app.set('port', process.env.PORT || 2245);


app.listen(app.get('port'), (err) => {
  if (err) {
    return console.log('Error starting server', err);
  }
  return console.log('Applican-: Listening on port:', app.get('port'));
});

module.exports = app;
