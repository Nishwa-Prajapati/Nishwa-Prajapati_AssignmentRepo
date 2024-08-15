//Write a function `sumArray` that takes an array of numbers as input and returns the sum of all the numbers.

function sumArray(numbers) {
    // Initialize a variable to hold the sum
    let sum = 0;
    
    // Loop through each number in the array
    for (const number of numbers) {
      // Add the current number to the sum
      sum += number;
    }
    
    // Return the total sum
    return sum;
  }

console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, 20, 30]));    // 60
console.log(sumArray([-1, 0, 1]));      // 0
console.log(sumArray([]));           // 0