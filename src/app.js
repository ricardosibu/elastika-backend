require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');



const app = express();

//SECTION - CORS
app.use(cors());

//SECTION - Routes
app.get('/', (req, res) => {
    res.send(' Hello Elastika backend');
});

const main_routes = require('./routes');

//SECTION - Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(`/`, main_routes);

module.exports = app