function countCharacter(str, char) {
  if (!char || 0 === char.length) {
    return 0;
  } else {
    return (str.split(char)).length - 1;
  }
}

var output = countCharacter('I am a hacker', 'a');
console.log(output); //returns 3



function getAllLetters(str) {
  return str.split('');
}

var output = getAllLetters('Radagast');
console.log(output); //returns ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']



function getAllWords(str) {
  if (!str || 0 === str.length) {
    return [];
  } else {
    return str.split(' ');
  }
}

var output = getAllWords('Radagast the Brown');
console.log(output); //returns ['Radagast', 'the', 'Brown']

function countWords(str) {
  if (!str || 0 === str.length) {
    return {};
  } else {
    var obj = {};
    var words = str.split(' ');
    var counts = {};
    var count = words.forEach(function(item) {
      counts[item] = (counts[item] || 0) + 1;
    });
    return obj[words] = counts;
  }
}

var output = countWords('ask a bunch get a bunch');
console.log(output); //returns {ask: 1, a: 2, bunch: 2, get: 1}



function removeFromBack(arr) {
  arr.pop();
  return arr;
}

var output = removeFromBack([1, 2, 3]);
console.log(output); //returns [1, 2]
