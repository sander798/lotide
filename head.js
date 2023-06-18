const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`:D Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`:( Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(ar) {
  return ar[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), [6,5,7]);
assertEqual(head(["H", "Lighthouse", "Labs"]), "Hello");
