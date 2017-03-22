function addToFront(arr, element) {
  arr.unshift(element);
  return arr;
}

var output = addToFront([1, 2], 3);
console.log(output); //returns [3, 1, 2]



function addToBack(arr, element) {
  arr.push(element);
  return arr;
}

var output = addToBack([1, 2], 3);
console.log(output); //returns [1, 2, 3]



function computeAreaOfARectangle(length, width) {
  return length * width;
}

var output = computeAreaOfARectangle(4, 8);
console.log(output); //returns 32



function computePerimeterOfARectangle(length, width) {
  return length * 2 + width * 2;
}

var output = computePerimeterOfARectangle(5, 2);
console.log(output); //returns 14



function computePerimeterOfATriangle(side1, side2, side3) {
  return side1 + side2 + side3;
}

var output = computePerimeterOfATriangle(6, 4, 10);
console.log(output); //returns 20



function computeTripledAreaOfARectangle(length, width) {
  return (length * width) * 3;
}

var output = computeTripledAreaOfARectangle(2, 4);
console.log(output); //returns 24
