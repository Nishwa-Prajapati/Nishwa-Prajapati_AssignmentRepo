// 2: What if I ask you that the input string should start with nishwaprajapati01 ? How would the code change?

// Import the 'crypto' module to use the SHA-256 hashing function
const crypto = require("crypto");

// Function to find a hash with the desired prefix
function findHashWithPrefix(prefix) {
  let input = 0; // Initialize the input number to 0

  // Loop until a hash with the desired prefix is found
  while (true) {
    // Combine a fixed string with the current input number
    let inputStr = "nishwaprajapati01" + input.toString();

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