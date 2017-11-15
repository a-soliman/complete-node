console.log('Starting App.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

let command = process.argv[2];
//console.log(command)
// console.log(process.argv)





let validateCommand = (command) => {
	if ( command === 'add') {
		console.log('Adding note..');
	}
	else if (command === 'list') {
		console.log('Listing Notes...');
	}
	else if (command === 'remove') {
		console.log('Removing note...');
	}
	else if (command === 'read') {
		console.log('Reading note...');
	}
	else {
		console.log('Command not recognized!')
	}

	return
}

validateCommand(command);