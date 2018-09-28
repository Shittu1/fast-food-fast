import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);
let should = chai.should();

describe('API Orders Endpoint Testing', () => {
	//Test to get all orders
	it('should list ALL orders on / GET', (done) => {
		chai.request(app)
			.get('/api/v1/orders')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.property('name');
      			res.body.should.have.property('quantity');
				done();
			});
	});
	//Test to Fetch a single order
	it('should get a SINGLE order on /:id GET', (done) => {
		const id = 1;
		chai.request(app)
			.get(`/api/v1/orders/${id}`)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.property('name');
      			res.body.should.have.property('quantity');
				done();
			});
	});
	//Test to place a new order
	it('should get place an order on / POST', (done) => {
		chai.request(app)
			.post('/api/v1/orders')
			.send({
		      	orderStatus: "Delivered",
		      	name: "Fish-Roll",
		      	quantity: "10",
		      	price: "100",
		      	date: new Date().toDateString()
				})
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.property('name');
      			res.body.should.have.property('quantity');
				done();
			});
	});
	//Test to update status of an order
	it('should update the status of an order on /:id GET', (done) => {
		const id = 2;
		chai.request(app)
			.put(`/api/v1/orders/${id}`)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.property('name');
      			res.body.should.have.property('quantity');
				done();
			});
	});




}); 