const fs = require("fs");

// Sync 
var readme = fs.readFileSync("README.md", "utf8");
// console.log(readme);

// Write file, filename with writeMe.txt
fs.writeFileSync('writeMe.txt', readme);


