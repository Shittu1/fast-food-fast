
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';
import db from '../db/db';
let should = chai.should();

chai.use(chaiHttp);

describe('API Orders Endpoint Testing', () => {
	it('should list ALL orders on / GET', (done) => {
		chai.request(app)
		.get('/')
		.end((err, res) => {
			res.should.have.status(200);
			done();
		});
	});

}); 