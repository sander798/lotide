const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`:D Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`:( Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(ar) {
  
  let newArray = [];
  
  for (let i = 1; i < ar.length; i++) {
    newArray.push(ar[i]);
  }
  
  return newArray;
};

let unchangedArray = [1, 2, 3, 4];

tail(unchangedArray);

assertEqual(unchangedArray.length, 4);

assertEqual(tail([1, 2, 3, 4])[0], [2, 3, 4][0]);
assertEqual(tail([1, 2, 3, 4])[1], [2, 3, 4][1]);
assertEqual(tail([1, 2, 3, 4])[2], [2, 3, 4][2]);
//assertEqual(tail(["asdasd", "dfgh", "srggh", 4]), ["dfgh", "srggh", 4]);
//assertEqual(tail([4]), []);
//assertEqual(tail([]), []);