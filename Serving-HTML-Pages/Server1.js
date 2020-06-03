const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3001;

const Server = http.createServer((req, res) => {
    console.log('Request url:', req.url);

    if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
    } 
    else if(req.url === '/contact' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if(req.url === '/api/ninjas'){
        let ninjas = [{name: 'Kevin', age: 30}, {name: 'Brat', age: '26'}]
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/error.404.html').pipe(res);      
    }
});

Server.listen(port, (err, done) => {
    if(err){
        console.log(`Error Server listening at port ${port}`);
    } else {
        console.log(`Server listening at port ${port}`)
    };
});