'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const serverError = require('./error-handlers/500');
const notFoundPage = require('./error-handlers/404');
const stamper = require('./Middleware/stamper');
const validator = require('./Middleware/validator');
const logger = require('./Middleware/logger');

app.use(logger);

app.get('/', stamper, homeHandler);
app.get('/person', validator, usereNameHandler);

app.use('*', notFoundPage);
app.use(serverError);


function homeHandler (req, res) {
    res.status(200).json({
        code:200,
        message: 'Welcome to the Home page :)',
        date: req.stamper
    })
}

function usereNameHandler(req, res){
    res.status(200).json({
        name: req.userName
    })
}

function start(port){
    app.listen(port, ()=> console.log(`Up and running on port ${port}`))
}

module.exports = {
    app,
    start
};