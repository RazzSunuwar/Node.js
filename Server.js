const http = require('http');
const server = http.createServer(function(req, res){
    res.write('Hello World');
    res.end();
});

server.listen(3000, function(err, done){
    if(err){
        console.log('Error listening to server 3000', err);
    } else {
        console.log('Server listening at port 3000');
    }
});