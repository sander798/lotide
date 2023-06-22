const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`:D Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`:( Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputString) {
  
  const letterCount = {};
  
  for (let c of inputString) {
    
    if (c === ' '){
      continue;
    }
    
    if (letterCount[c]) {
      letterCount[c]++;
    } else {
      letterCount[c] = 1;
    }
  }
  
  return letterCount;
};

assertEqual(countLetters("bacc 2bcc")["a"], 1);
assertEqual(countLetters("bacc 2bcc")["b"], 2);
assertEqual(countLetters("bacc 2bcc")["c"], 4);
assertEqual(countLetters("bacc 2bcc")["2"], 1);
assertEqual(countLetters("bacc 2bcc")[" "], undefined);