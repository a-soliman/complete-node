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
		let note = notes.addNote(argv.title, argv.body);

		if(note) {
			console.log('Added note with title: ' + note.title +', body: ' + note.body);
		} else {
			console.log('A note with the samiler title was found on the DB!.')
		}
	}
	else if (command === 'list') {
		let allNotes = notes.listNotes();
		if(allNotes.length) {
			allNotes.forEach((note) => console.log(`Title: ${note.title}, Body: ${note.body}`))
		} else {
			console.log('No saved notes found!');
		}
	}
	else if (command === 'remove') {
		let removedNote = notes.removeNote(argv.title);

		if(removedNote) {
			console.log(`Removed note: ${removedNote.title}.`);
		} else {
			console.log('No Such node was found!')
		}
	}
	else if (command === 'read') {
		let note = notes.readNote(argv.title);

		if(note) {
			console.log(note.body);
		} else {
			console.log('No such note was found!');
		}
	}
	else {
		message = 'Command not recognized!';
	}
	return;
};


validateCommand(command);