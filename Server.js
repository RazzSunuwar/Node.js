const http = require('http');

const fs = require('fs');

// const myReadStream = fs.createReadStream(__dirname + '/README.md', 'utf8');
// const myWriteStream = fs.createWriteStream(__dirname + '/WriteFile.txt');

// Writeable Streams
// myReadStream.on('data', function(chunk){
//     console.log('new chunk received:');
//     myWriteStream.write(chunk);
// });


// myReadStream.pipe(myWriteStream);

const server = http.createServer(function(req, res){
    console.log('Request was made: ' +req.url);
    res.writeHead(200, {'Content-type': 'text/plain'});
    const myReadStream = fs.createReadStream(__dirname + '/README.md', 'utf8');

    myReadStream.pipe(res); 
});

server.listen(3000, function(err, done){
    if(err){
        console.log('Error listening to server 3000', err);
    } else {
        console.log('Server listening at port 3000');
    }
});