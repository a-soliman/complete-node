console.log('Starting app')

const request = require('request');

request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address=%20san%20francisco',
	json: true
}, (error, response, body) => {
	console.log(body)
})