const fs = require("fs");

// Create dir sync
// fs.mkdirSync("FileSystem");

// Remove dir sync
// fs.rmdirSync("FileSystem");



// Async
fs.mkdir("Directory", function(){
    fs.readFile("README.md", "utf8", function(err, data){
        fs.writeFile("./Directory/writeMe.txt", data, function(err, done){
            if(err){
                console.log("Error in creating new file", err)
            } return console.log('Success in creating new file');
        });
    });
});


// Remove file and directory
// fs.unlink('./directory/writeMe.txt', function(){
//     fs.rmdir("Directory");
// })

