const http = require('http');
const server = http.createServer(function(req, res){
    console.log("Client connected to the server");
    // console.log("Request url >>", req.url);
    res.write("Hello World");
    res.end();
})
server.listen(8080, function(err, done){
    if(err){
        console.log("Error server listening");
    }else{
        console.log("Server listening at port 8080");
    }
})