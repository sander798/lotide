const takeUntil = function (array, callback) {
  
  let output = [];
  
  for (let e of array) {
    if (callback(e)){
      return output;
    }
    
    output.push(e);
  }
  
  return output;
};

module.exports = takeUntil;

/*const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil([1,2,3,4], x => x === 4), [1, 2, 3]);
assertArraysEqual(takeUntil([1,2,3,4], x => x === 1), []);
assertArraysEqual(takeUntil([1,2,3,4], x => x === 0), [1, 2, 3, 4]);
assertArraysEqual(takeUntil([1,2,3,4], x => x >= 3), [1, 2]);
assertArraysEqual(takeUntil([1,2,3,4], x => x < 4), []);
*/

