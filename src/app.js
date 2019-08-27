const express = require('express');
const exphbs = require('express-handlebars');
const { join } = require('path');

const app = express();

const port = process.env.PORT || 5000;
app.set('port', port);

app.use(express.static(join(__dirname, '..', 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: join(__dirname, 'views', 'layouts'),
    partialsDir: join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  }),
);

module.exports = app;
