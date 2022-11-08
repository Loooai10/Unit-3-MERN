const mongoose =require('mongoose')
const Schema = mongoose.Schema
//Creating our Tweet Schema
const UserModel = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    tweets: [{type: Schema.Types.ObjectId, 
        ref: 'Tweet'}],
    createdAt: {type: Date, default: Date.now},
}, { timestamps: true });
//Storing our Schema as a model
const User = mongoose.model('User', UserModel)
// Exporting our Model
module.exports = User;