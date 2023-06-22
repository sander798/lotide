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

const letterPositions = function(sentence) {
  
  const indexes = {};
  
  for (let i = 0; i < sentence.length; i++) {
    
    if (sentence[i] === ' '){
      continue;
    }
    
    if (indexes[sentence[i]]) {
      indexes[sentence[i]].push(i);
    } else {
      indexes[sentence[i]] = [i];
    }
  }
  
  return indexes;
};

assertArraysEqual(letterPositions("hello")["h"], [0]);
assertArraysEqual(letterPositions("hello")["e"], [1]);
assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
assertArraysEqual(letterPositions("hello")["o"], [4]);

