// Array to Object [Part 1]
function transformFirstAndLast(array) {
  var obj = {};
  var last = array.length -1;
  var key = array[0];
  var val = array[last];
  obj[key] = val;
  return obj;
}

transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']); // { Queen: 'Beyonce' }



// Object to Array [Part 1]
function getAllKeys(obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }
  return keys;
}

getAllKeys({
  name : 'Sam',
  age : 25,
  hasPets : true
}); // [ 'name', 'age', 'hasPets' ]



// Array to Object [Part 2]
function fromListToObject(array) {
  var obj = {};
  array.forEach(function(a) {
      obj[a[0]] = a[1];
  });
  return obj;
}

fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]); // { make: 'Ford', model: 'Mustang', year: 1964 }



// Object to Array [Part 2]
function listAllValues(obj) {
  var values = [];
  for(var val in obj) {
    val = obj[val];
    values.push(val);
  }
  return values;
}

 listAllValues({
  name : 'Krysten',
  age : 33,
  hasPets : false
}); // [ 'Krysten', 33, false ]



// Array to Object [Part 3]
function transformEmployeeData(array) {
  return array.map(function(items) {
    var obj = {};
    items.map(function(a, index, items) {
      obj[a[0]] = a[1];
    });
    return obj;
  });
}
transformEmployeeData([
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]); // [ { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' } ]



// Object to Array [Part 3]
function convertObjectToList(obj) {
  var arr = [];
  for (var key in obj) {
    arr.push([key, obj[key]]);
  }
  return arr;
}

convertObjectToList({
  name: 'Holly',
  age: 35,
  role: 'producer'
}); // [ [ 'name', 'Holly' ], [ 'age', 35 ], [ 'role', 'producer' ] ]



// Greeting
var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';

  var person = customerData[firstName];
  var visits = [];
  for (var v in person) {
    v = person[v];
    visits.push(v);
  }
  if (person === undefined) {
    greeting = 'Welcome! Is this your first time?';
  }
	if (visits == 1) {
	  greeting = 'Welcome back, ' + firstName + '! We\'re glad you liked us the first time!';
	} else if (visits > 1) {
	  greeting = 'Welcome back, ' + firstName + '! So glad to see you again!';
	}
  return greeting;
}

var output = greetCustomer('Terrance');
console.log(output); // 'Welcome! Is this your first time?'

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
