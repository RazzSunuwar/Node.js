// const events = require('events');
// // const myEmitter = new events.EventEmitter();

// // myEmitter.on('someEvent', function(mssg){
// //     console.log(mssg);
// // });

// // myEmitter.emit('someEvent', 'You now world is so beautiful');
// // // Result: You now world is so beautiful

// const util = require('util');

// // Create Object Constructor
// let Person = function(name) {
//     this.name = name
// };

// util.inherits(Person, events.EventEmitter);

// let James = new Person('James');
// let Ryan = new Person('Ryan');
// let Brat = new Person('Brat');

// let people = [James, Ryan, Brat];

// people.forEach(function(person){
//     person.on('Speak', function(msg) {
//         console.log(person.name + ' said: ' + msg);
//     });
// });

// James.emit('Speak', 'Hey dudes');   