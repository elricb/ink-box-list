const React = require("react");
const {Box, Text} = require("ink");
const PropTypes = require("prop-types");

const mapIterable = require("../function/map-iterable");

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

module.exports = BoxListChild;
