const fs = require("fs");

// It blocks before printing "Done reading file"
console.log("Start to read file");
const result = fs.readFileSync('./data.txt');
console.log("Done reading file");

