/*
  Returns whether two given arrays are strictly equal.
*/
const eqArrays = function(ar1, ar2) {
  if (ar1.length !== ar2.length){
    return false;
  }
  
  for (let i = 0; i < ar1.length; i++){
    if (ar1[i] !== ar2[i]) {
      return false;
    }
  }
  
  return true;
};

const assertArraysEqual = function(ar1, ar2) {
  if (eqArrays(ar1, ar2) === true) {
    console.log(`:D Assertion Passed: ${ar1} === ${ar2}`);
  } else {
    console.log(`:( Assertion Failed: ${ar1} !== ${ar2}`);
  }
};

const without = function(source, itemsToRemove) {
  
  let newArray = [];
  
  for (let e of source) {
    if (!itemsToRemove.includes(e)){
      newArray.push(e);
    }
  }
  
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual([1,2,4], without([1,2,3,4], [3]));
assertArraysEqual(["1","2","4"], without([1,2,3,4], ["3"]));
assertArraysEqual(["1","2","4"], without([1,2,"3",4], ["3"]));
assertArraysEqual(["1","2","4"], without(["1","2","3","4","5"], ["3", "5"]));
assertArraysEqual([], without([], []));
