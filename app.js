const express = require('express');
const studentRoutes = require('./api/routes/students');
const focultyRout = require('./api/routes/foculty');
const connectoMongdb = require('./database');
const bodyParser = require('body-parser');
const userRoute = require('./api/routes/user')
const app = express();
connectoMongdb();

// this is a bodyParser packege for storing data into datbase 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// available routes 
    app.use('/students', studentRoutes)
    app.use('/foculty', focultyRout)
    app.use('/user', userRoute)


// error handling part
app.use((req, res, next) => {
    res.status(404).json({
        Error: 'bad url rquest'
    })
})


module.exports = app