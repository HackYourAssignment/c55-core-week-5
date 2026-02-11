//Your code here
function countAboveThreshold(numbers, threshold) {
  let count = 0;
  let aboveThresholdNumbers = [];

  for (let num of numbers) {
    if (num > threshold) {
      count++;
      aboveThresholdNumbers.push(num);
    }
  }
  aboveThresholdNumbers.sort((a, b) => a - b);
  return { count, numbers: aboveThresholdNumbers };
}

const numbers = [1, 5, 8, 10, 3, 2, 6, 7, 4];
const threshold = 4;
console.log(countAboveThreshold(numbers, threshold));
