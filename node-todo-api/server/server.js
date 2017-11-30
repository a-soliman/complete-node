const mongoose = require('mongoose');

mongoose.Promise = global.Promise

const dbURL = 'mongodb://ahmed_soliman:abc123@ds123556.mlab.com:23556/node-todo-api';


mongoose.connect(dbURL);


// creating mongoose-model
// const Todo = mongoose.model('Todo', {
// 	text: {
// 		type: String,
// 		required: true,
// 		minlenght: 3
// 		trim: true
// 	},
// 	completed: {
// 		type: Boolean,
// 		default: false
// 	},
// 	completedAt: {
// 		type: Number,
// 		default: null
// 	}
// });


// let otherTodo = new Todo({})

// otherTodo.save().then((doc) => {
// 	console.log(JSON.stringify(doc, null, 2))
// }, (err) => {
// 	console.log('an error ... ', err);
// });

// User model
const User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 3
	}
});

let newUser = new User({
	email: 'ah'
});

newUser.save().then((doc) => {
	console.log(JSON.stringify(doc, null, 2));
}, (err) => {
	console.log('Unable to save user...')
})