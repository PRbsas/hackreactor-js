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

