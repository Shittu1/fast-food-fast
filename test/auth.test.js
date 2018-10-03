import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);
let should = chai.should();

describe('auth API testing', () => {
	//test for signup API
	it('should SIGNUP user successfully on /signup POST', (done) => {
		chai.request(app)
			.post('/auth/signup')
			.send({
		      	firstname: "Adams",
		      	lastname: "Shittu",
		      	email: "abc@gmail.com",
		      	password: "abc"
				})
			.end((err, res) => {
				res.body.should.have.property('auth');
				res.body.auth.should.be.equal(true);
				done();
			});
	});

	it('should LOGIN user successfully on /login POST', (done) => {
		chai.request(app)
			.post('/auth/login')
			.send({
		      	email: "shttdms@gmail.com",
		      	password: "abc"
				})
			.end((err, res) => {
				console.log(res.body);
				res.body.should.have.property('auth');
				res.body.auth.should.be.equal(true);
				done();
			});
	});
});