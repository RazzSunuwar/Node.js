const express = require('express');
const port = process.env.PORT || 3001;

const app = express();

app.set('view engine', 'ejs');
app.use('/assests', express.static('stuff'));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query});
});

app.get('/profile/:name', function(req, res){
    let data = {age: 29, job: 'Ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(port, (err, done) => {
    if(err){
        console.log(`Server listening at port ${port} failed`)
    } return console.log(`Server listening at port ${port} success`)
});
