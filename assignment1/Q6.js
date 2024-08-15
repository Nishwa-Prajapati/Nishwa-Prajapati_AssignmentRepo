//Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.

function countVowels(str) {
    // Define a set of vowels
    const vowels = 'aeiouAEIOU';
    
    // Initialize a counter for vowels
    let count = 0;
    
    // Loop through each character in the string
    for (const char of str) {
      // Check if the character is a vowel
      if (vowels.includes(char)) {
        count++;
      }
    }
    
    // Return the total count of vowels
    return count;
  }

console.log(countVowels('Hello World')); // 3
console.log(countVowels('JavaScript'));  // 3
console.log(countVowels('ABC'));          // 1
console.log(countVowels('XYZ'));      //0