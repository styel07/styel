var express = require('express');
var router = express.Router();

/* GET skills listing. */
router.get('/', (req, res, next) => {
  res.send('get all skills');
});

router.post('/add', (req, res, next) => {
  res.send('add new skill');
});

router.put('/update/:id', (req, res, next) => {
  if(req.body.params.id) {
    res.send('updated skill');
  } else {
    res.send('unable to update skill');
  }
});

router.put('/delete/:id', (req, res, next) => {
  if(req.body.params.id) {
    res.send('deleted skill');
  } else {
    res.send('unable to delete skill');
  }
});
module.exports = router;
