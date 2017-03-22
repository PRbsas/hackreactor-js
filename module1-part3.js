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

function computePerimeterOfACircle(radius) {
  return 2 * Math.PI * radius;
}

var output = computePerimeterOfACircle(4);
console.log(output); //returns 25.132741228718345

function computeAreaOfACircle(radius) {
  return ((radius * radius) * Math.PI);
}

var output = computeAreaOfACircle(4);
console.log(output); //returns 50.26548245743669



function computePower(num, exponent) {
  return Math.pow(num, exponent);
}

var output = computePower(2, 3);
console.log(output); //returns 8



function computeSquareRoot(num) {
  return Math.sqrt(num);
}

var output = computeSquareRoot(9);
console.log(output); //returns 3



function doubleSquareRootOf(num) {
  return (Math.sqrt(num)) * 2;
}

var output = doubleSquareRootOf(121);
console.log(output); //returns 22



function getLengthOfThreeWords(word1, word2, word3) {
  return word1.length + word2.length + word3.length;
}

var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); //returns 14



function joinArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

var output = joinArrays([1, 2], [3, 4]);
console.log(output); //returns [1, 2, 3, 4]



function getElementsAfter(array, n) {
  return array.slice(n + 1);
}

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); //returns ['d', 'e']



function getElementsUpTo(array, n) {
  return array.slice(0, n);
}

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)
console.log(output); //returns ['a', 'b', 'c']



function getAllElementsButFirst(array) {
  return array.slice(1, array.length);
}

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); //returns [2, 3, 4]



function getAllElementsButLast(array) {
  return array.slice(0, array.length - 1);
}

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); //returns [1, 2 , 3]



function removeFromFront(arr) {
  return arr.slice(1, arr.length);
}

var output = removeFromFront([1, 2, 3]);
console.log(output); //returns [2, 3]



function removeFromBackOfNew(arr) {
  return Array.from(arr.slice(0, arr.length - 1));
}

var arr = [1, 2, 3];
var output = removeFromBackOfNew(arr);
console.log(output); //returns [1, 2]
console.log(arr); //returns [1, 2, 3]



function removeFromFrontOfNew(arr) {
  return Array.from(arr.slice(1, arr.length));
}

var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); //returns [2, 3]
console.log(arr); //returns [1, 2, 3]
