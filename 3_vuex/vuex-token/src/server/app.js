// libs
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const detectPort = require('detect-port');
const chalk = require('chalk');

// api
const auth = require('./api/auth.js');
const todos = require('./api/todos.js');

// utils
function log() {
  [...arguments].forEach(val => console.log(chalk.cyan(val)));
}

// mongo db
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
mongoose.connect('mongodb://test:test1234@ds019038.mlab.com:19038/vue-shop', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// server setup
let port;
async function configServer() {
  port = 3000 || await detectPort(3000);
}
configServer();

// express setup
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev')); // log request

// express routers
app.use('/', auth);
app.use('/todos', todos);

// start
app.listen(port, () => console.log(`Example app listening on port ${port}!`));