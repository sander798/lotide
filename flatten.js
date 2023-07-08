/*
  Returns an array with all elements of the given 2D array and their contents placed into a single one-dimensional array.
*/
const flatten = function(ar) {
  
  if (typeof ar !== "object") {
    return ar;
  }
  
  let newArray = [];
  
  for (let x = 0; x < ar.length; x++) {
    
    if (Array.isArray(ar[x])) { //Check whether this element is an array before continuing
      
      let innerValue = flatten(ar[x]);//Recursively flatten the element
      
      if (Array.isArray(innerValue)) {
        for (let y = 0; y < innerValue.length; y++) {
          newArray.push(innerValue[y]);
        }
      } else {
        newArray.push(innerValue);
      }
    } else {
      newArray.push(ar[x]);
    }
  }
  
  return newArray;
};

module.exports = flatten;