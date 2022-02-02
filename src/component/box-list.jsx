import React from "react";
import {Box} from "ink";
import PropTypes from "prop-types";
import useBoxWrap from "../effect/use-box-wrap.js";
import mapIntoGroups from "../function/map-into-groups.js";
import BoxListChild from "./box-list-child.jsx";

const BoxList = ({
  width,
  list,
  terminalColumns,
  align = "center",
  boxProps = {},
  setText = o => o,
  setProps = () => ({})
}) => {
  const [, boxWidth, boxes] = useBoxWrap(terminalColumns, width, list);

  if (Number.isNaN(boxWidth) || !boxWidth) {
    throw new Error(`Invalid width, ${width}`);
  }

  return (
    <Box flexDirection="column">
      {mapIntoGroups(
        list,
        boxes
      )((a, key) => (
        <Box
          key={key}
          flexShrink={0}
          flexGrow={0}
          flexBasis="100%"
          justifyContent="flex-start"
          {...boxProps}
        >
          {a.map((content, idx) => (
            <BoxListChild
              key={idx}
              width={boxWidth}
              align={align}
              extendProps={setProps(content)}
              content={setText(content)}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};

BoxList.propTypes = {
  list: PropTypes.any,
  align: PropTypes.string,
  setText: PropTypes.func,
  setProps: PropTypes.func,
  boxProps: PropTypes.object,
  terminalColumns: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default BoxList;
