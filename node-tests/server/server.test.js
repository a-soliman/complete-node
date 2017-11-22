const request = require('supertest');
const expect	= require('expect');

const app = require('./server').app;

describe('Server', () => {
	describe('GET /', () => {
		it('Should return hello world response', (done) => {
			request(app)
				.get('/')
				.expect((res) => {
					expect(res.body).toInclude({ error: 'Page not found.'})
				})
				.expect(404)
				.end(done);
		});
	})

	describe('GET /users', () => {
		it('Should return an array as a response', (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect((res) => {
					expect(res.body).toInclude({name: 'Ahmed', age: 30})
				})
				.end(done);
		});
	});
});

