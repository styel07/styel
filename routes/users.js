var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/admin', function(req, res, next) {
  res.send('admin access');
});

module.exports = router;
