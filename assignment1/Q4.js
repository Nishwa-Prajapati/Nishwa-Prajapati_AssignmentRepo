//A palindrome is a string that reads the same backward as forward. Here’s a simple implementation of the isPalindrome function:

function isPalindrome(str) {
    // Convert the string to lowercase to make the check case-insensitive
    const lowerStr = str.toLowerCase();
  
    // Reverse the string
    const reversedStr = lowerStr.split('').reverse().join('');
  
    // Check if the reversed string is the same as the original string
    return lowerStr === reversedStr;
  }

console.log(isPalindrome('Racecar')); //true
console.log(isPalindrome('Hello')); //false