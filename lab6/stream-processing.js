const fs = require("fs");
const readline = require("readline");

function processFile(filePath) {
  const stream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  rl.on("line", (line) => {
    console.log(line);
  });
}

module.exports = { processFile };