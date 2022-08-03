var express = require('express');
const queries = require('./models/queries');
const generateRecipeData = require('./models/generate-data');
const mongoose = require('mongoose');
const Recipe = require('./models/recipe');

main().catch(console.error);

async function main() {
  const uri = "mongodb+srv://assignment4:assignment4@assignment4.ltqrnol.mongodb.net/?retryWrites=true&w=majority";
  mongoose.connect(uri);
  const db = mongoose.connection;
  db.on('eror', error => console.error(error))
  db.once('open', () => console.log('Connected to Mongoose'));
}

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var recipesRouter = require('./routes/recipes');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', indexRouter);
app.use('/recipes', recipesRouter);

module.exports = app;
