// Write your code here
// Use generateBigArray to create a big array numbers.
// Example: generateBigArray(1000000) will create an array of 1 million numbers.


import generateBigArray from "./bigArray.js";

const targetValue = 123456789; // Number we're searching for (doesn't exist)

// Linear search - checks every item one by one
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

// Binary search - cuts array in half each time
function binarySearch(array, target) {
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
  return -1;
}

// Helper function - measures how long a search takes
function measureSearchTime(searchName, arraySize, searchFunctionName) {
  // Step 1: Create array
  const numbersArray = generateBigArray(arraySize);
  
  // Step 2: Start the timer
  const startTime = performance.now();
  
  // Step 3: Run the search
  if (searchFunctionName === "linear") {
    linearSearch(numbersArray, targetValue);
  } else {
    binarySearch(numbersArray, targetValue);
  }
  
  // Step 4: Stop the timer
  const endTime = performance.now();
  
  // Step 5: Calculate and show time (rounded)
  const timeInMs = Math.round(endTime - startTime);
  console.log(`${searchName}: ${timeInMs}ms`);
}

// === TEST LINEAR SEARCH ===
console.log("Linear Search (checks every item one by one)");
measureSearchTime("Linear Search 1k", 1000, "linear");
measureSearchTime("Linear Search 100k", 100000, "linear");
measureSearchTime("Linear Search 1M", 1000000, "linear");
measureSearchTime("Linear Search 10M", 10000000, "linear");
console.log("---");

// === TEST BINARY SEARCH ===
console.log("Binary Search (cuts array in half each time)");
measureSearchTime("Binary Search 1k", 1000, "binary");
measureSearchTime("Binary Search 100k", 100000, "binary");
measureSearchTime("Binary Search 1M", 1000000, "binary");
measureSearchTime("Binary Search 10M", 10000000, "binary");
