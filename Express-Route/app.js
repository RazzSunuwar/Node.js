const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', function(req, res){
    res.send('This is the homepage');
});

app.get('/contact', function(req, res){
    res.send('This is the contact page');
});

app.get('/profile/:id', function(req, res){
    res.send('You requested to see a profile with the id of ' + req.params.id);
});

app.listen(port, (err, done) => {
    if(err){
        console.log(`Server listening at port ${port} failed`)
    } return console.log(`Server listening at port ${port} success`)
});

