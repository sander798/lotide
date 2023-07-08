const without = function(source, itemsToRemove) {
  
  let newArray = [];
  
  for (let e of source) {
    if (!itemsToRemove.includes(e)){
      newArray.push(e);
    }
  }
  
  return newArray;
};

module.exports = without;

/*const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual([1,2,4], without([1,2,3,4], [3]));
assertArraysEqual(["1","2","4"], without([1,2,3,4], ["3"]));
assertArraysEqual(["1","2","4"], without([1,2,"3",4], ["3"]));
assertArraysEqual(["1","2","4"], without(["1","2","3","4","5"], ["3", "5"]));
assertArraysEqual([], without([], []));*/
