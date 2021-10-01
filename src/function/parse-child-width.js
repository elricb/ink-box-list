/// on failure returns 0
module.exports = function (x, whole = 100) {
  const f = Number.parseFloat(x);

  if (Number.isNaN(f) || !x) {
    return 0;
  }

  if (typeof x === "string" && x.charAt(x.length - 1) === "%") {
    return f / 100 > 1 ? 0 : (f / 100) * whole;
  }

  return f > whole ? 0 : f;
};
