const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`:D Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`:( Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(sourceObject, keyValue) {
  
  for (let k in sourceObject) {
    if (sourceObject[k] === keyValue) {
      return k;
    }
  }
  
  return undefined;
};

assertEqual(findKeyByValue({a: 2, b:1, c:3}, 2), "a");
assertEqual(findKeyByValue({a: 2, b:1, c:3}, 1), "b");
assertEqual(findKeyByValue({a: 2, b:1, c:3}, 3), "c");
assertEqual(findKeyByValue({a: 2, b:1, c:3}, 4), undefined);
assertEqual(findKeyByValue({}, 1), undefined);