var express = require('express');
var router = express.Router();

/* GET skills listing. */
router.get('/skills', function(req, res, next) {
  res.send('get all skills');
});

module.exports = router;
