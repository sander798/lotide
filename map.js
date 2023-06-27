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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  
  const results = [];
  
  for (let e of array) {
    results.push(callback(e));
  }
  
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word), words);
assertArraysEqual(map(words, word => ""), ["", "", "", "", ""]);
assertArraysEqual(map(words, word => word + "s"), ["grounds", "controls", "tos", "majors", "toms"]);
