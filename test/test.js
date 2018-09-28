'use strict'

import chai from 'chai';
import chai { expect } from 'chai';
import request from 'supertest';
import app from '../app.js';
import db from '../db/db';
// import { orderId } from './data/orders';

describe('API endpoint testing', () => {
	it('place all an orders', () => {
		let data = {'name': 'Shittu'}
		request(app)
				.post('/api/v1/orders/', data)
				.set('accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200, done);
	});
	it('get all orders', () => {
		request(app)
				.get('/api/v1/orders/')
				.set('accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200, done);
				// .expect(res.body.orderId).to.equal(2);
	});
	it('fetch a specific order', () => {
		request(app)
				.get(`/api/v1/orders/${orderId}`)
				.set('accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200, done);
	});
	it('update status of an order', () => {
		request(app)
				.put(`/api/v1/orders/${orderId}`)
				.set('accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200, done);
	});
}); 