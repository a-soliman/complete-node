console.log('Starting App.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const add = notes.addNotes(5, -8);
console.log(add)
// fs.writeFileSync('greetings.txt', 'Hello World!');
// let username = os.userInfo().username;
// console.log('Hello ' + username + ', you are ' + notes.age + ' years old.')