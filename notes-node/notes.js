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
			saveNotes(notes);
			return note;
		};
	}

	return false;
};

let readNote = (title) => {
	let notes = getNotes();
	let note = notes.filter((data) => data.title == title);

	return note[0];
};





module.exports = {
	addNote,
	listNotes,
	removeNote,
	readNote,
};