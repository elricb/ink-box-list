const mapObjectGroup = (list, count) => f => {
  const keys = Object.keys(list);
  const a = [];

  for (let i = 0; keys.length !== 0; i++) {
    a.push(
      f(
        keys.splice(0, count).map(key => list[key]),
        i
      )
    );
  }

  return a;
};

const mapArrayGroup = (list, count) => f => {
  const a = [];

  for (let i = 0, j = 0; i < list.length; i += count, j++) {
    a.push(f(list.slice(i, i + count), j));
  }

  return a;
};

const mapIntoGroups =
  (list, count, d = []) =>
  f =>
    list === null
      ? d
      : Array.isArray(list)
      ? mapArrayGroup(list, count)(f)
      : typeof list[Symbol.iterator] === "function"
      ? mapArrayGroup(Array.from(list), count)(f)
      : typeof list === "object"
      ? mapObjectGroup(list, count)(f)
      : d;

export default mapIntoGroups;
