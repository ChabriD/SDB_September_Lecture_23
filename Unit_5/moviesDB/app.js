require('dotenv').config();// connects env to project
const express = require('express');
const app = express();
const mongoose = require('mongoose'); // used from node_modules
//const PORT = 4000;
const PORT = process.env.PORT;// points to our env file and puts the value of PORT from that variable into this PORT Variable.

const MONGO = process.env.MONGODB; // connection variable from .env

mongoose.connect(`${MONGO}/movies`);
// connection middleware. Est route and defining our collection that we are targeting.

const db = mongoose.connection; // event listener to check if connected.
db.once("open", () => console.log(`Connected: ${MONGO}/movies`));


app.listen(PORT, () => console.log(`Movies: ${PORT}`));