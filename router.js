const axios = require('axios');
const router = require('express').Router();
//search from Dice's API. 
router.post('/search', (req, res) => {
  const text = 'Java';
  const city = 'New+York,+NY'; //must be in this format; 
  axios.get(`http://service.dice.com/api/rest/jobsearch/v1/simple.json?text=${text}&city=${city}`)
    .then((response) => {
      res.send(response.data.resultItemList);
    })
    .catch((err) => {
      console.warn(err);
      res.send('NOPE');
    });
});

module.exports = router;
