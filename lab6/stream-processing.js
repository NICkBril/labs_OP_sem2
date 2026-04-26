const fs = require("fs");

function processFile(filePath) {
  const stream = fs.createReadStream(filePath);
}

module.exports = { processFile };