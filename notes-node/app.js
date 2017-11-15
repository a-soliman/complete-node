console.log('Starting App.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
let command = process.argv[2];

// TEST
console.log('Process : ' + process.argv);
console.dir(argv);

let validateCommand = (command) => {
	let message;

	if ( command === 'add') {
		notes.addNote(argv.title, argv.body);
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
	return;
};


validateCommand(command);