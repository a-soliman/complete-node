console.log('Starting notes.js');

const fs = require('fs');


let notes = [];

let addNote = (title, body) => {
	let notes = [];
	let note = { 
		title, 
		body
	};

	try {
		let notesString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(notesString);
	} catch(e) {

	}
	
	let duplicateNotes = notes.filter((note) => note.title === title);

	if(duplicateNotes.length === 0 ) {
		
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));
	}

	

};

let listNotes = () => {
	console.log('Listing Notes...');
};

let removeNote = (title) => {
	console.log('Removing a Note...');
};

let readNote = (title) => {
	console.log('Reading a note...')
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


module.exports = {
	addNote,
	listNotes,
	removeNote,
	readNote,
	notes

};