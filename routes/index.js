var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');

/* GET home page. */
router.get('/', csrfProtection, function(req, res, next) {
  const test = "this is a git test"
  res.render('index', { 
    title: 'Welcome to the Twilight Imperium 4 Twitch Overlay Stat Display',
    csrfToken: req.csrfToken() 
  });
});

module.exports = router;
