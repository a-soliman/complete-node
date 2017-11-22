const express = require('express');


let app = express();

app.get('/', (req, res) => {
	res.status(404).send({
		error: 'Page not found.'
	});
});

app.get('/users', (req, res) => {
	let users = [
		{
			name: 'Ahmed',
			age: 30
		},
		{
			name: 'Mike',
			age: 22
		},
		{
			name: 'David',
			age: 26
		}
	];

	res.status(200).send(users);
})


app.listen(3000);

module.exports.app = app;