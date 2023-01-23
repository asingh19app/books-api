//require mongoose 
const mongoose = require('mongoose')

//schema 
const {Schema} = mongoose

const bookSchema = new Schema({
    title: {type: String, required: true},
    description: {type:String, required: true},
    year: {type: Number},
    quantity: {type: Number},
    imageURL: {type: String}
})

//model and export
const Book = mongoose.model('Book', bookSchema)
module.exports = Book