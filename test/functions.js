import test from "ava";
import {mapIntoGroups, maxLengthDoubleIterator} from "../lib";
import parseChildWidth from "../lib/function/parse-child-width";

test("function parse-child-width - test 1", t => {
  t.is(parseChildWidth("10%", 200), 20);
});

test("function parse-child-width - test 2", t => {
  t.is(parseChildWidth("2.5%", 200), 5);
});

test("function map-into-groups - test 1", t => {
  const a = mapIntoGroups([1, 2, 3, 4, 5, 6, 7, 8], 4)(i => i);
  t.deepEqual(a, [
    [1, 2, 3, 4],
    [5, 6, 7, 8]
  ]);
});

test("function map-into-groups - test 2", t => {
  const a = mapIntoGroups([1, 2, 3, 4, 5, 6, 7, 8], 3)(i => i);
  t.deepEqual(a, [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8]
  ]);
});

test("function max-length-double-iterator - test 1", t => {
  t.is(maxLengthDoubleIterator([["a"], ["ab"], ["abc"], ["abcd"]]), 4);
});
