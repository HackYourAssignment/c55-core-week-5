// Write your code here
// Use generateBigArray to create a big array numbers.
// Example: generateBigArray(1000000) will create an array of 1 million numbers.

import generateBigArray from "./bigArray.js";

//binary search

function binary_search(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);

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

// linear search
function linear_search(array, target) {
  for (let i = 0; i <= array.length - 1; i = i + 1) {
    if (array[i] === target) {
      return i;
    }
  }
  return "unsuccessful";
}

const sizes = [1000, 100000, 10000000];
const target = 123456789;

console.log("Starting search performance experiment...");
console.log(
  "Looking for:",
  target,
  "(not in the array → should be unsuccessful)",
);
console.log("----------------------------------------");

sizes.forEach((size) => {
  console.log(`\n=== Testing array of ${size.toLocaleString()} numbers ===`);

  console.log("Creating array...");
  const bigArray = generateBigArray(size);
  console.log("Array ready!");

  // Linear
  console.time("Linear Search");
  const linearResult = linear_search(bigArray, target);
  console.timeEnd("Linear Search");
  console.log(
    "→ Linear result:",
    linearResult === "unsuccessful" ? "unsuccessful (correct)" : linearResult,
  );

  // Binary
  console.time("Binary Search");
  const binaryResult = binary_search(bigArray, target);
  console.timeEnd("Binary Search");
  console.log(
    "→ Binary result:",
    binaryResult === "unsuccessful" ? "unsuccessful (correct)" : binaryResult,
  );

  console.log("----------------------------------------");
});

console.log("\nExperiment finished! 🎉");
