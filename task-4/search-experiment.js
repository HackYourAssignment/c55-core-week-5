import generateBigArray from "./bigArray.js";

const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return target;
    }
  }
  return null;
};

const binarySearch = (array, target) => {
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
  return null;
};

//linearSearch
console.time("Linear Search 1k");
linearSearch(generateBigArray(1000), 876);
console.timeEnd("Linear Search 1k");

console.time("Linear Search 100k");
linearSearch(generateBigArray(100000), 98345);
console.timeEnd("Linear Search 100k");

console.time("Linear Search 1M");
linearSearch(generateBigArray(1000000), 998345);
console.timeEnd("Linear Search 1M");

console.time("Linear Search 10M");
linearSearch(generateBigArray(10000000), 8000657);
console.timeEnd("Linear Search 10M");

console.log("---");

//binarySearch
console.time("Binary Search 1k");
binarySearch(generateBigArray(1000), 876);
console.timeEnd("Binary Search 1k");

console.time("Binary Search 100k");
binarySearch(generateBigArray(100000), 98345);
console.timeEnd("Binary Search 100k");

console.time("Binary Search 1M");
binarySearch(generateBigArray(1000000), 998345);
console.timeEnd("Binary Search 1M");

console.time("Binary Search 10M");
binarySearch(generateBigArray(10000000), 8000657);
console.timeEnd("Binary Search 10M");

