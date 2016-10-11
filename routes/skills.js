var express = require('express');
var router = express.Router();

/* GET skills listing. */
router.get('/', function(req, res, next) {
  res.send('get all skills');
});

module.exports = router;
