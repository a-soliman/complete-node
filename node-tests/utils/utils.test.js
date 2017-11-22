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

it('Should verify first and last names are set', () => {
	let user1 = {};
	let fullName = 'Ahmed Soliman';
	let testNames = fullName.split(' ');


	let res = utils.setName(user1, fullName);

	expect(res).toIncludeKeys(['firstName', 'lastName']);
	expect(res.firstName).toEqual(testNames[0]).toBeA('string');

	expect(res.lastName).toEqual(testNames[1]).toBeA('string');
});


// it('Should expect some value', () => {
// 	// equal !== toBe
// 	expect({name: 'Ahmed'}).toEqual({name: 'Ahmed'});

// 	// to Include
// 	expect([2,3,4]).toInclude(2);

// 	// toExclude
// 	expect([2,3,4]).toExclude(5)
// });