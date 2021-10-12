const React = require("react");
const {render, Box, Text} = require("ink");

const BoxList = require("../component/box-list");

const contents = require("./contents");

const statusColor = {
  running: "green",
  stopped: "red",
  pending: "yellow"
};

const Example5 = () => (
  <Box flexDirection="column" marginBottom={1} marginTop={1}>
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
);

render(<Example5/>);
