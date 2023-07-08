const map = function(array, callback) {
  
  const results = [];
  
  for (let e of array) {
    results.push(callback(e));
  }
  
  return results;
};

module.exports = map;

/*const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word), words);
assertArraysEqual(map(words, word => ""), ["", "", "", "", ""]);
assertArraysEqual(map(words, word => word + "s"), ["grounds", "controls", "tos", "majors", "toms"]);
*/