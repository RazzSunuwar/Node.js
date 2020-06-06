const fs = require("fs");

fs.unlink("WriteMe.txt", function(err) {
    if(err) throw err;
        console.log('File deteted');
});