const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json()) 

// Connect DB
const db = 'mongodb+srv://selima123:selima123@tramontano.eswdt.mongodb.net/Tramontano?retryWrites=true&w=majority'
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true},(err) => {
    if (err) throw err
    console.log('Database connected!...')
})

app.use('/api/admin', require('./routes/admin'))
app.use('/api/auth', require('./routes/authadmin'))
app.use('/api/cars', require('./routes/cars'))
app.use('/api/rdv', require('./routes/rdv'))

app.listen(5000, (err) => {
    if (err) throw err
    console.log('Server is running on port 5000')
})