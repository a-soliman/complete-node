console.log('Starting App.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');


// console.log(_.isString(true))
// console.log(_.isString('String'))

let filteredArray = _.uniq(['Ahmed', 1, 'Ahmed', 1,2,3]);
console.log(filteredArray)