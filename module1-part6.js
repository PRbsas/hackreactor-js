function getEvenLengthWordsAtProperty(obj, key) {
  var array = obj[key];
  if (!(Array.isArray(array)) || array.length === 0) {
    return [];
  }
  return array.filter(function (word) {
    if (word.length % 2 === 0) {
      return word;
    }
  });
}

var obj = {
  key: ['a', 'long', 'game']
};
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // ['long', 'game']



function filterOddLengthWords(words) {
  return words.filter(function (word) {
    if (word.length % 2 !== 0) {
      return word;
    }
  });
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // ['there', "now']
