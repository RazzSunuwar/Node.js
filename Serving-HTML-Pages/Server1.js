const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3001;

const Server = http.createServer((req, res) => {
    console.log('Request url:', req.url);
    if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
});

Server.listen(port, (err, done) => {
    if(err){
        console.log(`Error Server listening at port ${port}`);
    } else {
        console.log(`Server listening at port ${port}`)
    };
});