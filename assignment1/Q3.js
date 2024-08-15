function findLargestElement(numbers) {
    // Initialize a variable to hold the largest number
    let largest = numbers[0];
  
    // Loop through the array
    for (const number of numbers) {
      // If the current number is larger than the current largest, update largest
      if (number > largest) {
        largest = number;
      }
    }
  
    // Return the largest number
    return largest;
  }

const numbers = [32, 45, 99, 124, 2, 34];
console.log(findLargestElement(numbers)); //124