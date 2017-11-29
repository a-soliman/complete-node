const mongoose = require('mongoose');

mongoose.Promise = global.Promise

const dbURL = 'mongodb://ahmed_soliman:abc123@ds123556.mlab.com:23556/node-todo-api';


mongoose.connect(dbURL);


// creating mongoose-model
const Todo = mongoose.model('Todo', {
	text: {
		type: String
	},
	completed: {
		type: Boolean
	},
	completedAt: {
		type: Number
	}
});

// creaing a todo

let newTodo = new Todo({
	text: 'Study chapter 11',
	completed: true,
	completedAt: 27
});




