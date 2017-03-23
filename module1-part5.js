function addToFrontOfNew(arr, element) {
  var newA = Array.from(arr);
  newA.unshift(element);
  return newA;
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // [3, 1, 2];
console.log(input); // [1, 2]



function addToBackOfNew(arr, element) {
  var newA = Array.from(arr);
  newA.push(element);
  return newA;
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // [1, 2]
console.log(output); // [1, 2, 3]



function getAllElementsButNth(array, n) {
  var newA = Array.from(array);
  newA.splice(n, 1);
  return newA;
}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); //  ['a', 'c']



function areValidCredentials(name, password) {
  if (name.length > 3 && password.length > 8) {
    return true;
  } else {
    return false;
  }
}

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // true



function getIndexOf(char, str) {
    return str.search(char);
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // 2



function findMinLengthOfThreeWords(word1, word2, word3) {
  if (word1.length < word2.length && word1.length < word3.length) {
    return word1.length;
  } else if (word2.length < word1.length && word1.length < word3.length) {
    return  word2.length;
  } else {
    return word3.length;
  }
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // 1



function findMaxLengthOfThreeWords(word1, word2, word3) {
  if (word1.length > word2.length && word1.length > word3.length) {
    return word1.length;
  } else if (word2.length > word1.length && word1.length > word3.length) {
    return  word2.length;
  } else {
    return word3.length;
  }
}

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // 3



function getElementsThatEqual10AtProperty(obj, key) {
  var array = obj[key];
  if (!(Array.isArray(array)) || array.length === 0 || !(array.includes(10))) {
    return [];
  }
  array.forEach(function (element, index, array) {
      index = array.indexOf(10);
      array.splice(!index, 1);
    });
  return array;
}

var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // [10, 10]



function select(arr, obj) {
  var newObj = {};
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }
  arr.forEach(function (a) {
    if (keys.includes(a)) {
      newObj[a[0]] = obj[a];
    }
  });
  return newObj;
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // { a: 1, c: 3 }



function getElementsLessThan100AtProperty(obj, key) {
  var array = obj[key];
  if (!(Array.isArray(array)) || array.length === 0) {
    return [];
  }
  var newArray = [];
  array.forEach(function (element, index, array) {
      if (element < 100) {
        newArray.push(element);
      } else if (element > 100) {
        return [];
      }

    });
  return newArray;
}

var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // [20, 50]

function countAllCharacters(str) {
  var splitStr = str.split('');
  var obj = {};
  splitStr.forEach(function (a, index, splitStr) {
    var count = str.split(a).length - 1;
    obj[a] = count;
  });
  return obj;
}

var output = countAllCharacters('banana');
console.log(output); //  {b: 1, a: 3, n: 2}



function getElementsGreaterThan10AtProperty(obj, key) {
  var array = obj[key];
  if (!(Array.isArray(array)) || array.length === 0) {
    return [];
  }
  var newArray = [];
  array.forEach(function (element, index, array) {
      if (element > 10) {
        newArray.push(element);
      } else if (element < 10) {
        return [];
      }
    });
  return newArray;
}

var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // [20, 30]



function removeElement(array, discarder) {
  if (array.length === 0) {
    return [];
  }
  array.forEach(function (a) {
    if (array.includes(discarder) && array[a] !== array[0]) {
      var index = array.indexOf(discarder);
      while (index !== -1) {
        array.splice(index, 1);
        index = array.indexOf(discarder);
      }
    }
  });
  return array;
}

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // [1, 3, 1]

var output = removeElement([false, true], true);
console.log(output); // [ false ]

var output = removeElement([true, true], true);
console.log(output); // []



function getFirstElementOfProperty(obj, key) {
  var array = obj[key];
  if (!(Array.isArray(array)) || array.length === 0) {
    return undefined;
  }
  return array[0];
}

var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // 1



function getNthElementOfProperty(obj, key, n) {
  var array = obj[key];
  if (!(Array.isArray(array)) || array.length === 0) {
    return undefined;
  }
  return array[n];
}

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // 2



function getLastElementOfProperty(obj, key) {
  var array = obj[key];
  if (!(Array.isArray(array)) || array.length === 0) {
    return undefined;
  }
  var last = array.length -1;
  return array[last];
}

var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // 5



function keep(array, keeper) {
  return array.filter(function (val) {
    if (val === keeper) {
      return keeper;
    }
  });
}

var output = keep([1, 2, 3, 2, 1], 2);
console.log(output); // [2, 2]



function getOddLengthWordsAtProperty(obj, key) {
  var array = obj[key];
  if (!(Array.isArray(array)) || array.length === 0) {
    return [];
  }
  return array.filter(function (word) {
    if (word.length % 2 !== 0) {
      return word;
    }
  });
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // ['has', 'words']



function computeAverageOfNumbers(nums) {
  if (nums.length === 0) {
    return 0;
  }
  var sum = nums.reduce(function (previous, current) {
    return current += previous;
  });
  var avg = sum / nums.length;
  return avg;
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // 3



function getAverageOfElementsAtProperty(obj, key) {
  var array = obj[key];
  if (!(Array.isArray(array)) || array.length === 0) {
    return 0;
  }
  var sum = array.reduce(function (previous, current) {
    return current += previous;
  });
  var avg = sum / array.length;
  return avg;
}

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // 2
