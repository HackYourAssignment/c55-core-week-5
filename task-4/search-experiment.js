// Write your code here
// Use generateBigArray to create a big array numbers.
// Example: generateBigArray(1000000) will create an array of 1 million numbers.

import generateBigArray from './bigArray.js';

const array1k = generateBigArray(1000);
const array100k = generateBigArray(100000);
const array1M = generateBigArray(1000000);
const array10M = generateBigArray(10000000);


/*linear search
function linear_search(array, target) is
    for i = 0 to array.length - 1 do
        if array[i] = target
            return target
    return unsuccessful
    */

function linear_search(array, target) {
    for (let i = 0; i< array.length; i++){
if(array[i] === target) {
return i;
} 
}
return 'unsuccessful';
}


/*Binary Search
function binary_search(array, target) is
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
    return unsuccessful
*/

function binary_search(array, target) {
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
  return 'unsuccessful';
}




console.time('Linear Search 1k'); 
linear_search(array1k, 7824); 
console.timeEnd('Linear Search 1k'); 

console.time('Linear Search 100k'); 
linear_search(array100k, 45734); 
console.timeEnd('Linear Search 100k'); 

console.time('Linear Search 1M'); 
linear_search(array1M, 658373924); 
console.timeEnd('Linear Search 1M'); 

console.time('Linear Search 100M'); 
linear_search(array10M, 745984); 
console.timeEnd('Linear Search 100M'); 

console.log(`--------------------------`);


console.time('Binary Search 1k'); 
binary_search(array1k, 4638); 
console.timeEnd('Binary Search 1k'); 

console.time('Binary Search 100k'); 
binary_search(array100k, 547445); 
console.timeEnd('Binary Search 100k'); 

console.time('Binary Search 1M'); 
binary_search(array1M, 643647548); 
console.timeEnd('Binary Search 1M'); 

console.time('Binary Search 10M'); 
binary_search(array10M, 6687998); 
console.timeEnd('Binary Search 10M'); 

