function search_array_by_key(array, key, value) {
  return array.find(item => item[key] === value);
}


module.exports = { search_array_by_key };
