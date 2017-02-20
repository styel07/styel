var express = require('express');
var router = express.Router();

/* GET projects listing. */
router.get('/', (req, res, next) => {
  res.send('get project list');
});

router.post('/add', (req, res, next) => {
  req.send('post project');
});

router.put('/update/:id', (req, res, next) => {
  if(req.body.params.id) {
    res.send('updated project');
  } else {
    res.send('unable to updated project');
  }
});

router.delete('/delete/:id', (req, res, next) => {
  if(req.body.params.id) {
    res.send('deleted project');
  } else {
    res.send('unable to delete project');
  }
});


module.exports = router;
