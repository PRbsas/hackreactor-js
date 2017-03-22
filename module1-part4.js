function countCharacter(str, char) {
  if (!char || 0 === char.length) {
    return 0;
  } else {
    return (str.split(char)).length - 1;
  }
}

var output = countCharacter('I am a hacker', 'a');
console.log(output); //  3



function getAllLetters(str) {
  return str.split('');
}

var output = getAllLetters('Radagast');
console.log(output); // ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']



function getAllWords(str) {
  if (!str || 0 === str.length) {
    return [];
  } else {
    return str.split(' ');
  }
}

var output = getAllWords('Radagast the Brown');
console.log(output); // ['Radagast', 'the', 'Brown']

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
console.log(output); // {ask: 1, a: 2, bunch: 2, get: 1}



function removeFromBack(arr) {
  arr.pop();
  return arr;
}

var output = removeFromBack([1, 2, 3]);
console.log(output); // [1, 2]



function or(expression1, expression2) {
  if (expression1 === true && expression2 !==true) {
    return expression1;
  } else if (expression1 !== true && expression2 ===true) {
    return expression2;
  } else if (expression1 === true && expression2 ===true) {
    return true;
  } else {
    return false;
  }
}

var output = or(true, false);
console.log(output); // true



function isEitherEvenOrAreBoth7(num1, num2) {
  if (num1 % 2 === 0 || num2 % 2 === 0) {
    return true;
  } else if (num1 === 7 && num2 === 7) {
    return true;
  } else {
    return false;
  }
}

var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // false

var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // true



function isEitherEvenAndLessThan9(num1, num2) {
  if (num1 % 2 === 0 || num2 % 2 === 0) {
    if (num1 < 9 && num2 < 9) {
      return true;
    } else {
      return false;
    }
  } else if (num1 % 2 === 0 || num2 % 2 === 0) {
      return true;
    } else  {
      return false;
  }
}

var output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // true

var output = isEitherEvenAndLessThan9(72, 2);
console.log(output); // false



function extend(obj1, obj2) {
  Object.keys(obj2).forEach(function(key) {
    if ( !obj1.hasOwnProperty(key)) {
      obj1[key] = obj2[key];
    }
  });
}

var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};
extend(obj1, obj2);
console.log(obj1); // {a: 1, b: 2, c: 3}
console.log(obj2); // {b: 4, c: 3}



function removeNumbersLargerThan(num, obj) {
  for (var key of Object.keys(obj)) {
    val = obj[key];
    if (val > num) {
      delete obj[key] === val;
    }
  }
}

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}

removeNumbersLargerThan(5, obj);
console.log(obj); // { b: 2, c: 'montana' }



function removeNumbersLessThan(num, obj) {
  for (var key of Object.keys(obj)) {
    val = obj[key];
    if (val < num) {
      delete obj[key] === val;
    }
  }
}

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLessThan(5, obj);
console.log(obj); // { a: 8, c: 'montana' }



function removeStringValuesLongerThan(num, obj) {
  for (var key of Object.keys(obj)) {
    val = obj[key];
    if (val.length > num) {
      delete obj[key] === val;
    }
  }
}

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }



function removeEvenValues(obj) {
  for (var key of Object.keys(obj)) {
    val = obj[key];
    if (val % 2 === 0) {
      delete obj[key] === val;
    }
  }
}

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // { b: 3 }



function countNumberOfKeys(obj) {
  return (Object.keys(obj)).length;
}

var obj = {
  a: 1,
  b: 2,
  c: 3
};
var output = countNumberOfKeys(obj);
console.log(output); // 3



function removeOddValues(obj) {
  for (var key of Object.keys(obj)) {
    val = obj[key];
    if (val % 2 !== 0) {
      delete obj[key] === val;
    }
  }
}

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // { a: 2, c: 4 }



function removeArrayValues(obj) {
  for (var key of Object.keys(obj)) {
    val = obj[key];
    if (Array.isArray(val)) {
      delete obj[key] === val;
    }
  }
}

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // { b: 2 }

function removeNumberValues(obj) {
  for (var key of Object.keys(obj)) {
    val = obj[key];
    if (!(isNaN(val))) {
      delete obj[key] === val;
    }
  }
}

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // { b: 'remaining' }



function removeStringValues(obj) {
  for (var key of Object.keys(obj)) {
    val = obj[key];
    if (typeof val === 'string') {
      delete obj[key] === val;
    }
  }
}

var obj = {
  name: 'Sam',
  age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }



function convertDoubleSpaceToSingle(str) {
  var words = str.split('  ');
  var newStr = words.join(' ');
  return newStr;
}

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // "string with double spaces"



function joinThreeArrays(arr1, arr2, arr3) {
  return arr1.concat(arr2).concat(arr3);
}

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // [ 1, 2, 3, 4, 5, 6 ]
