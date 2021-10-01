module.exports = function (list, df = []) {
  return function (f) {
    const map = [];

    if (list === null) {
      return df;
    }

    if (Array.isArray(list)) {
      for (let i = 0; i < list.length; i++) {
        map.push(f(list[i], i, i));
      }

      return map.length === 0 ? df : map;
    }

    if (
      typeof list[Symbol.iterator] === "function" ||
      typeof list === "object"
    ) {
      let i = 0;
      for (const key in list) {
        if (Object.prototype.hasOwnProperty.call(list, key)) {
          map.push(f(list[key], key, i));
          i++;
        }
      }

      return map.length === 0 ? df : map;
    }

    return df;
  };
};
