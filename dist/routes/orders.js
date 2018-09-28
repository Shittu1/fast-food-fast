'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _orders = require('../controllers/orders');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _orders.allOrders);
router.get('/:id', _orders.getOrderById);
router.post('/', _orders.placeAnOrder);
router.put('/:id', _orders.updateOrderStatus);

exports.default = router;