var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');

router.post('/', asyncHandler(async(req, res) => {
    //Perform logic to generate a random key
    //create new entry in game collection DB
    //pass the key and collection name to pug template to display to user
    res.render('collection_key_display', {collectionName: req.body.collName})
}))

router.post('/game_data', asyncHandler(async(req, res) => {
    //this route will need to pull all the associated data for all the games associated
    //to the given key, pass the data through stats functions, then pass the stats
    //to the pug template
    res.render('data_display', {})
}))

module.exports = router;