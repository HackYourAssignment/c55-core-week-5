function countAboveThreshold(numbers, threshold) {
  // Your code here
  let count =0;
  for (let number of numbers){
    if (number > threshold){
        count+=1;
  }}
  return count;
}

console.log(countAboveThreshold([1,5,10,3],4))// returns 2
console.log(countAboveThreshold([7,8,9],10))// returns 0
console.log(countAboveThreshold([],5))// returns 0
