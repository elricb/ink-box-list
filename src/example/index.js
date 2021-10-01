const React = require("react");
const {render, Box, Text} = require("ink");

const BoxList = require("../component/box-list");

const contents = require("./contents");

const statusColor = {
  running: "green",
  stopped: "red",
  pending: "yellow"
};

const Example1 = () => (
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
    <Box flexDirection="column" marginTop={1}>
      <Text bold>Example 1: Basic</Text>
      <Text
        color="green"
        dimColor
      >{`<BoxList list={[["box1", "contents"],["box2", "contents"]]} />`}</Text>
      <BoxList list={contents} />
    </Box>
    <Box flexDirection="column" marginTop={1}>
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
    <Box flexDirection="column" marginTop={1}>
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
    <Box flexDirection="column" marginTop={1}>
      <Text bold>Example 4: Terminal Columns/Width Control</Text>
      <Text
        color="green"
        dimColor
      >{`<BoxList width={20} terminalColumns={61} />`}</Text>
      <BoxList width={20} list={contents} terminalColumns={61} />
    </Box>
    <Box flexDirection="column" marginTop={1}>
      <Text bold>Example 5: setText</Text>
      <Text
        color="green"
        dimColor
      >{`<BoxList setProps={(a) => ({ borderColor: statusColor[a[3]] })} setText={a => a.slice(3)} />`}</Text>
      <BoxList
        list={[
          ["app.lxc", "express", "192.168.0.102", "running"],
          ["data.lxc", "graphql", "192.168.0.106", "running"],
          ["pricing.lxc", "laravel", "192.168.0.108", "running"],
          ["geo.lxc", "laravel", "192.168.0.112", "stopped"],
          ["message.lxc", "rabbit", "192.168.0.116", "stopped"],
          ["offer.lxc", "dcm", "192.168.0.123", "pending"]
        ]}
        setProps={a => ({borderColor: statusColor[a[3]]})}
        setText={a => a.slice(0, 3)}
      />
    </Box>
  </Box>
);

render(<Example1 />);
