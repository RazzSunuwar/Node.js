const fs = require("fs");

// Sync 
var readme = fs.readFileSync("README.md", "utf8");
console.log(readme);


