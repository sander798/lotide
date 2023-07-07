const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([], []);
assertArraysEqual([1, 2], [1, 2]);
assertArraysEqual([], [2, 5]);