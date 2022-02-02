const parsePercent = function (x, whole = 100) {
  const f = Number.parseFloat(x);

  if (!x || Number.isNaN(x)) {
    return 0;
  }

  return (f / 100) * whole;
};

export default parsePercent;
