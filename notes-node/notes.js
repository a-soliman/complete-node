console.log('Starting notes.js');

let notes = [];

let addNote = (title, body) => {
	console.log('Adding Note. ' + title + body);

	let newNote = {title: title, body: body};
	notes.push(newNote);
};

let listNotes = () => {
	console.log('Listing Notes...');

	for ( let i = 0; i < notes.length; i++ ) {
		console.log(`TITLE : ${note[i].title} BODY: ${note[i].body}.`);
	} 
};

let removeNote = (title) => {
	console.log('Removing a Note...');
};

let readNote = (title) => {
	console.log('Reading a note...')
};


module.exports = {
	addNote,
	listNotes,
	removeNote,
	readNote,
	notes

};