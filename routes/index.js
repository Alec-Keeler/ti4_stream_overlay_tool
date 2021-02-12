var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const test = "this is a git test"
  res.render('index', { title: 'TI4 Overlay Home' });
});

module.exports = router;
