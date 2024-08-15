//Create a function `reverseString` that takes a string and returns the string reversed.

function reverseString(str) {
    // Convert the string to an array of characters, reverse the array, and then join it back into a string
    return str.split('').reverse().join('');
  }

console.log(reverseString('hello')); // 'olleh'
console.log(reverseString('world')); // 'dlrow'
console.log(reverseString('JavaScript')); // 'tpircSavaJ'
console.log(reverseString('!@#')); // '#@!'