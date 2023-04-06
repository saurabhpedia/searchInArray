function searchArrayByKey(array, key, value) {
  return array.find(item => item[key] === value);
}


module.exports = { searchArrayByKey };
