var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');

router.get('/:key', asyncHandler(async (req, res) => {
    res.send("Hello from /display_game")
}))

router.post('/', asyncHandler(async (req, res) => {
    res.redirect(`/display_game/${req.body.gameKey}`)
}))

module.exports = router;