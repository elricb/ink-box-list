import maxLengthFlatIterator from "./max-length-flat-iterator";

const maxLengthDoubleIterator = (list, d = 0) =>
  list === null
    ? d
    : typeof list[Symbol.iterator] === "function"
    ? Array.from(list).reduce(
        (acc, cur) => Math.max(acc, maxLengthFlatIterator(cur)),
        0
      )
    : typeof list === "object"
    ? Object.keys(list).reduce(
        (acc, cur) => Math.max(acc, maxLengthFlatIterator(list[cur])),
        0
      )
    : d;

export default maxLengthDoubleIterator;
