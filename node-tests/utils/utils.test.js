const utils = require('./utils');

it('should add two numbers', () => {
	let res = utils.add(10, 20);

	if(res !== 30) {
		throw new Error(`Expecting 30, but got ${res}`);
	};
});