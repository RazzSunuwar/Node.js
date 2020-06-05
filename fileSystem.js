const fs = require("fs");


// Sync 
// var readme = fs.readFileSync("README.md", "utf8");
// // console.log(readme);

// // Write file, filename with writeMe.txt
// fs.writeFileSync('writeMe.txt', readme);



// Async
fs.readFile("ReadFile.txt", "utf8", function(err, data){

    // console.log(data);
    fs.writeFile('WriteFiles.txt', data, (err, done) =>{
        if(err){
            console.log('Error writing message', err)
        } else {
            console.log('Success writing code');
        }
    });
});



