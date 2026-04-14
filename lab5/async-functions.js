function mapAsync(array, iteratee, callback) {
  const result = [];
  let count = 0;

  if (array.length === 0) {
    return callback(null, []);
  }

  for (let i = 0; i < array.length; i++) {
    iteratee(array[i], (err, value) => {
      if (err) return callback(err);
      
      result[i] = value;
      count++;

      if (count === array.length) {
        callback(null, result);
      }
    });
  }
}

function mapPromise(array, iteratee, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      return reject(new Error("Aborted"));
    }

    const abortHandler = () => {
      reject(new Error("Aborted"));
    };

    signal?.addEventListener('abort', abortHandler);

    const promises = array.map(item => iteratee(item));

    Promise.all(promises)
      .then(res => {
        signal?.removeEventListener('abort', abortHandler);
        resolve(res);
      })
      .catch(err => {
        signal?.removeEventListener('abort', abortHandler);
        reject(err);
      });
  });
}

module.exports = { mapAsync, mapPromise };