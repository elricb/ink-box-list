const React = require("react");
const {render, Box, Text} = require("ink");

const BoxList = require("../component/box-list");

const contents = require("./contents");

const Example1 = () => (
  <Box flexDirection="column" marginBottom={1} marginTop={1}>
    <Text bold>Example 1: Basic</Text>
    <Text
      color="green"
      dimColor
    >{`<BoxList list={[["box1", "contents"],["box2", "contents"]]} />`}</Text>
    <BoxList list={contents} />
  </Box>
);

render(<Example1/>);
