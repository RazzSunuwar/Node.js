// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("click", function(){
//     console.log("Hello World");
// })

// emitter.emit("click");

// Result: Hello World



// Practice
// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("click", function(){
//     console.log("Hello World");
// })

// emitter.emit("click");


// Practice 2
// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("click", function(){
//     console.log("Hello World")
// })

// emitter.emit("click");


// Practice 3
// const EventEmitter = require("events");
// const emitter = new EventEMitter();
// emitter.on("click", () => {
//     console.log("Hello World!");
// });
// emitter.emit("click");


// Practice 4
const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("click", () => {
  console.log("Hello World! this EventEmitter");
});
emitter.emit("click");
