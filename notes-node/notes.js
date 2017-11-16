console.log('Starting notes.js');

const fs = require('fs');

let getNotes = () => {
	let notes = [];

	try {
		let notesString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(notesString);
	} catch(e) {

	}
	return notes;
};

let saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


let addNote = (title, body) => {
	let notes = getNotes();
	let note = { 
		title, 
		body
	};
	
	let duplicateNotes = notes.filter((note) => note.title === title);

	if(duplicateNotes.length === 0 ) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}

};

let listNotes = () => {
	
	let notes = getNotes();
	return notes;
};

let removeNote = (title) => {
	let notes = getNotes();
	let foundNote = false;
	for( let i = 0; i < notes.length; i++ ) {
		let note = notes[i];
		if(note.title == title) {
			notes.splice(i, 1);
			foundNote = true;
			console.log('Removed 1 note..');
		};
	}

	saveNotes(notes);

	if(foundNote === false) {
		console.log('No such note in DB!');
	}
};

let readNote = (title) => {
	let notes = getNotes();
	let note = notes.filter((data) => data.title == title);

	if(note) {
		console.log(note);
	} else {
		console.log('No such note in DB!')
	}
};





module.exports = {
	addNote,
	listNotes,
	removeNote,
	readNote,
};