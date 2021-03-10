var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');

const instructionHeader = "To Use This Tool:"
const instructions = [
  "First, click on the Get Your Key button.  This will generate a unique key for your game.",
  "Next, in Tabletop Simulator's chat box, enter: !gamedata your_key_here",
  "Next, enter the same key in the field below that says Enter Your Game Key, and click the Get Game Data Button.",
  "On this page you'll see a number of blank components.  Click Get Game Data to begin populating the components with data!",
  "Use OBS (or any other streaming software) to capture each component you wish to display.",
  "When your game is over, click Stop Getting Data and type !gamedata into the TTS chat box to end data collection.",
  "Please note that this tool is still in development.  At the moment this tool will not work properly unless all 6 players are using the base colors (White, Blue, Purple, Yellow, Red, Green)",
  "On the scoreboard: A player's score cell will become a brighter blue when it's their turn and a gray-blue when they have passed"
]

/* GET home page. */
router.get('/', csrfProtection, function(req, res, next) {
  const test = "this is a git test"
  res.render('index', { 
    instructions,
    instructionHeader,
    title: 'Welcome to the Twilight Imperium 4 Twitch Overlay Stat Display',
    csrfToken: req.csrfToken() 
  });
});

module.exports = router;
