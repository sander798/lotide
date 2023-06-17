const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(":D Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(":( Assertion Failed: " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, "1");
assertEqual("asd", "ased");
assertEqual(1, 21);