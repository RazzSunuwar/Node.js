const http = require('http');

const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/README.md', 'utf8');

myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    console.log(chunk);
})


// const server = http.createServer(function(req, res){
//     console.log('Request was made: ' +req.url);
//     res.write('Hello World');
//     res.end();
// });

// server.listen(3000, function(err, done){
//     if(err){
//         console.log('Error listening to server 3000', err);
//     } else {
//         console.log('Server listening at port 3000');
//     }
// });