'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('../app.js');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default);
var should = _chai2.default.should();

describe('API Orders Endpoint Testing', function () {
	//Test to get all orders
	it('should list ALL orders on / GET', function (done) {
		_chai2.default.request(_app2.default).get('/api/v1/orders').end(function (err, res) {
			res.should.have.status(200);
			res.body.should.be.a('object');
			res.body.should.have.property('name');
			res.body.should.have.property('quantity');
			done();
		});
	});
	//Test to Fetch a single order
	it('should get a SINGLE order on /:id GET', function (done) {
		var id = 1;
		_chai2.default.request(_app2.default).get('/api/v1/orders/' + id).end(function (err, res) {
			res.should.have.status(200);
			res.body.should.be.a('object');
			res.body.should.have.property('name');
			res.body.should.have.property('quantity');
			done();
		});
	});
	//Test to place a new order
	it('should get place an order on / POST', function (done) {
		_chai2.default.request(_app2.default).post('/api/v1/orders').send({
			orderStatus: "Delivered",
			name: "Fish-Roll",
			quantity: "10",
			price: "100",
			date: new Date().toDateString()
		}).end(function (err, res) {
			res.should.have.status(200);
			res.body.should.be.a('object');
			res.body.should.have.property('name');
			res.body.should.have.property('quantity');
			done();
		});
	});
	//Test to update status of an order
	it('should update the status of an order on /:id GET', function (done) {
		var id = 2;
		_chai2.default.request(_app2.default).put('/api/v1/orders/' + id).end(function (err, res) {
			res.should.have.status(200);
			res.body.should.be.a('object');
			res.body.should.have.property('name');
			res.body.should.have.property('quantity');
			done();
		});
	});
});