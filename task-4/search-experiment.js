// Write your code here
// Use generateBigArray to create a big array numbers.
// Example: generateBigArray(1000000) will create an array of 1 million numbers.

import generateBigArray from "./bigArray.js"

function linearSearch(array , target){
    for(let i=0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}

function binarySearch(array ,target){
    let left=0;
    let right = array.length -1;

    while (left<= right){
        const middle = left + Math.floor((right - left)/ 2);

        if (array[middle]<target){
            left = middle + 1;
        } else if(array[middle]> target){
            right =middle -1;
        } else{
            return middle;
        }
    }
    return -1;
}

const target = 123456789;
 
const array1 =generateBigArray(1000);
const array2 =generateBigArray(100000);
const array3 =generateBigArray(10000000);

console.time("linear search 1k");
linearSearch(array1, target);
console.timeEnd("linear search 1k");

console.time("linear search 100k");
linearSearch(array2, target);
console.timeEnd("linear search 100k");

console.time("linear search 10m");
linearSearch(array3, target);
console.timeEnd("linear search 10m");

console.time("binary search 1k");
linearSearch(array1, target);
console.timeEnd("binary search 1k");

console.time("binary search 100k");
linearSearch(array2, target);
console.timeEnd("binary search 100k");

console.time("binary search 10m");
linearSearch(array3, target);
console.timeEnd("binary search 10m");


