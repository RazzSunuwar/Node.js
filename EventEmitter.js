const events = require('events');
const myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
});

myEmitter.emit('someEvent', 'You now world is so beautiful');
// Result: You now world is so beautiful
