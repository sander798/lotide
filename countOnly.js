const countOnly = function(allItems, itemsToCount) {
  
  const results = {};
  
  for (const i of allItems) {
    
    if (itemsToCount[i]){//If the item exists as a property of itemsToCount, count it
      if (!results[i]) {
        results[i] = 1;
      } else {
        results[i]++;
      }
    }
  }
  
  return results;
};

module.exports = countOnly;

/*const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
*/