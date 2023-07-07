const assertEqual = require("./assertEqual");

const tail = function(ar) {
  
  let newArray = [];
  
  for (let i = 1; i < ar.length; i++) {
    newArray.push(ar[i]);
  }
  
  return newArray;
};

module.exports = tail;