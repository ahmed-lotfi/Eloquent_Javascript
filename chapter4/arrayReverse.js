function reverseArray(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

function reverseArray2(arr) {
  let reversedArray = arr.reduce((acc, item) => [item, ...acc], []);
  return reversedArray;
}

function reverseArrayInPlace(arr) {
  return arr.reverse();
}

console.log(reverseArray([10, 9, 8, 7, 6]));
console.log(reverseArray2([10, 9, 8, 7, 6]));
console.log(reverseArrayInPlace([10, 9, 8, 7, 6]));
