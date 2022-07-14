function forEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    callback(array[index]);
  }
}

module.exports = forEach;
