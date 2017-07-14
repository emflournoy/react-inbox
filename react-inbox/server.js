'use strict';

const express = require('express');
const app = express();
const messages = require('./src/routes/messages');
const bodyParser = require('body-parser');
const knex = require('knex');
const path = require('path');


app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.use(express.static(path.join('public')));

app.use('/messages',messages);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
