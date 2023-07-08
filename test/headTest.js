const head = require('../head');
//const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#head", () => {
  it("Returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  
  it("Returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  
  it("Returns 'Hello' for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });
  
  it("Does not return \"Hello\" for [\"H\", \"Lighthouse\", \"Labs\"]", () => {
    assert.notEqual(head(["H", "Lighthouse", "Labs"]), "Hello"); 
  });
});

//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//assertEqual(head([5,6,7]), [6,5,7]);
//assertEqual(head(["H", "Lighthouse", "Labs"]), "Hello");