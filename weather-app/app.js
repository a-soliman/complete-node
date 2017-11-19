const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const getWeather = require('./geocode/forecast.js')

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


geocode(argv.address, (errorMessage, results) => {
	if(errorMessage) {
		console.log(errorMessage);
	}
	else {
		getWeather(results, (errMsg, result) => {
			if(errMsg) {
				console.log(errMsg);
			} else {
				console.log(result)
			}
		})
		console.log(JSON.stringify(results, null, 2));
	}
});
