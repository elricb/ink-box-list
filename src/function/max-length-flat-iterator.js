const maxLengthFlatIterator = list =>
  Array.isArray(list)
    ? list.reduce((acc, cur) => Math.max(acc, cur.length), 0)
    : typeof list === "object" && list !== null
    ? Object.keys(list).reduce((acc, cur) => Math.max(acc, list[cur].length), 0)
    : 0;

module.exports = maxLengthFlatIterator;
