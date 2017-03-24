function modulo(num1, num2) {
  if(isNaN(num1) || isNaN(num2) || num2 === 0) {
    return NaN;
  }
  if (num1 === -1) {
    return -1;
  }
  if (num1 < 0) {
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    return -modulo(num1 - num2, num2);
  }
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  if (num1 === 0) {
    return 0;
  } else if (num2 > num1) {
    return num1;
  } else {
    return modulo(num1 - num2, num2);
  }
}

var output = modulo(25, 4);
console.log(output); // 1



function multiply(num1, num2) {
  if(num1 === 0 || num2 === 0) {
    return 0;
  }
  if (num1 < 0 || num2 < 0) {
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    return -(num1 + multiply(num1, num2 - 1));
  }
  return num1 + multiply(num1, num2 - 1);
}
var output = multiply(4, 7);
console.log(output); // 28



function isOddWithoutModulo(num) {
  if (num === 1) {
    return true;
  } else if (num < 0) {
    num = Math.abs(num);
  } else if (num < 1 || num === 0) {
    return false;
  }
  return isOddWithoutModulo(num - 2);
}

var output = isOddWithoutModulo(17);
console.log(output); // true



function isEvenWithoutModulo(num) {
  if (num === 2 || num === 0) {
    return true;
  } else if (num < 0) {
    num = Math.abs(num);
  } else if (num < 2) {
    return false;
  }
  return isEvenWithoutModulo(num - 2);
}

var output = isEvenWithoutModulo(8);
console.log(output); // true



function multiplyBetween(num1, num2) {
  if (num2 < num1 || num1 === num2) {
    return 0;
  }
  var between = [];
  for (var i = num1; i < num2; i++) {
    between.push(i);
  }
  var product = between.reduce(function (a, b) {
    return a * b;
  });
  return product;
}

var output = multiplyBetween(2, 5);
console.log(output); // 24



function computeSumBetween(num1, num2) {
  if (num2 < num1 || num1 === num2) {
    return 0;
  }
  var between = [];
  for (var i = num1; i <= num2 - 1 ; i++) {
    between.push(i);
  }
  var sum = between.reduce(function (a, b) {
    return a + b;
  });
  return sum;
}

var output = computeSumBetween(2, 5);
console.log(output); // 9
