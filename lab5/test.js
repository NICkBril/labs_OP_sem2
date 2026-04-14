const { mapAsync, mapPromise } = require('./async-functions');

const nums = [1, 2, 3];
const asyncDouble = (n) => new Promise(r => setTimeout(() => r(n * 2), 100));

async function run() {
  console.log('Testing Callback:');
  mapAsync([10, 20], (val, cb) => cb(null, val + 5), (err, res) => {
    console.log('Result callback:', res);
  });

  console.log('Testing Async/Await:');
  try {
    const results = await mapPromise(nums, asyncDouble);
    console.log('Result async/await:', results);
  } catch (e) {
    console.error(e);
  }

  console.log('Testing Abort:');
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 50);

  try {
    await mapPromise(nums, asyncDouble, controller.signal);
  } catch (e) {
    console.log('Caught:', e.message);
  }
}

run();