const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000
app.set('json spaces', 2)
//middleware
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(process.env.MONGODB_PRUEBA).then(() => {
    console.log('Conected to mongo capos')
}).catch((error) => {
    console.error(error)
})

//routes
app.use('/api/users', require('./routes/user'));
app.use('/api/patients', require('./routes/patient'));
app.use('/api/roles', require('./routes/role'));
app.use('/api/specialties', require('./routes/specialty'));

app.listen(port, () => {
    console.log('listening on port', port)
})