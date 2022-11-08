const User = require('../models/User')
const Tweet = require('../models/Tweet')


async function createUser(req,res) {
    try {
        const newUser = await User.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        res.json(newUser)
    } catch (err) {
        res.json(err)
    }
}

async function createUserTweet(req,res) {
    // Find the user that created the tweet
    let user = await User.findById(req.params.userId)
    //Create the tweet
    let newTweet = await Tweet.create(req.body)
    // Push the new tweet ID into the user's 'tweets' property
    user.tweets.push(newTweet._id)
    // Save our changes to the user
    await user.save()
    // Respond with the user data
    // Populate the tweet data
    await user.populate('tweets')
    res.json(user)
}

//update user function
async function updateUser() {
    try {
        let updateUser = await User.findByIdAndUpdate(req.params._id, req.body)
        res.status(200).json({message: 'User updated successfully'})
    }
    catch(err) {
        res.status(400).json({message: 'User not updated'})
    }
}

//delete user function
async function deleteUser(req,res) {
    try {
        let deleteUser = await User.findByIdAndDelete(req.params._id)
        res.status(200).json({message: 'User deleted successfully'})
    }
    catch(err) {
        res.status(400).json({message: 'User not deleted'})
    }
}

module.exports = {
    createUser,
    createUserTweet,
    updateUser,
    deleteUser
}