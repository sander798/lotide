//const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require('chai').assert;

describe("#tail", () => {
  it("Returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  
  it("Does not alter the array given as an argument.", () => {
    let unchangedArray = [1, 2, 3];
    tail(unchangedArray);
    assert.deepEqual(unchangedArray, [1, 2, 3]);
  });
  
  it("Returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  
  it("Returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  
});

//let unchangedArray = [1, 2, 3, 4];

//tail(unchangedArray);

//assertEqual(unchangedArray.length, 4);

//assertEqual(tail([1, 2, 3, 4])[0], [2, 3, 4][0]);
//assertEqual(tail([1, 2, 3, 4])[1], [2, 3, 4][1]);
//assertEqual(tail([1, 2, 3, 4])[2], [2, 3, 4][2]);
//assertEqual(tail(["asdasd", "dfgh", "srggh", 4]), ["dfgh", "srggh", 4]);
//assertEqual(tail([4]), []);
//assertEqual(tail([]), []);