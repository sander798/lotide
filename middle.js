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

const middle = function(ar) {
  
  if (ar.length < 3) {
    return [];
  } else if (ar.length % 2 === 0) {
    return [ar[Math.ceil(ar.length / 2) - 1], ar[Math.ceil(ar.length / 2)]];
  }
  
  return [ar[Math.ceil(ar.length / 2) - 1]];
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []);// => []
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);