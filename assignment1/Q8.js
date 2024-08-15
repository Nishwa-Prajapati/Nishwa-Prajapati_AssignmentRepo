//Implement a function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers) {
    // Create a new array with only even numbers
    const evenNumbers = [];
    
    // Loop through each number in the input array
    for (const number of numbers) {
      // If the number is even, add it to the new array
      if (number % 2 === 0) {
        evenNumbers.push(number);
      }
    }
    
    // Return the array with only even numbers
    return evenNumbers;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // [2,4]
console.log(filterEvenNumbers([10, 15, 20, 25])); // [10,20]
console.log(filterEvenNumbers([1,55,77,99])); // []
console.log(filterEvenNumbers([24,46,78,0,1])); // [24,46,78,0]
console.log(filterEvenNumbers([])); // []