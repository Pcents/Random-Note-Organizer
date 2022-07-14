const express = require('express');
// Import our modular router for /notes
const notesRouter = require('./note');
// import out db
const dbRouter =require('../db/db.json');

const app = express();

app.use('./note', notesRouter);
// TODO: Initialize diagnostics route
app.use('../db/db.json', dbRouter);

module.exports = app;