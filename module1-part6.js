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



function getSquaredElementsAtProperty(obj, key) {
  var array = obj[key];
  if (!(Array.isArray(array)) || array.length === 0) {
    return [];
  }
  array.forEach(function (num, index, array) {
    array[index] = num * num;
  });
  return array;
}

var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // [4, 1, 25]



function getOddElementsAtProperty(obj, key) {
  var array = obj[key];
  if (!(Array.isArray(array)) || array.length === 0) {
    return [];
  }
  return array.filter(function (elem) {
    if (elem % 2 !== 0) {
      return elem;
    }
  });
}

var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // [1, 3, 5]



function getEvenElementsAtProperty(obj, key) {
  var array = obj[key];
  if (!(Array.isArray(array)) || array.length === 0) {
    return [];
  }
  return array.filter(function (elem) {
    if (elem % 2 === 0) {
      return elem;
    }
  });
}

var obj = {
  key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // [1000, 50]



function filterEvenLengthWords(words) {
  return words.filter(function (word) {
    if (word.length % 2 === 0) {
      return word;
    }
  });
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // ['word', 'word']



function getLengthOfLongestElement(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.sort(function (elem1, elem2) {
    return elem2.length - elem1.length;
  }) [0].length;
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // 5

var output = getLengthOfLongestElement(['one', 'two', 'ah']);
console.log(output); // 3



function getSmallestElementAtProperty(obj, key) {
  var array = obj[key];
  if (!(Array.isArray(array)) || array.length === 0) {
    return undefined;
  }
  return array.sort(function (elem1, elem2) {
    return elem1 - elem2;
  }) [0];
}

var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // 1



function getLargestElementAtProperty(obj, key) {
  var array = obj[key];
  if (!(Array.isArray(array)) || array.length === 0) {
    return undefined;
  }
  return array.sort(function (elem1, elem2) {
    return elem2 - elem1;
  }) [0];
}

var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // 4



function getAllButLastElementOfProperty(obj, key) {
  var array = obj[key];
  if (!(Array.isArray(array)) || array.length === 0) {
    return [];
  }
  array.pop();
  return array;
}

var obj = {
  key: [1, 2, 3]
};
var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // [1,2]



function getElementOfArrayProperty(obj, key, index) {
  var array = obj[key];
  if (!(Array.isArray(array)) || array.length === 0) {
    return undefined;
  }
  return array[index];
}

var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // 'Jamil'



function squareElements(arr) {
  arr.forEach(function (num, index, arr) {
    arr[index] = num * num;
  });
  return arr;
}

var output = squareElements([1, 2, 3]);
console.log(output); // [1, 4, 9]



function filterOddElements(arr) {
  return arr.filter(function (num) {
    if (num % 2 !== 0) {
      return num;
    }
  });
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // [1, 3, 5]



function computeProductOfAllElements(arr) {
  if (arr.length === 0) {
    return 0;
  }
  var product = arr.reduce(function (previous, current) {
    return current * previous;
  });
  return product;
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // 60



function filterEvenElements(arr) {
  return arr.filter(function (num) {
    if (num % 2 === 0) {
      return num;
    }
  });
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // [2, 4, 6]



function getLengthOfShortestElement(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.sort(function (elem1, elem2) {
    return elem1.length - elem2.length;
  }) [0].length;
}

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // 3



function getLongestElement(arr) {
  if (arr.length === 0) {
    return '';
  }
  return arr.sort(function (elem1, elem2) {
    return elem2.length - elem1.length;
  }) [0];
}

var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // 'three'



function findSmallestElement(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.sort(function (num1, num2) {
    return num1 - num2;
  }) [0];
}

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // 1



function findShortestElement(arr) {
  if (arr.length === 0) {
    return '';
  }
  return arr.sort(function (elem1, elem2) {
    return elem1.length - elem2.length;
  }) [0];
}

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // 'a'



function getLargestElement(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.sort(function (num1, num2) {
    return num2 - num1;
  }) [0];
}

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // 8;
