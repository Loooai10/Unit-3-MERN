const mongoose = require('mongoose')

console.log('this is my database')
mongoose.connect('mongodb+srv://solein:solein@cluster0.zn0ojwy.mongodb.net/tweets')

mongoose.connection.on('connnected', () => {
    console.log('Connected to database!')
})