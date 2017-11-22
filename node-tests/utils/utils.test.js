const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
	let res = utils.add(10, 20);

	expect(res).toBe(30).toBeA('number');
});

it('Should square a number', () => {
	let number = Math.floor((Math.random() * 999) + 1);
	let doubleNumber = (number * number);
	let res = utils.square(number);

	expect(res).toBe(doubleNumber).toBeA('number');
});