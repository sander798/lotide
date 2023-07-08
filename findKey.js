const findKey = function(object, callback) {
  for (let e of Object.keys(object)) {
    if (callback(object[e])) {
      return e;
    }
  }
  
  return undefined;
};

module.exports = findKey;

/*console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

assertEqual(findKey({blah: 2, s: 1, dsf: 3}, x => x === 3), "dsf");
assertEqual(findKey({a: "sadasd", b: 1, c: 3}, x => x === "sadasd"), "a");
assertEqual(findKey({a: 2, b: 1, c: 3}, x => x === 4), undefined);
assertEqual(findKey({a: 2, b: 2, c: 3}, x => x === 2), "a");
*/