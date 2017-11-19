const request = require('request');

module.exports = getWeather = function(location, callback) {
	let key = '793301cc0a979b8555050a0247fee787';
	let lat = location.lat;
	let lng = location.lng;

	request({
		url: `https://api.darksky.net/forecast/${key}/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if(error) {
			callback('unable to connect to forecast.io servers.')
		}
		else if(response.statusCode === 404) {
			callback('Unable to fetch weather');
		} 
		else if(!error && response.statusCode === 200) {
			callback(null, {temprature: body.currently.temperature} )
		}
		else {
			callback('an error has occured!')
		}
		
		
	})
}
