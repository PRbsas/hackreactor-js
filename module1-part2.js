function areBothOdd(num1, num2) {
  if (num1 % 2 !== 0 && num2 % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

var output = areBothOdd(1, 3);
console.log(output); //returns true



function isEitherEven(num1, num2) {
  if (num1 % 2 === 0 || num2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var output = isEitherEven(1, 4);
console.log(output); //returns true



function isOddLength(word) {
  if (word.length % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

var output = isOddLength('special');
console.log(output); //returns true



function isEvenLength(word) {
  if (word.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var output = isEvenLength('wow');
console.log(output); //returns false



function isEvenAndGreaterThanTen(num) {
  if (num % 2 === 0 && num > 10) {
    return true;
  } else {
    return false;
  }
}

var output = isEvenAndGreaterThanTen(13);
console.log(output); //returns false



function average(num1, num2) {
  return (num1 + num2) / 2;
}

var output = average(4, 6);
console.log(output); //returns 5



function computeAreaOfATriangle(base, height) {
  return (base * height) / 2;
}

var output = computeAreaOfATriangle(4, 6);
console.log(output); //returns 12



function cube(num) {
  return num * num * num;
}

var output = cube(3);
console.log(output); //returns 27



function square(num) {
  return num * num;
}

var output = square(5);
console.log(output); //returns 25



function computeAverageLengthOfWords(word1, word2) {
  return (word1.length + word2.length) / 2;
}

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); //returns 6



function addFullNameProperty(obj) {
  obj.fullName = obj.firstName + ' ' + obj.lastName;
}

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); //returns Jade Smith



function addObjectProperty(obj1, key, obj2) {
  obj1[key] = obj2;
}

var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); //returns { name: 'Mr. Burns', role: 'supervisor' }



function isPersonOldEnoughToDrinkAndDrive(person) {
  return false;
}

var obj = {
  age: 45
};
var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); //returns false



function isPersonOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrive(obj);
console.log(output); //returns true



function isPersonOldEnoughToVote(person) {
  if (person.age >= 18) {
    return true;
  } else {
    return false;
  }
}

var obj = {
  age: 19
};
var output = isPersonOldEnoughToVote(obj);
console.log(output); //returns true



function isPersonOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrink(obj);
console.log(output); //returns false



function addArrayProperty(obj, key, arr) {
  return obj[key] = arr;
}

var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); //retutns [1, 3]



function getNthElement(array, n) {
  return array[n];
}

var output = getNthElement([1, 3, 5], 1);
console.log(output); //returns 3



function getFirstElement(array) {
  return array[0];
}

var output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); //retuns 1



function getLastElement(array) {
  return array[array.length - 1];
}

var output = getLastElement([1, 2, 3, 4]);
console.log(output); //returns 4
