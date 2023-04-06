function searchInArray(array, key, value) {
  return array.find(item => item[key] === value);
}


module.exports = { searchInArray };
