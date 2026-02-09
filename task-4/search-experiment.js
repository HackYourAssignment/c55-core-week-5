import generateBigArray from "./bigArray.js";
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) return middle;
    if (arr[middle] < target) left = middle + 1;
    else right = middle - 1;
  }
  return -1;
}
function sizeFormat(size) {
  if (size === 1000) return "1k";
  if (size === 100000) return "100k";
  if (size === 1000000) return "1M";
  if (size === 10000000) return "10M";
  return String(size);
}
const target = 123456789;
const sizes = [1000, 100000, 1000000, 10000000];
const arrays = sizes.map((s) => generateBigArray(s));
// Linear Search 
for (let i = 0; i < sizes.length; i++) {
  const format = `Linear Search ${sizeFormat(sizes[i])}`;
  console.time(format);
  linearSearch(arrays[i], target);
  console.timeEnd(format);
}
console.log("---");
// Binary Search
for (let i = 0; i < sizes.length; i++) {
  const format = `Binary Search ${sizeFormat(sizes[i])}`;
  console.time(format);
  binarySearch(arrays[i], target);
  console.timeEnd(format);
}
