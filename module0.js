// Array to Object [Part 1]
function transformFirstAndLast(array) {
  var obj = {};
  var last = array.length -1;
  var key = array[0];
  var val = array[last];
  obj[key] = val;
  return obj;
}

transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']); // returns { Queen: 'Beyonce' }



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
}); //returns [ 'name', 'age', 'hasPets' ]



// Array to Object [Part 2]
function fromListToObject(array) {
  var obj = {};
  array.forEach(function(a) {
      obj[a[0]] = a[1];
  });
  return obj;
}

fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]); // returns { make: 'Ford', model: 'Mustang', year: 1964 }



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
}); // returns [ 'Krysten', 33, false ]
