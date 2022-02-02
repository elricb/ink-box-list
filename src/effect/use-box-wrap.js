import process from "process";
import {useStdout} from "ink";
import {useEffect, useState} from "react";
import parseChildWidth from "../function/parse-child-width";
import maxLengthDoubleIterator from "../function/max-length-double-iterator";

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

const useBoxWrap = function (defaultColumns, defaultBoxWidth, list) {
  // Sometimes useStdout returns undefined
  const {stdout = process.stdout} = useStdout();
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
};

export default useBoxWrap;
