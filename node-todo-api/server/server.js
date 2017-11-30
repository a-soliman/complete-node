const express 	 = require('express');
const bodyParser = require('body-parser'); 

const {mongoose} = require('./db/mongoose');
const {Todo} 	 = require('./models/todo');
const {User} 	 = require('./models/user');

const port = process.env.PORT || 3000;

let app = express();


app.listen(port, () => {
	console.log('Server is on at ' + port);
})