const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    age: {
        type: Number,
        required: true
    },
    adopted: {
        type: Boolean,
        required: true
    },
})

const Animal = mongoose.model('Animal', animalSchema)

module.exports = Animal
