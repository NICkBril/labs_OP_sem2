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

module.exports = { mapAsync };