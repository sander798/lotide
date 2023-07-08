const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`:D Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`:( Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

//assertObjectsEqual({a:2, b:43}, {a:2, b:43});
//assertObjectsEqual({asd:2, b:43}, {a:2, baf:43});
