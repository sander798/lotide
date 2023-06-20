/*
  Returns an array with all elements of the given array and their contents to any depth placed into a single one-dimensional array.
*/
const flatten = function(ar) {
  
  /*if (!Array.isArray(ar)){
    return ar;
  }*/
  
  let newArray = [];
  
  for (let x = 0; x < ar.length; x++) {
    //newArray.push(flatten(ar[i]));
    if (Array.isArray(ar[x])) { //Check whether this element is an array before continuing
      for (let y = 0; y < ar[x].length; y++) {
        newArray.push(ar[x][y]);
      }
    } else {
      newArray.push(ar[x]);
    }
  }
  
  return newArray;
};

console.log(flatten([[1,2,3],[4,5,6],[7,8,9,10], 11, 12]));