// let obj = {
// 	name: 'Andrew'
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
// let backToObj = JSON.parse(stringObj);
// console.log(typeof backToObj)

const fs = require('fs');

let originalNote = {
	title: 'sometitle',
	body: 'some body'
};

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.txt', originalNoteString);


let noteString = fs.readFileSync('notes.txt', 'utf-8');
let noteObj = JSON.parse(noteString)
console.log(noteObj)