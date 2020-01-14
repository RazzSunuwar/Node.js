// Create and load the module

    // console.log(__filename);
    // console.log(__dirname);

    const EventEmitter = require('events');
    // const emitter = new EventEmitter();

    var url = 'http://mylogger.io/log';

    class Logger extends EventEmitter{
        log(message){
        // Send an HTTP request
        console.log(message);  //url and log scoped to module and they are not seen from outside or its private
    
        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://' });
        }
    }
     module.exports = Logger;



    // // module.exports.log = log;   //Now log is public
    // module.exports = log;

    // // module.exports.endPoint = url;  url will be public so, we should not keep url here
    // // or remove it from here.


// }    

