const React = require("react");
const {render, Box, Text} = require("ink");

const BoxList = require("../component/box-list");

const Example = () => (
  <Box flexDirection="column" marginBottom={1}>
    <Box flexDirection="column" marginTop={1}>
      <Text bold>test 1 - box data</Text>
      <BoxList
        list={[
          ["box1", "more text"],
          ["box2", "more text"]
        ]}
        terminalColumns={200}
      />
    </Box>
    <Box flexDirection="column" marginTop={1}>
      <Text bold>test 2 - box wrapping</Text>
      <BoxList
        list={[
          ["box1", "more text"],
          ["box2", "more text"],
          ["box3", "more text"],
          ["box4", "more text"],
          ["box6", "more text"],
          ["box7", "more text"],
          ["box8", "more text"],
          ["box9", "more text"],
          ["box10", "more text"]
        ]}
        terminalColumns={200}
      />
    </Box>
    <Box flexDirection="column" marginTop={1}>
      <Text bold>test 3 - box width</Text>
      <BoxList
        list={[
          ["box1", "more text"],
          ["box2", "more text"],
          ["box2", "more text"],
          ["box2", "more text"],
          ["box2", "more text"],
          ["box2", "more text"],
          ["box2", "more text"],
          ["box2", "more text"],
          ["box2", "more text"]
        ]}
        width={30}
        terminalColumns={300}
      />
    </Box>
    <Box flexDirection="column" marginTop={1}>
      <Text bold>test 4 - box props</Text>
      <BoxList
        list={[
          ["box1", "more text"],
          ["box2", "more text"],
          ["box3", "more text"],
          ["box4", "more text"]
        ]}
        width={30}
        terminalColumns={300}
        setProps={() => ({borderStyle: "double"})}
      />
    </Box>
    <Box flexDirection="column" marginTop={1}>
      <Text bold>test 5 - box text align</Text>
      <BoxList
        list={[
          ["box1", "more text"],
          ["box2", "more text"],
          ["box3", "more text"],
          ["box4", "more text"]
        ]}
        width={30}
        terminalColumns={300}
        align="flex-end"
      />
    </Box>
    <Box flexDirection="column" marginTop={1}>
      <Text bold>test 6 - box align</Text>
      <BoxList
        list={[
          ["box1", "more text"],
          ["box2", "more text"],
          ["box3", "more text"],
          ["box4", "more text"]
        ]}
        width={30}
        terminalColumns={300}
        boxProps={{justifyContent: "flex-end"}}
      />
    </Box>
  </Box>
);

render(<Example />);
