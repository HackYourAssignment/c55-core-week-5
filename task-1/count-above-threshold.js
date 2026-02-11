//Your code here
function countAboveThreshold(numbers, threshold) {
  if (numbers.length === 0) {
    // Check if the array is empty
    return 0;
  }

  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > threshold) {
      // Check if the current number is above the threshold
      count++;
    }
  }

  return count;
}

console.log(countAboveThreshold([1, 5, 10, 3], 4));
console.log(countAboveThreshold([7, 8, 9], 10));
console.log(countAboveThreshold([], 5));
console.log(countAboveThreshold([2, 4, 6, 8], 1));
