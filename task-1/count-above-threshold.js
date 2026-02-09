function countAboveThreshold(numbers, threshold) {
  let totalAboveNumbers = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > threshold) {
      totalAboveNumbers++;
    }
  }

  return totalAboveNumbers;
}

// option 2
// function countAboveThreshold(numbers, threshold) {
//   return numbers.filter((number) => number > threshold).length;
// }

// option 3
// function countAboveThreshold(numbers, threshold) {
//   return numbers.reduce((sum, number) => sum + (number > threshold), 0);
// }
