require('dotenv').config()
require('./config/database')
const Tweet = require('./models/Tweet')

Tweet.insertMany([
    {
        name:'Hussain',
        content:'I get red text aroud name and content',
    },
    { 
        name:'Mohd',
        content: 'Hello World',

    },
    {
        name: 'Kareem',
        content: 'Hi guys',
    },
])
.then(() => console.log('Data added sucessfully!'))
.catch(err => console.log(err))