const express = require('express')
const router = express.Router()
const tweetsController = require('../controllers/tweets')
// We import our controller functions above

// We define the routes and controllers
router.get('/tweets', tweetsController.getAllTweets)

router.post('/tweets', tweetsController.createTweet)

//route to update a tweet
//router.put('/tweets/:id', tweetsController.updateTweet)
router.put('/tweets/:_id', tweetsController.updateTweet)

//route to delete a tweet
//router.delete('/tweets/:id', tweetsController.deleteTweet)
router.delete('/tweets/:_id', tweetsController.deleteTweet)

// We export our routes 
module.exports = router

