import test from "ava";
import {Text} from "ink";
import React from "react";
import PropTypes from "prop-types";
import {render} from "ink-testing-library";

import BoxList, {useBoxWrap} from "../lib";

const TestUseBoxWrap = ({terminalColumns, width, list}) => (
  <Text>{JSON.stringify(useBoxWrap(terminalColumns, width, list))}</Text>
);

TestUseBoxWrap.propTypes = {
  list: PropTypes.any,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  terminalColumns: PropTypes.number
};

test("component useBoxWrap - test 1 - box wrapping", t => {
  const test = {
    terminalColumns: 100,
    list: [
      ["box1", "more text"],
      ["box2", "more text"],
      ["box3", "more text"],
      ["box4", "more text"],
      ["box6", "more text"],
      ["box7", "more text"],
      ["box8", "more text"],
      ["box9", "more text"],
      ["box10", "more text"]
    ]
  };
  const {lastFrame} = render(<TestUseBoxWrap {...test} />);

  t.snapshot(lastFrame());
});

test("component BoxList - test 2 - box wrapping", t => {
  const test = {
    terminalColumns: 100,
    list: [
      ["box1", "more text"],
      ["box2", "more text"],
      ["box3", "more text"],
      ["box4", "more text"],
      ["box6", "more text"],
      ["box7", "more text"],
      ["box8", "more text"],
      ["box9", "more text"],
      ["box10", "more text"]
    ]
  };
  const {lastFrame} = render(<BoxList {...test} />);

  t.snapshot(lastFrame());
});

test("component useBoxWrap - test 3 - box width / props", t => {
  const test = {
    terminalColumns: 100,
    width: 30,
    list: [
      ["box1", "more text"],
      ["box2", "more text"],
      ["box3", "more text"],
      ["box4", "more text"]
    ],
    setProps: () => ({borderStyle: "double"})
  };
  const {lastFrame} = render(<TestUseBoxWrap {...test} />);

  t.snapshot(lastFrame());
});

test("component BoxList.js - test 4 - box width / props", t => {
  const test = {
    terminalColumns: 100,
    width: 30,
    list: [
      ["box1", "more text"],
      ["box2", "more text"],
      ["box3", "more text"],
      ["box4", "more text"]
    ],
    setProps: () => ({borderStyle: "double"})
  };
  const {lastFrame} = render(<BoxList {...test} />);

  t.snapshot(lastFrame());
});

test("component BoxList.js - test 5 - box text align", t => {
  const test = {
    terminalColumns: 100,
    width: 30,
    list: [
      ["box1", "more text"],
      ["box2", "more text"],
      ["box3", "more text"],
      ["box4", "more text"]
    ],
    align: "flex-end"
  };
  const {lastFrame} = render(<BoxList {...test} />);

  t.snapshot(lastFrame());
});

test("component BoxList.js - test 6 - box align", t => {
  const test = {
    list: [
      ["box1", "more text"],
      ["box2", "more text"],
      ["box3", "more text"],
      ["box4", "more text"]
    ],
    width: 30,
    terminalColumns: 100,
    boxProps: {justifyContent: "flex-end"}
  };
  const {lastFrame} = render(<BoxList {...test} />);

  t.snapshot(lastFrame());
});
