const fs = require("fs");
const readline = require("readline");

async function processFile(filePath) {
  const stream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  let lineCount = 0;
  let errorCount = 0;

  for await (const line of rl) {
    lineCount++;

    if (line.toLowerCase().includes("error")) {
      errorCount++;
    }
  }

  return {
    lineCount,
    errorCount,
  };
}

module.exports = { processFile };