const utils = require('./utils');

it('should add two numbers', () => {
	let res = utils.add(10, 20);

	if(res !== 30) {
		throw new Error(`Expecting 30, but got ${res}`);
	};
});

it('Should square a number', () => {
	let res = utils.square(5);

	if(res !== 25) {
		throw new Error(`Expecting 25, but gor ${res}`);
	};
})