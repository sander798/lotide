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

const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`:D Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`:( Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(obj1, obj2) {

  //Check for same number of keys
  if (Object.keys(obj1).length !== Object.keys(obj2).length){
    return false;
  }
  
  for (let k of Object.keys(obj1)){
    
    if (Array.isArray(obj1[k])){
      //console.log(obj1[k] + ", " + obj2[k]);      
      if (!eqArrays(obj1[k], obj2[k])) {
        return false;
      }
    } else if (typeof obj1[k] === Object) {
      //console.log("Calling eqObjects() recursively!");
      if (!eqObjects(obj1[k], obj2[k])) {
        return false;
      }
    } else if (obj1[k] !== obj2[k]) {
      return false;
    }
  }
  
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`:D Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`:( Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a:2, b:43}, {a:2, b:43});
assertObjectsEqual({asd:2, b:43}, {a:2, baf:43});
