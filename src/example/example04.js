const React = require("react");
const {render, Box, Text} = require("ink");

const BoxList = require("../component/box-list");

const contents = require("./contents");

const Example4 = () => (
  <Box flexDirection="column" marginBottom={1} marginTop={1}>
    <Text bold>Example 4: Terminal Columns/Width Control</Text>
    <Text
      color="green"
      dimColor
    >{`<BoxList width={20} terminalColumns={61} />`}</Text>
    <BoxList width={20} list={contents} terminalColumns={61} />
  </Box>
);

render(<Example4 />);
