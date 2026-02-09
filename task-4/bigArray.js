// you can use this function to generate a big array of the specified size
// It contains numbers from 0 to size - 1
// Example: generateBigArray(5) will return [0, 1, 2, 3, 4]
function generateBigArray(size) {
  const array = new Array(size);
  for (let i = 0; i < size; i++) {
    array[i] = i;
  }
  return array;
}

export default generateBigArray;

// import { binarySearch } from "./search-experiment.js";
// import { linearSearch } from "./linear_search_algorithm.js";

// const array_1 = new Array(100).fill(0);
// array_1[73] = 73;

// const array_2 = new Array(1000).fill(0);
// array_2[679] = 679;

// const array_3 = new Array(10000).fill(0);
// array_3[9345] = 9345;

// //first
// console.time("binary_1");
// binarySearch([array_1], 73);
// console.timeEnd("binary_1");

// console.time(linearSearch([array_1], 73));

// console.time(binarySearch([array_2], 679));
// console.time(linearSearch([array_2], 679));

// console.time(binarySearch([array_3], 9345));
// console.time(linearSearch([array_3], 9345));
