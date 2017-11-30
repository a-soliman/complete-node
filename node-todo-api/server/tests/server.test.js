const expect 	= require('expect');
const request 	= require('supertest');

const { app }	= require('./../server');
const { Todo }  = require('./../models/todo');
const { User }  = require('./../models/user');

const todos = [{
	text: 'First test todo'
}, {
	text: 'Second test todo'
}];

const users = [{
	email: 'First test email'
}, {
	email: 'Second test email'
}];

beforeEach((done) => {
	Todo.remove({}).then(() => { 
		return Todo.insertMany(todos);
	}).then(() => done());
});

beforeEach((done) => {
	User.remove({}).then(() => { 
		return User.insertMany(users); 
	}).then(() => done());
});


describe('POST /todos', () => {
	it('Should create a new todo', ( done ) => {
		var text = 'test todo text';

		request(app)
			.post('/todos')
			.send({text})
			.expect(200)
			.expect(( res ) => {
				expect(res.body.doc.text).toBe(text);
			})
			.end(( err, res ) => {
				if( err ){
					return done(err);
				}

				Todo.find({text}).then((todos) => {
					expect(todos.length).toBe(1);
					expect(todos[0].text).toBe(text);
					done()
				}).catch(e => done(e));
			});
	});

	it('Should Not create todo with invalid body data', (done) => {

		request(app)
			.post('/todos')
			.send({})
			.expect(400)
			.end(( err, res) => {
				if( err ) {
					return done(err)
				}

				Todo.find().then((todos) => {
					expect(todos.length).toBe(2);
					done();
				}).catch(e => done(e));
			})
	})
})

describe('GET /todos', () => {
	it('Should get all todos', (done) => {
		request(app)
			.get('/todos')
			.expect(200)
			.expect((res) => {
				expect(res.body.todos.length).toBe(2);
			})

			.end(done())
	})
})

describe('POST /users', () => {
	it('Should create a new user', (done) => {
		let email = 'test@user.com'

		request(app)
		.post('/users')
		.send({ email })
		.expect(200)
		.expect(( res ) => {
			expect(res.body.doc.email).toBe(email);
		})
		.end(( err, res ) => {
			if ( err ) {
				return done(err);
			}

			User.find().then((users) => {
				expect(users.length).toBe(1);
				expect(users[0].email).toBe(email);
				done();
			}).catch(e => done(e));
		});
	});
	it('Should not create a new user with bad data', (done) => {

		request(app)
			.post('/users')
			.send({})
			.expect(400)
			.end(( err, res) => {
				if ( err ) { 
					return done(err)
				}

				User.find().then((users) => {
					expect(users.length).toBe(0);
					done()
				}).catch(e => done(e));
			})
	})
});