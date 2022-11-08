// We import the Model to communicate with the Database
const Tweet = require('../models/Tweet')

async function getAllTweets(req,res) {
    const allTweets = await Tweet.find()
    res.json(allTweets)
}

async function createTweet(req,res) {
    console.log('Req Body! ', req.body)
    // Method 3
    // Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    Tweet.create(req.body)
    .then(newTweet => res.json(newTweet))
    .catch(err => res.json(err))
    
    // Method 2
    // await Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    // Method 1
    // let newTweet = new Tweet(
    //     name: req.body.name
    //     content: req.body.content
    // )
    // await newTweet.save()
}

// update tweet function
async function updateTweet(req,res) {
    // Method 1
    // let tweet = await Tweet.findById(req.params._id)
    // tweet.name = req.body.name
    // tweet.content = req.body.content
    // await tweet.save()
    // Method 2
    // await Tweet.findByIdAndUpdate(req.params._id, req.body)
    // Method 3
    // await Tweet.findByIdAndUpdate(req.params._id, {
    //     name: req.body.name,
    //     content: req.body.content
    // })
    // res.json({
    //     message: 'Tweet updated successfully'
    // })
    // let updateTweet = await Tweet.findByIdAndUpdate(
    //     req.params._id, req.body
    //     )
    //     res.status(200).json({message: 'Tweet updated successfully'})
    try {
        let updateTweet = await Tweet.findByIdAndUpdate(req.params._id, req.body)
        res.status(200).json({message: 'Tweet updated successfully'})
    }
    catch(err) {
        res.status(400).json({message: 'Tweet not updated'})
    }
}

async function deleteTweet(req,res) {
    // Method 1
    // let tweet = await Tweet.findById(req.params._id)
    // await tweet.remove()
    // Method 2
    // await Tweet.findByIdAndRemove(req.params._id)
    // res.json({
    //     message: 'Tweet deleted successfully'
    // })
    try {
        let deletedTweet = await Tweet.findByIdAndRemove(req.params._id)
        res.status(200).json({message: 'Tweet deleted successfully'})
    }
    catch(err) {
        res.status(500).json({message: 'Tweet not deleted'})
    }
}

// Exporting/Sharing our functions
module.exports = {
    getAllTweets,
    createTweet,
    updateTweet,
    deleteTweet
}