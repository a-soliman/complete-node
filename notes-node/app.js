console.log('Starting App.');

const fs = require('fs');
const os = require('os');

fs.writeFileSync('greetings.txt', 'Hello World!');
let username = os.userInfo().username;
console.log('Hello ' + username)