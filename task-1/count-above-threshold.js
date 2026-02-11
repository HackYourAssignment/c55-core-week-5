function countAboveThreshold(numbers, threshold) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > threshold) {
      count++;
    }
  }

  return count;
}
module.exports = countAboveThreshold;
