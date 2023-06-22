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

const carObject1 = {colour: "blue", type: "convertible", maker: "Toyota"};
const carObject2 = {colour: "red", type: "truck", maker: "Ford"};

assertEqual(eqObjects({a:1, b:4, c:2}, {a:1, b:4, c:2}), true);
assertEqual(eqObjects(carObject1, carObject2), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);