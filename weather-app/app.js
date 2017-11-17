
const request = require('request');
const yargs = require('yargs');

var encodeAddress = (decAddress) => {
	
	return encodeURIComponent(decAddress);
};

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;


var encodedAddress = encodeAddress(argv.address);
console.log(encodedAddress)


request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress,
	json: true
}, (error, response, body) => {

	if(error) {
		console.log('Unable to connect to user service.')
	}
	else if (body.status == 'ZERO_RESULTS') {
		console.log('Unable to find that address.')
	}
	else if (body.status == 'OK') {
		console.log(`Adress: ${body.results[0].formatted_address}`);
		console.log(`LAT: ${body.results[0].geometry.location.lat}`);
		console.log(`LNG: ${body.results[0].geometry.location.lng}`);
	}
	else {
		console.log('something wrong accured.')
	}

	
});

