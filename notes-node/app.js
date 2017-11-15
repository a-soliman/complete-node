console.log('Starting App.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

let command = process.argv[2];
//console.log(command)
// console.log(process.argv)



let validateCommand = (command) => {
	let message;

	if ( command === 'add') {
		message ='Adding note..'
	}
	else if (command === 'list') {
		message = 'Listing Notes...';
	}
	else if (command === 'remove') {
		message = 'Removing note...';
	}
	else if (command === 'read') {
		message = 'Reading note...';
	}
	else {
		message = 'Command not recognized!';
	}

	console.log(message);
	return message;
}

validateCommand(command);