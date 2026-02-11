function countAboveThreshold(numbers, threshold) {
  // Return the count of numbers greater than the threshold
  // If the array is empty, return `0`
  //Assume the input is valid
    let count = 0;

    for (const num of numbers) {
        if (num > threshold) {
            count++;
        }
    }

    return count;
}

/*
example usage:
countAboveThreshold([1,5,10,3],4)// returns 2
countAboveThreshold([7,8,9],10)// returns 0
countAboveThreshold([],5)// returns 0
*/

console.log(countAboveThreshold([1,5,10,3],4)); 
console.log(countAboveThreshold([7,8,9],10)); 
console.log(countAboveThreshold([],5)); 

