function computeSumOfAllElements(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce(function (previous, current) {
    return current += previous;
  });
}

var output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // 6



function calculateBillTotal(preTaxAndTipAmount) {
  var tax = preTaxAndTipAmount * 0.095;
  var tip = preTaxAndTipAmount * 0.15;
  var total = preTaxAndTipAmount + tax + tip;
  return total;
}

var output = calculateBillTotal(20);
console.log(output); // 24.9



function getStringLength(string) {
  var len = 0;
  string.split('').forEach(function () {
    return len++;
  });
  return len;
}

var output = getStringLength('hello');
console.log(output); // 5



function joinArrayOfArrays(arr) {
  return [].concat.apply([], arr);
}

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // [1, 4, true, false, 'x', 'y']



function getProductOfAllElementsAtProperty(obj, key) {
  var array = obj[key];
  if (!(Array.isArray(array)) || array.length === 0) {
    return 0;
  }
  var product = array.reduce(function (previous, current) {
    return current * previous;
  });
  return product;
}

var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // 24



function sumDigits(num) {
  var str = num.toString();
  var arr = str.split('');
  var sum = 0;
  arr.map(function (a, index) {
    if (isNaN(a[0])) {
      arr.pop();
      return arr;
    } else {
      sum += parseInt(a,10);
    }
  });
  return sum;
}

var output = sumDigits(1148);
console.log(output); // 14

var output = sumDigits(-316);
console.log(output); // 4



function getSumOfAllElementsAtProperty(obj, key) {
  var array = obj[key];
  if (!(Array.isArray(array)) || array.length === 0) {
    return 0;
  }
  var sum = array.reduce(function (previous, current) {
    return current += previous;
  });
  return sum;
}

var obj = {
  key: [4, 1, 8]
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // 13



function findShortestWordAmongMixedElements(arr) {
  if (arr.length === 0) {
    return '';
  }
  var filtered = arr.filter(function (a) {
    return isNaN(a);
  });
  if (filtered.length === 0) {
    return '';
  }
  var shortest = filtered.sort(function (a, b) {
    return a.length - b.length;
  })[0];
  return shortest;
}

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // 'two'



function findSmallestNumberAmongMixedElements(arr) {
  if (arr.length === 0) {
    return 0;
  }
  var filtered = arr.filter(function (a) {
    return !isNaN(a);
  });
  if (filtered.length === 0) {
    return 0;
  }
  var shortest = filtered.sort(function (a, b) {
    return a - b;
  })[0];
  return shortest;
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // 4



function getLongestWordOfMixedElements(arr) {
  if (arr.length === 0) {
    return '';
  }
  var filtered = arr.filter(function (a) {
    return isNaN(a);
  });
  if (filtered.length === 0) {
    return '';
  }
  var shortest = filtered.sort(function (a, b) {
    return b.length - a.length;
  })[0];
  return shortest;
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // 'word'



function getLargestNumberAmongMixedElements(arr) {
  if (arr.length === 0) {
    return 0;
  }
  var filtered = arr.filter(function (a) {
    return !isNaN(a);
  });
  if (filtered.length === 0) {
    return 0;
  }
  var shortest = filtered.sort(function (a, b) {
    return b - a;
  })[0];
  return shortest;
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // 5



// Arithmetic Progression
function computeSummationToN(n) {
  return n * (n + 1) / 2;
}

var output = computeSummationToN(6);
console.log(output); // 21



function convertScoreToGrade(score) {
  if (score > 100 || score < 0) {
    return 'INVALID SCORE';
  } else if (score >= 90) {
    return 'A';
  } else if (score >= 80 && score <= 89) {
    return 'B';
  } else if (score >= 70 && score <= 79) {
    return 'C';
  } else if (score >= 60 && score <= 69) {
    return 'D';
  } else if (score >= 0 && score <= 59) {
    return 'F';
  }
}

var output = convertScoreToGrade(91);
console.log(output); // 'A'



function convertScoreToGradeWithPlusAndMinus(score) {
    if (score > 100 || score < 0) {
    return 'INVALID SCORE';
  } else if (score >= 90) {
    if (score <= 92) {
      return 'A-';
    } else if (score >= 98) {
      return 'A+';
    } else {
      return 'A';
    }
  } else if (score >= 80 && score <= 89) {
    if (score <= 82) {
      return 'B-';
    } else if (score >= 88) {
      return 'B+';
    } else {
    return 'B';
    }
  } else if (score >= 70 && score <= 79) {
    if (score <= 72) {
      return 'C-';
    } else if (score >= 78) {
      return 'C+';
    } else {
    return 'C';
    }
  } else if (score >= 60 && score <= 69) {
    if (score <= 62) {
      return 'D-';
    } else if (score >= 68) {
      return 'D+';
    } else {
    return 'D';
    }
  } else if (score >= 0 && score <= 59) {
    return 'F';
  }
}

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'



// Factorialize a Number With Recursion
function computeFactorialOfN(n) {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  } else {
    return (n * computeFactorialOfN(n - 1));
  }
}

var output = computeFactorialOfN(3);
console.log(output); // 6

var output = computeFactorialOfN(4);
console.log(output); // 24



function repeatString(string, num) {
  return string.repeat(num);
}

var output = repeatString('code', 3);
console.log(output); // 'codecodecode'



function getLongestOfThreeWords(word1, word2, word3) {
  if (word1.length >= word2.length && word1.length >= word3.length) {
    return word1;
  } else if (word2.length >= word1.length && word2.length >= word3.length) {
    return word2;
  } else {
    return word3;
  }
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // 'these'



function findShortestOfThreeWords(word1, word2, word3) {
  if (word1.length <= word2.length && word1.length <= word3.length) {
    return word1;
  } else if (word2.length <= word1.length && word2.length <= word3.length) {
    return word2;
  } else {
    return word3;
  }
}

var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // 'a'



function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  var p = principal;
  var r = interestRate;
  var n = compoundingFrequency;
  var t = timeInYears;

  var nt = n * t;
  var x = 1 + (r/n);
  var result = p * Math.pow(x, nt) - p;
  return result;

}

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // 438.8368221341061
