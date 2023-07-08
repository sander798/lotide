const eqArrays = require("./eqArrays");

const eqObjects = function(obj1, obj2) {

  //Check for same number of keys
  if (Object.keys(obj1).length !== Object.keys(obj2).length){
    return false;
  }
  
  for (let k of Object.keys(obj1)){
    
    if (Array.isArray(obj1[k])){
      //console.log(obj1[k] + ", " + obj2[k]);      
      if (!eqArrays(obj1[k], obj2[k])) {
        return false;
      }
    } else if (typeof obj1[k] === Object) {
      //console.log("Calling eqObjects() recursively!");
      if (!eqObjects(obj1[k], obj2[k])) {
        return false;
      }
    } else if (obj1[k] !== obj2[k]) {
      return false;
    }
  }
  
  return true;
};

module.exports = eqObjects;

/*const carObject1 = {colour: "blue", type: "convertible", maker: "Toyota"};
const carObject2 = {colour: "red", type: "truck", maker: "Ford"};

assertEqual(eqObjects({a:1, b:4, c:2}, {a:1, b:4, c:2}), true);
assertEqual(eqObjects(carObject1, carObject2), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
*/