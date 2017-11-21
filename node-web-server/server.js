const express = require('express');


let app = express();

app.get('/', (req, res) => {
	//res.send('<h1>Hello Express!</h1>');
	res.send({
		name: 'Ahmed',
		likes: [
		'Biking',
		'resting'
		]
	})
});

app.get('/about', (req,res) => {
	res.send('Welcome to about page')
});

app.get('/bad', (re1, res) => {
	res.send({
		Error: 'Error has occured!'
	})
})

app.listen(3000);