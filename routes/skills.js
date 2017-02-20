var express = require('express');
var router = express.Router();

/* GET skills listing. */
router.get('/', (req, res, next) => {
  res.send('get all skills');
});

router.post('/add/:id', (req, res, next) => {
  res.send('add new skill');
});

module.exports = router;
