//Imported mongoose library
const mongoose = require('mongoose')

//Connect to our mongo DB
mongoose.connect('mongodb+srv://solein:solein@cluster0.zn0ojwy.mongodb.net/?retryWrites=true&w=majority')

// Display message when connected
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo database!!!')
})

const schema = mongoose.Schema
// Create an Animal Model 
const animalSchema = new schema({
    name: String,
    size: String,
    species: String,
    age: Number
})

const Animal = mongoose.model('Animal', animalSchema)
// Store some data into our Database 
// Controller methods

// Animal.insertMany([
//     {
//         name: 'rocky',
//         size: 'medium',
//         species: 'elephant',
//         age: 42
//     },
//     {
//         name: 'oreo',
//         size: 'small',
//         species: 'cat',
//         age: 12
//     },
//     {
//         name: 'nutella',
//         species: 'dog',
//         size: 'small',
//         age: 8
//     },
//     {
//         name: 'hazel',
//         species: 'cheetah',
//         size: 'medium',
//         age: 100
//     },
//     {
//         name: 'speedy',
//         species: 'turtle',
//         size: 'large',
//         age: 999
//     }
// ]).then((err, docs) => {
//     console.log('Data was succesfully added to DB')
// }).catch(err => console.log(err))

async function getAnimal(req,res) {
    //let formData = req.body
    let animal = await Animal.findOne(
        {name: 'rocky'}
    )
    console.log('My animal!', animal)
    // rest.json({animal})
}
getAnimal()
//Model.find()
async function getAllAnimals(req, res) {
    let animals= await Animal.find()
    console.log('My animals List!', animals)
}
getAllAnimals()
//Model.findById()
async function getAnimalById(req, res) {
    let animal= await Animal.findById(
        {_id:'636795637186ea97076881b4'})
    console.log('My animal!', animal)
}
getAnimalById()
//Model.findOneAndUpdate
async function updateAnimal(req, res) {
    let updatedAnimal= await Animal.findOneAndUpdate(
        {name:'hazel'},
        {species: 'cheeta', size: 'medium'}
    )
    console.log('My animal!', updatedAnimal)
}
updateAnimal() 


