# ink-box-list

> Box list component for [Ink](https://github.com/vadimdemedes/ink).

I made this for personal use to provide status overview lists. I'm sharing in case it's useful to anyone.

This relies on all boxes being the same width and is not a true yoga line wrapping style tool.

## Install

```
$ npm install @elricb/ink-box-list
```

## Usage

```jsx
import React from "react";
import {render} from "ink";
import BoxList from "ink-box-list";

const statusColor = {
  running: "green",
  stopped: "red",
  pending: "yellow"
};

const DevBoxes = () => (
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
    setText={a => a.slice(3)}
  />
);

render(<DevBoxes />);
```

<img src="media/demo.gif" width="90%" style="max-width:1580px;">

## Props

### list

Type: `array` / `object`

Data for boxes with a depth level of 2.

### width

Type: `string` / `integer`

Number of columns or string percent.

### align

Type: `string`

justifyContent for text. Uses [Ink Box](https://github.com/vadimdemedes/ink#box) component property.

### boxProps

Type: `object`

Set parent [Ink Box](https://github.com/vadimdemedes/ink#box) component properties.

### setProps

Type: `function`

Set child box [Ink Box](https://github.com/vadimdemedes/ink#box) component properties. Function argument is current list item.

```js
// callback
function(listDetails) {
  return listDetails[0] === "something"
    ? {borderStyle: "double"}
    : {borderStyle: "single"};
}
```

### setText

Type: `function`

Override box text. Function argument is current list item.

```js
// callback
function(listDetails) {
  if (listDetails[0] === "message.lxc") {
    unset listDetails[2];
  }

  return listDetails;
}
```
