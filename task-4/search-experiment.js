import generateBigArray from "./bigArray.js";
const arr1k = generateBigArray(1000);
const arr100k = generateBigArray(100000);
const arr10m = generateBigArray(10000000);
const target = 123456789;

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

console.time("Linear Search 1k");
linearSearch(arr1k, target);
console.timeEnd("Linear Search 1k");

console.time("Linear Search 100k");
linearSearch(arr100k, target);
console.timeEnd("Linear Search 100k");

console.time("Linear Search 10M");
linearSearch(arr10m, target);
console.timeEnd("Linear Search 10M");

console.log("---");

console.time("Binary Search 1k");
binarySearch(arr1k, target);
console.timeEnd("Binary Search 1k");

console.time("Binary Search 100k");
binarySearch(arr100k, target);
console.timeEnd("Binary Search 100k");

console.time("Binary Search 10M");
binarySearch(arr10m, target);
console.timeEnd("Binary Search 10M");

// The results shows that binary search is significantly faster than linear search.