const React = require("react");
const {render, Box, Text} = require("ink");

const BoxList = require("../component/box-list");

const contents = require("./contents");

const Example3 = () => (
  <Box flexDirection="column" marginBottom={1} marginTop={1}>
    <Text bold>Example 3: Edit Box Props</Text>
    <Text
      color="green"
      dimColor
    >{`<BoxList setProps={(o) => ({ borderStyle: "double", borderColor: o[0] === "box3" ? "blue" : "default" })} />`}</Text>
    <BoxList
      list={contents}
      setProps={o => ({
        borderStyle: "double",
        borderColor:
          o[0] === "box3" ? "blue" : o[0] === "box10" ? "magenta" : "default"
      })}
    />
  </Box>
);

render(<Example3 />);
