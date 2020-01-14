// // Modules
// // console.log(module);    //It will show json object on the terminal.
// const logger = require('./logger')
// // console.log(logger);    // get object >>> function log in the terminal
// // logger.log("message here"); //We will get message here in the terminal
// // or
// logger("message here");
// or
// const log = require('./logger');
// log("message here"); 

// Path Module
// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// OS Module
// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log('Total Memory' + totalMemory);

// // Template String
// // ES6 /ES2015 : ECMAScript 6

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// File System Module


// const fs = require('fs');
 
// Sync
// const files = fs.readdirSync('./');
// console.log(files);

// Async
// fs.readdir('$', function(err, files){
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// })

// const EventEmitter = require('events');
// // const emitter = new EventEmitter();

// const Logger = require('./logger');
// const logger = new Logger();

// // Register a Listener
// logger.on('messageLogged', (arg) => {  //e or events or eventsArg
//     console.log('Listener called', arg);
// });
// logger.log('message');