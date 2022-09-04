const express = require('express');
const router = require('./src/routes/api');
const mongoose = require('mongoose')
let app = new express();


const bodyParser = require('body-parser');
const cors = require('cors');
const mongoSanitizer = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const xss = require('xss-clean');



// Security Implementation 

app.use(bodyParser.json());
app.use(cors());
app.use(mongoSanitizer());
app.use(helmet());
app.use(hpp());
app.use(xss());

let limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 20, // Limit each IP to 5 create account requests per `window` (here, per hour)
    message: 'Too many accounts created from this IP, please try again after an hour',
})

app.use(limiter);

// Database Implementation
let URI = "mongodb://localhost:27017/todo";
let Options = { user: '', pass: '' }
mongoose.connect(URI, Options, (error) => {
    if (error) {
        console.error("Database Not Connected to DB")
    } else {
        console.log('Connected to DB');
    }

})





app.use('/api/v1', router);

app.use('*', (req, res) => {

    res.status(404).json({ status: '404 Not Found', message: 'This page is not Found' });

})


module.exports = app;