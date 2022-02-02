const React = require("react");
const {render, Box, Text} = require("ink");

const BoxList = require("../component/box-list");

const contents = require("./contents");

const Example2 = () => (
  <Box flexDirection="column" marginBottom={1} marginTop={1}>
    <Text bold>Example 2: Edit Alignment & Width</Text>
    <Text
      color="green"
      dimColor
    >{`<BoxList width="20%" align="flex-end" boxProps={{justifyContent: "space-between"}} />`}</Text>
    <BoxList
      width="20%"
      list={contents}
      align="flex-end"
      boxProps={{justifyContent: "space-between"}}
    />
  </Box>
);

render(<Example2 />);
