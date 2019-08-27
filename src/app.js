const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.set('port', port);

module.exports = app;
