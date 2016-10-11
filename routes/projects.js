var express = require('express');
var router = express.Router();

/* GET projects listing. */
router.get('/', function(req, res, next) {
  res.send('get project list');
});

router.post('/project/:name', function(req, res, next) {
  // req.send()
});


module.exports = router;
