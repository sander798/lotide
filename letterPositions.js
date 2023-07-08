const letterPositions = function(sentence) {
  
  const indexes = {};
  
  for (let i = 0; i < sentence.length; i++) {
    
    if (sentence[i] === ' '){
      continue;
    }
    
    if (indexes[sentence[i]]) {
      indexes[sentence[i]].push(i);
    } else {
      indexes[sentence[i]] = [i];
    }
  }
  
  return indexes;
};

module.exports = letterPositions;

/*assertArraysEqual(letterPositions("hello")["h"], [0]);
assertArraysEqual(letterPositions("hello")["e"], [1]);
assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
assertArraysEqual(letterPositions("hello")["o"], [4]);
*/