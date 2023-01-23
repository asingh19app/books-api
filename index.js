//globalizations
const express = require('express')
const app = express()
const mongoose = require('mongoose')

//configurations
require('dotenv').config()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
mongoose.set('strictQuery', true)

//routes
app.get('/', (req,res) => {
    res.send('Hi')
})

//use
app.use('/books', require('./controllers/books_controller'))
app.use(express.json())

//listen
app.listen(PORT, () => {
    console.log('running from', PORT)
})

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log('connected to mongo:', MONGO_URI)
    }
    )


