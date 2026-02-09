export function calculateAverage(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  if (numbers.length === 0) {
    return null;
  }
  let sum = 0;
  for (const num of numbers) {
    if (typeof num !== "number") {
      return null;
    }
    sum += num;
  }
  return sum / numbers.length;
}
