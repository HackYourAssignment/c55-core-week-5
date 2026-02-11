// Write your code here
// Use generateBigArray to create a big array numbers.
// Example: generateBigArray(1000000) will create an array of 1 million numbers.

import { generateBigArray } from "./bigArray";

function binary_search(array, target) {
  let L = 0;
  let R = array.length - 1;

  while (L <= R) {
    const m = L + Math.floor((R - L) / 2);

    if (array[m] < target) {
      L = m + 1;
    } else if (array[m] > target) {
      R = m - 1;
    } else {
      return m;
    }
  }
  return "unsuccessful";
}
