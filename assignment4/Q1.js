// 1: What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?

// Import the 'crypto' module to use the SHA-256 hashing function
const crypto = require("crypto");

// Function to find a hash with the desired prefix
function findHashWithPrefix(prefix) {
  let input = 0; // Initialize the input number to 0

  // Loop until a hash with the desired prefix is found
  while (true) {
    
    let inputStr = input.toString();

    // Generate a SHA-256 hash of the combined string
    let hash = crypto.createHash('sha256').update(inputStr).digest('hex');

    // Check if the hash starts with the desired prefix
    if (hash.startsWith(prefix)) {
      // Return the input number and the hash that meets the condition
      return { input: input, hash: hash };
    }
    input++; // Increment the input number to try again
  }
}

// Call the function to find a hash starting with "00000"
const res = findHashWithPrefix("00000");

// Print the result
console.log(`Input: ${res.input}`);
console.log(`Hash: ${res.hash}`);