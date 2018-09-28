'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _orders = require('../controllers/orders');

var router = (0, _express.Router)();

router.get('/', _orders.allOrders);
router.get('/:id', _orders.getOrderById);
router.post('/', _orders.placeAnOrder);
router.put('/:id', _orders.updateOrderStatus);

exports.default = router;