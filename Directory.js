const fs = require("fs");

// Create dir sync
// fs.mkdirSync("FileSystem");

// Remove dir sync
// fs.rmdirSync("FileSystem");



// Async
// fs.mkdir("Folder", function(){
//     fs.readFile("README.md", "utf8", function(err, data){
//         fs.writeFile("./Folder/writeMe.txt", data, function(err, done){
//             if(err){
//                 console.log("Error in creating new file", err)
//             } return console.log('Success in creating new file');
//         });
//     });
// });


// Remove file and directory
fs.unlink('./Folder/writeMe.txt', function(err, data){
    fs.rmdir("Folder", data, function(err, done){
        if(err){
            console.log("Error in remove folder", done)
        } return console.log('Success in delete folder');
    });
});

