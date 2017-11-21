const express 	= require('express');
const hbs		= require('hbs')


let app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

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

app.listen(3000, ()=> {
	console.log('Server is up on port 3000')
});