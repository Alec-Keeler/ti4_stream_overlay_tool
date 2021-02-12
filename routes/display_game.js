var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');

router.get('/:key', csrfProtection, asyncHandler(async (req, res) => {
    // res.send("Hello from /display_game")
    res.render('game_display', { gameKey: req.params.key, csrfToken: req.csrfToken() })
}))

router.post('/', asyncHandler(async (req, res) => {
    res.redirect(`/display_game/${req.body.gameKey}`)
    // res.render('game_display', {gameKey: req.body.gameKey})
}))

module.exports = router;