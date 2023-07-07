const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const middle = function(ar) {
  
  if (ar.length < 3) {
    return [];
  } else if (ar.length % 2 === 0) {
    return [ar[Math.ceil(ar.length / 2) - 1], ar[Math.ceil(ar.length / 2)]];
  }
  
  return [ar[Math.ceil(ar.length / 2) - 1]];
};

module.exports = middle;