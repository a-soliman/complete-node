console.log('Starting notes.js');

const fs = require('fs');


let notes = [];

let addNote = (title, body) => {
	let notes = [];
	let note = { 
		title, 
		body
	};

	notes = getNotes();
	
	let duplicateNotes = notes.filter((note) => note.title === title);

	if(duplicateNotes.length === 0 ) {
		
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));
	}

	

};

let listNotes = () => {
	
	let notes = getNotes();

	if( notes.length ) {
		notes.forEach((note) => console.log(note));
	}
	else {
		console.log('No Saved notes')
	}
};

let removeNote = (title) => {
	let notes = getNotes();
	for( let i = 0; i < notes.length; i++ ) {
		let note = notes[i];
		if(note.title == title) {
			notes.splice(i, 1);
			console.log('Removed 1 note..');
		};
	}

	fs.writeFileSync('notes-data.json', JSON.stringify(notes));

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

let isUniqeNode = (title, notesArr) => {

	for (let i = 0; i < notesArr.length; i++) {
		let note = notes[i];
		if(title == notes[i].title) {
			console.log('=== Is not unique ===')
			return false;
		}
	}
	return true;
};

let getNotes = () => {
	let notes = [];

	try {
		let notesString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(notesString);
	} catch(e) {

	}
	return notes;
}

module.exports = {
	addNote,
	listNotes,
	removeNote,
	readNote,
	notes

};