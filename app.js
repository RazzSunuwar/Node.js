//  Create Web Server
// const http = require('http');

// const Server = http.createServer();

// Server.on('connection', (socket) => {
//     console.log('New connection...');
// });

// Server.listen(8080);

// console.log('Listening on port 8080...');

const http = require('http');

const Server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

Server.listen(8080);

console.log('Listening on port 8080...');



