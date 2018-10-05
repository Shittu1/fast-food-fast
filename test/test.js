//Acknowledgements
//https://stackoverflow.com/questions/52588068/cant-set-headers-after-they-are-sent-is-the-error-i-get-when-i-run-npm-test
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
				res.body.should.have.property('success');
				res.body.success.should.be.equal('true');
				done();
			});
	});
	//Test to Fetch a single order
	it('should get a SINGLE order on /:id GET', (done) => {
		const id = 2;
		chai.request(app)
			.get(`/api/v1/orders/${id}`)
			.end((err, res) => {
				res.body.should.have.property('success');
				res.body.success.should.be.equal('true');
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
				res.body.should.have.property('success');
				res.body.success.should.be.equal('true');
				done();
			});
	});
	//Test to update status of an order
	it('should update the status of an order on /:id PUT', (done) => {
		const id = 3;
		chai.request(app)
			.put(`/api/v1/orders/${id}`)
			.send({
		      	orderStatus: "In Transit",
		      	name: "Chin-Chin",
		      	quantity: "5",
		      	price: "30",
		      	date: new Date().toDateString()
				})
			.end((err, res) => {
				res.body.should.have.property('success');
				res.body.success.should.be.equal('true');
				done();
			});
	});


}); 