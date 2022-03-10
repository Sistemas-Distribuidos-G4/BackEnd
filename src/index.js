const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000
app.set('json spaces', 2)
//middleware
app.use(express.json())
app.use(morgan('dev'))
app.use('/api', userRoutes)

mongoose.connect(process.env.MONGODB_PRUEBA).then(() => {
    console.log('Conected to mongo capos')
}).catch((error) => {
    console.error(error)
})

//routes
app.use('/users', require('./routes/user'));
app.use('/patients', require('./routes/patient'));
app.use('/roles', require('./routes/role'));
app.use('/specialties', require('./routes/specialty'));

app.listen(port, () => {
    console.log('listening on port', port)
})