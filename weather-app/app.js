console.log('Starting app')

const request = require('request');

request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address=23%20gaery%20street%20san%20francisco',
	json: true
}, (error, response, body) => {
	console.log(`Adress: ${body.results[0].formatted_address}`);
	console.log(`LAT: ${body.results[0].geometry.location.lat}`);
	console.log(`LNG: ${body.results[0].geometry.location.lng}`);
});