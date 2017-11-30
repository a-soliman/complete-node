const express 	 = require('express');
const bodyParser = require('body-parser'); 

const {mongoose} = require('./db/mongoose');
const {Todo} 	 = require('./models/todo');
const {User} 	 = require('./models/user');

const port = process.env.PORT || 3000;

let app = express();

app.use(bodyParser.json());


// POST
app.post('/todos', (req, res) => {
	let todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send({ status: 'Saved', doc: doc });
	}, (err) => {
		res.status(400).send(err)
	})
});

app.listen(port, () => {
	console.log(`Server is on at ${port}.`);
});