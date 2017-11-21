const express 	= require('express');
const hbs		= require('hbs');

let app = express();


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});


app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		message: 'Welcome to home!'
	})
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page'
	})
})


app.get('/home', (req, res)=> {
	console.log('requested home');
	res.sernd('Hello from home!')
})


app.listen(3001)

// app.listen('port', () => {
// 	console.log('server is runing on port 3000')
// });
// const express 	= require('express');
// const hbs		= require('hbs')


// let app = express();

// app.set('view engine', 'hbs');
// app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
// 	//res.send('<h1>Hello Express!</h1>');
// 	res.send({
// 		name: 'Ahmed',
// 		likes: [
// 		'Biking',
// 		'resting'
// 		]
// 	})
// });

// app.get('/about', (req,res) => {
// 	res.render('about.hbs');
// });

// app.get('/bad', (re1, res) => {
// 	res.send({
// 		Error: 'Error has occured!'
// 	})
// })

// app.listen(3000, ()=> {
// 	console.log('Server is up on port 3000')
// });