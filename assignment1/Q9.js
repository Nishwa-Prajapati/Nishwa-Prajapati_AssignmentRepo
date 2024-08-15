//Write a function `findSmallestElement` that takes an array of numbers and returns the smallest element.

function findSmallestElement(numbers) {
    // Initialize the smallest number with the first element of the array
    let smallest = numbers[0];
    
    // Loop through each number in the array
    for (const number of numbers) {
      // If the current number is smaller than the smallest, update smallest
      if (number < smallest) {
        smallest = number;
      }
    }
    
    // Return the smallest number
    return smallest;
}

console.log(findSmallestElement([5, 2, 9, 1, 7])); // 1
console.log(findSmallestElement([10, 20, -5]));    // -5
console.log(findSmallestElement([-1, -15, 0, 36])); // -15
