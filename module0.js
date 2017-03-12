// Array to Object [Part 1]

function transformFirstAndLast(array) {
  var obj = {};
  var last = array.length -1;
  var key = array[0];
  var val = array[last];
  obj[key] = val;
  return obj;
}

transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']);

