const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res){
    let data = {age: 29, job: 'Ninja'}
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(port, (err, done) => {
    if(err){
        console.log(`Server listening at port ${port} failed`)
    } return console.log(`Server listening at port ${port} success`)
});

