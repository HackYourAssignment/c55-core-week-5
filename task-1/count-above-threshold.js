const countNumbersInArray = (numbers, threshold) => {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > threshold) {
      count++;
    }
  }

  return count;
};


console.log(`There is ${countNumbersInArray([90,45,76,3,5,8,2,77,3,65,43,4,45,90], 40)} numbers above the threshold.`);
console.log(`There is ${countNumbersInArray([1,2,3,4,5,6,7,8,9], 5)} numbers above the threshold.`);
console.log(`There is ${countNumbersInArray([4,5,6,6,6,3,80,32], 90)} numbers above the threshold.`);
console.log(`There is ${countNumbersInArray([100,200,300,400,500], 250)} numbers above the threshold.`);
