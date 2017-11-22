const utils = require('./utils');

it('should add two numbers', () => {
	let res = utils.add(10, 20);

	if(res !== 30) {
		throw new Error(`Expecting 30, but got ${res}`);
	};
});

it('Should square a number', () => {
	let number = Math.floor((Math.random() * 999) + 1);
	let res = utils.square(number);

	if(res !== (number * number)) {
		throw new Error(`Expecting 25, but gor ${res}`);
	};
})