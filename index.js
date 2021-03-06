const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bcrypt = require('bcrypt')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
app.set('json spaces', 2)
//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(process.env.MONGODB_PRUEBA).then(() => {
    console.log('Conected to mongoDB')
}).catch((error) => {
    console.error(error)
})

//routes
app.use('/api/users', require('./routes/user'));
app.use('/api/patients', require('./routes/patient'));
app.use('/api/roles', require('./routes/role'));
app.use('/api/specialties', require('./routes/specialty'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/medicalRec', require('./routes/medicalRec'));
app.use('/api/record', require('./routes/record'));

app.listen(port, () => {
    console.log('listening on port: ', port)
})