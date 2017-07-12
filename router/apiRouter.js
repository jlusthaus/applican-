const axios = require('axios');
const router = require('express').Router();
const controllers = require('../db/controllers/controller');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}
const Xray = require('x-ray');

const xR = Xray();
// search from Dice's API.
router.post('/search', (req, res) => {
  axios.get(`http://service.dice.com/api/rest/jobsearch/v1/simple.json?text={text}&city={city}`) // eslint-disable-line
    .then((response) => {
      res.send(response.data.resultItemList);
    })
    .catch((err) => {
      console.warn(err);
      res.send('NOPE');
    });
});

router.post('/dice', (req, res) => {
  console.log('this is req body', req.body.url);
  const stream = xR(req.body.url, '#jobdescSec').stream();
  stream.pipe(res);
  console.log('awefa', res);
});

router.get('/user', isLoggedIn, controllers.getUserJobs);
router.put('/jobs/:id', isLoggedIn, controllers.updateJobStatus);
router.delete('/jobs/:id', isLoggedIn, controllers.deleteJob);

module.exports = router;
