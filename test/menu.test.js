import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);
let should = chai.should();

describe('auth API testing', () => {
	//test for signup API
	it('ADD A MEAL option to the menu on /menu POST', (done) => {
		chai.request(app)
			.post('/auth/menu')
			.send({
		      	firstname: "Adams",
		      	lastname: "Shittu",
		      	email: "abc@gmail.com",
		      	password: "abc"
				})
			.end((err, res) => {
				res.body.should.have.property('success');
				res.body.success.should.be.equal('true');
				done();
			});
	});

	it('ADD A MEAL option to the menu on /menu POST', (done) => {
		chai.request(app)
			.get('/auth/menu')
			.send({
		      	firstname: "Adams",
		      	lastname: "Shittu",
		      	email: "abc@gmail.com",
		      	password: "abc"
				})
			.end((err, res) => {
				res.body.should.have.property('success');
				res.body.success.should.be.equal('true');
				done();
			});
	});
});