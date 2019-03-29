"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _detectPort = _interopRequireDefault(require("detect-port"));

var _chalk = _interopRequireDefault(require("chalk"));

var _auth = _interopRequireDefault(require("./api/auth.js"));

var _todos = _interopRequireDefault(require("./api/todos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// libs
// api
// utils
function log() {
  [...arguments].forEach(val => console.log(_chalk.default.cyan(val)));
} // mongo db


const db = _mongoose.default.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

_mongoose.default.connect('mongodb://test:test1234@ds019038.mlab.com:19038/vue-shop', {
  useNewUrlParser: true
});

_mongoose.default.Promise = global.Promise; // server setup

let port;

async function configServer() {
  port = 3000 || (await (0, _detectPort.default)(3000));
}

configServer(); // express setup

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json());
app.use((0, _morgan.default)('dev')); // log request
// express routers

app.use('/', _auth.default);
app.use('/todos', _todos.default); // start

app.listen(port, () => console.log(`Example app listening on port ${port}!`));