import generateBigArray from "./bigArray.js";

const bigFirstArray = generateBigArray(1000);
const bigSecondArray = generateBigArray(100000);
const bigThirdArray = generateBigArray(10000000);
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    if (array[middle] < target) {
      left = middle + 1;
    } else if (array[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return "unsuccessful";
}

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return "unsuccessful";
}
const target = 999999999;

// --- Linear Search Timings ---
console.time("Linear Search 1k");
linearSearch(bigFirstArray, target);
console.timeEnd("Linear Search 1k");

console.time("Linear Search 100k");
linearSearch(bigSecondArray, target);
console.timeEnd("Linear Search 100k");

console.time("Linear Search 10M");
linearSearch(bigThirdArray, target);
console.timeEnd("Linear Search 10M");

console.log("---");
// --- Binary Search Timings ---
console.time("Binary Search 1k");
binarySearch(bigFirstArray, target);
console.timeEnd("Binary Search 1k");

console.time("Binary Search 100k");
binarySearch(bigSecondArray, target);
console.timeEnd("Binary Search 100k");

console.time("Binary Search 10M");
binarySearch(bigThirdArray, target);
console.timeEnd("Binary Search 10M");
