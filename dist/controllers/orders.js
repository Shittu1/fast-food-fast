'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateOrderStatus = exports.placeAnOrder = exports.getOrderById = exports.allOrders = undefined;

var _db = require('../db/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//ALL ORDERS
var allOrders = exports.allOrders = function allOrders(req, res) {
  res.status(200).send({
    success: 'true',
    message: 'orders retrieved successfully',
    orders: _db2.default
  });
};

//FETCH AN ORDER
//Acknowledgements
//https://medium.com/@purposenigeria/build-a-restful-api-with-node-js-and-express-js-d7e59c7a3dfb
//https://groundberry.github.io/development/2016/12/10/testing-express-with-mocha-and-chai.html
var getOrderById = exports.getOrderById = function getOrderById(req, res) {
  var id = parseInt(req.params.id, 10);
  for (var i = 0; i < _db2.default.length; i++) {
    var order = _db2.default[i];
    if (order.id === id) {
      return res.status(200).send({
        success: 'true',
        message: 'order retrieved successfully',
        order: order
      });
      break;
    }
  }
  return res.status(404).send({
    success: 'false',
    message: 'order does not exist'
  });
};

//PLACE AN ORDER
var placeAnOrder = exports.placeAnOrder = function placeAnOrder(req, res) {
  if (!req.body.name) {
    return res.status(400).send({
      success: 'false',
      message: 'name is required'
    });
  } else if (!req.body.quantity) {
    return res.status(400).send({
      success: 'false',
      message: 'quantity is required'
    });
  }
  var order = {
    id: _db2.default.length + 1,
    orderStatus: req.body.status,
    name: req.body.name,
    quantity: req.body.quantity,
    price: "10",
    date: new Date().toDateString()
  };
  _db2.default.push(order);
  return res.status(200).send({
    success: 'true',
    message: 'order added successfully',
    order: order
  });
};

//UPDATE ORDER STATUS
var updateOrderStatus = exports.updateOrderStatus = function updateOrderStatus(req, res) {
  var id = parseInt(req.params.id, 10);
  var orderFound = void 0;
  var itemIndex = void 0;
  _db2.default.map(function (order, index) {
    if (order.id === id) {
      orderFound = order;
      itemIndex = index;
    }
  });

  if (!orderFound) {
    return res.status(404).send({
      success: 'false',
      message: 'order not found'
    });
  }

  if (!req.body.name) {
    return res.status(400).send({
      success: 'false',
      message: 'name is required'
    });
  } else if (!req.body.quantity) {
    return res.status(400).send({
      success: 'false',
      message: 'quantity is required'
    });
  }

  var updatedOrder = {
    id: orderFound.id,
    name: req.body.name || orderFound.name,
    quantity: req.body.quantity || orderFound.quantity
  };

  _db2.default.splice(itemIndex, 1, updatedOrder);

  return res.status(200).send({
    success: 'true',
    message: 'order added successfully',
    updatedOrder: updatedOrder
  });
};