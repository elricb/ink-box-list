import React from "react";
import {Box, Text} from "ink";
import PropTypes from "prop-types";
import mapIterable from "../function/map-iterable";

const BoxListChild = ({align, width, content, extendProps}) => (
  <Box
    flexShrink={0}
    flexGrow={0}
    flexBasis={width}
    flexDirection="column"
    borderStyle="single"
    alignContent="center"
    {...extendProps}
  >
    {mapIterable(content)((text, key) => (
      <Box key={key} justifyContent={align}>
        <Text>{text}</Text>
      </Box>
    ))}
  </Box>
);

BoxListChild.propTypes = {
  align: PropTypes.string,
  content: PropTypes.any,
  extendProps: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default BoxListChild;
