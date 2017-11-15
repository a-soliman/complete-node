console.log('Starting App.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
let command = argv._[0];

// TEST
console.dir(argv);

let validateCommand = (command) => {
	let message;

	if ( command === 'add') {
		notes.addNote(argv.title, argv.body);
	}
	else if (command === 'list') {
		notes.listNotes();
	}
	else if (command === 'remove') {
		notes.removeNote(argv.title);
	}
	else if (command === 'read') {
		notes.readNote(argv.title);
	}
	else {
		message = 'Command not recognized!';
	}
	return;
};


validateCommand(command);