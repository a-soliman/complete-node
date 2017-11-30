const yargs = require('yargs');
const axios = require('axios');

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

let encodedAddress 	= encodeURIComponent(argv.address);
let geocodeUrl 		= `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;


// an axios promise call to geocode url to retur lat and lng infromation
axios.get(geocodeUrl)
  .then(function (response) {

  	// a special case error handeling
  	if(response.data.status === 'ZERO_RESULTS') {
  		throw new Error('Unable to find that address.')
  	}
  	// storing the data incase the API responded.
  	let address = response.data.results[0].formatted_address;
  	let lat 	= response.data.results[0].geometry.location.lat;
  	let lng		= response.data.results[0].geometry.location.lng;
    console.log(`address: ${address}, LAT: ${lat}, LNG: ${lng}`);

    // FORECASE API user key;
    let key = '793301cc0a979b8555050a0247fee787';
    let forecastUrl = `https://api.darksky.net/forecast/${key}/${lat},${lng}`;

    // returning another axios promise to use the data and generate a 
    // get request to FORECASE API to grap the temprature.
    return axios.get(forecastUrl)
    	.then((response)=> {
    		// handeling a special case error.
    		if(response.data.status === 404) {
    			throw new Error('Unable to fetch weather');
    		}
        
    		// storing the data incase the API responded. 
    		let temperature = response.data.currently.temperature;
    		let apparentTemperature = response.data.currently.apparentTemperature;
    		
    		// displaying the temprature data.
    		console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`)
    	})
    	.catch((error) => {
    		console.log(error);
    	})
  })
  .catch((error) => {
  	if(error.code === 'ENOTFOUND') {
  		console.log('Unable to connect to API servers.')
  	}
  	else {
  		console.log(error.message)
  	}
  });