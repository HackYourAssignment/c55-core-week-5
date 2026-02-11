// Write your code here
// Use generateBigArray to create a big array numbers.
// Example: generateBigArray(1000000) will create an array of 1 million numbers.
/*function binary_search(array, target) is
    left := 0
    right := array.length - 1
    while left ≤ right do
        middle := left + floor((right - left) / 2)
        if array[middle] < target then
            left := middle + 1
        else if array[middle] > target then
            right := middle − 1
        else:
            return middle
    return unsuccessful*/
  /*function linear_search(array, target) is
    for i = 0 to array.length - 1 do
        if array[i] = target
            return i
    return unsuccessful*/
import generateBigArray from "./bigArray.js";

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
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

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

const sizes = [1000, 100000, 10000000];
const fakeTarget = 123456789;

sizes.forEach(size => {
    const bigArray = generateBigArray(size);
    
    console.log("Testing array size: " + size);

    console.time("Linear Search Time");
    linearSearch(bigArray, fakeTarget);
    console.timeEnd("Linear Search Time");

    console.time("Binary Search Time");
    binarySearch(bigArray, fakeTarget);
    console.timeEnd("Binary Search Time");
    
    console.log("-----------------------");
});