console.log('Starting App');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


// console.log(_.isString(true));
// console.log(_.isString('Tim'));


var filteredArray = _.uniq(['Tim', 'Tim', 1, 2, 3, 4, 1]);
console.log(filteredArray);


// console.log('Result: ' + notes.add(9,3));

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);