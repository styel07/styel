var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(500).json({
      message: err.message,
      error: err
  });
});

module.exports = router;
