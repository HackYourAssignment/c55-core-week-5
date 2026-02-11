
function countAboveThreshold(numbers, threshold) {
  
    let count = 0 ;

    for(let i = 0; i < numbers.length; i = i + 1){

        if(numbers[i] > threshold){

            count = count + 1;
        }
    }

    return count;
}