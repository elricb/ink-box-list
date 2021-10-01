const {useStdout} = require("ink");
const {useEffect, useState} = require("react");

const parseChildWidth = require("../function/parse-child-width");
const maxLengthDoubleIterator = require("../function/max-length-double-iterator");

const filterReturnArray = function (
  baseColumns,
  defaultColumns,
  defaultWidth,
  list
) {
  const columns =
    defaultColumns && defaultColumns < baseColumns
      ? defaultColumns
      : baseColumns;
  const width =
    parseChildWidth(defaultWidth, columns) || maxLengthDoubleIterator(list) + 4;

  return [columns, width, Math.trunc(columns / width)];
};

function useBoxWrap(defaultColumns, defaultBoxWidth, list) {
  const {stdout} = useStdout();
  const [dimensions, setDimensions] = useState(
    filterReturnArray(stdout.columns, defaultColumns, defaultBoxWidth, list)
  );

  useEffect(() => {
    if (!stdout) {
      return;
    }

    const handler = () =>
      setDimensions(
        filterReturnArray(stdout.columns, defaultColumns, defaultBoxWidth, list)
      );

    stdout.on("resize", handler);

    return () => {
      stdout.off("resize", handler);
    };
  }, [stdout, defaultColumns, defaultBoxWidth, list]);

  return dimensions;
}

module.exports = useBoxWrap;
