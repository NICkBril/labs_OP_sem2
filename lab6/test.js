const { processFile } = require("./stream-processing");

async function run() {
  try {
    const result = await processFile("./lab6/data.txt");

    console.log("Total lines:", result.lineCount);
    console.log("Lines with 'error':", result.errorCount);
  } catch (err) {
    console.error("Something went wrong:", err.message);
  }
}

run();