'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _babelRegister = require('babel-register');

var _babelRegister2 = _interopRequireDefault(_babelRegister);

var _orders = require('./routes/orders');

var _orders2 = _interopRequireDefault(_orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Parse incoming requests data
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use(_express2.default.json());

app.get('/', function (req, res) {
  return res.status(200).send({ 'Message': 'Welcome to Fast food fast home page' });
});

// Orders
app.use('/api/v1/orders', _orders2.default);

var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log('server running on port ' + PORT);
});

exports.default = app;