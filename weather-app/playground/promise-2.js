const request = require('request');

let geocodeAddress = (encodedAddress) => {
	return new Promise((resolve, reject) => {
		request({
			url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress,
			json: true
		}, (error, response, body) => {

			if(error) {
				reject('Unable to connect to user service.')
			}
			else if (body.status == 'ZERO_RESULTS') {
				reject('Unable to find that address.')
			}
			else if (body.status == 'OK') {
				resolve(
					{
					address: body.results[0].formatted_address,
					lat: body.results[0].geometry.location.lat,
					lng: body.results[0].geometry.location.lng
				})
			}
			else {
				reject('something wrong accured.')
			}
			
		});
	})
}

geocodeAddress('123 main street sausalito')
	.then((location) => {
		console.log(location);
	})
	.catch((errorMessage) => {
		console.log(errorMessage)
	})