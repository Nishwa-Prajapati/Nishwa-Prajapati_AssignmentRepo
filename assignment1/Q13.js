//Write a function `countOccurrences` that takes a string and a character and returns the number of times the character appears in the string.

function countOccurrences(str, char) {
    // Initialize a counter for occurrences
    let count = 0;
    
    // Loop through each character in the string
    for (const ch of str) {
      // Increment the counter if the current character matches the target character
      if (ch === char) {
        count++;
      }
    }
    
    // Return the total count of occurrences
    return count;
}

console.log(countOccurrences('hello', 'l')); // 2
console.log(countOccurrences('nishwaa', 'a')); // 2
console.log(countOccurrences('Indus uni', 'u')); // 2
console.log(countOccurrences('assignmentsss', 's')); // 5