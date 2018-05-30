const fs = require("fs");

fs.readFile('./data.txt', (err, data) => {
  if (err) {
    return console.error('Error reading file:', err.message);
  }
  console.log("Done reading async!");
  const fileLength = data.toString().length;
  fs.writeFile('./output.txt', fileLength, (err) => {
    if (err) {
        return console.error('Error writing file:', err.message);
    }
    console.log("Done writing file!");
  });
});
