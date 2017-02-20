var express = require('express');
var router = express.Router();

/* GET projects listing. */
router.get('/', (req, res, next) => {
  res.send('get project list');
});

router.post('/:name', (req, res, next) => {
  req.send('post project');
});


module.exports = router;
