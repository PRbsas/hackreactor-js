function isOldEnoughToDrink(age) {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}

var output = isOldEnoughToDrink(22);
console.log(output); //returns true



function isOldEnoughToDrive(age) {
  if (age >= 16) {
    return true;
  } else {
    return false;
  }
}

var output = isOldEnoughToDrive(22);
console.log(output); //returns true



function isOldEnoughToVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

var output = isOldEnoughToVote(22);
console.log(output); //returns true



function isOldEnoughToDrinkAndDrive(age) {
  return false;
} //returns false



function getProperty(obj, key) {
  var value = obj[key];
  return value;
}

var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); //returns value



function addProperty(obj, key) {
  obj[key] = true;
}

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); //sets new property on the given object with a value of true

function removeProperty(obj, key) {
  delete obj[key];
}

var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); //removes the given key from the given object



function checkAge(name, age) {
  if (age >= 21) {
    return 'Welcome, ' + name + '!';
  } else if (age < 21) {
    return 'Go home, ' + name + '!';
  }
}

var output = checkAge('Adrian', 35);
console.log(output); //returns Welcome, Adrian!



function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var output = getFullName('Joe', 'Smith');
console.log(output); //returns Joe Smith



function getLengthOfWord(word) {
  return word.length;
}
var output = getLengthOfWord('some');
console.log(output); //returns 4



function getLengthOfTwoWords(word1, word2) {
  return (word1 + word2).length;
}

var output = getLengthOfTwoWords('some', 'words');
console.log(output); //returns 9



function isGreaterThanTen(num) {
  if (num > 10) {
    return true;
  } else if (num <= 10) {
    return false;
  }
}

var output = isGreaterThanTen(11);
console.log(output); //returns true



function isLessThan30(num) {
  if (num < 30) {
    return true;
  } else {
    return false;
  }
}

var output = isLessThan30(9);
console.log(output); //returns true
