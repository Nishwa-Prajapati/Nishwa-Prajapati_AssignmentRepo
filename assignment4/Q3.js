// 3: What if I ask you to find a nonce for the following input -
// Dev => Karan | Rs 100
// Karan => Darsh | Rs 10

// Import the 'crypto' module for creating hashes
const crypto = require('crypto');

// Function to find a hash starting with "00000"
function DesiredHash(transection) {
    let number = 0; // Initialize a number to modify for finding the desired hash

    // Convert the transactions array to a single string format
    let transString = "";
    for (let i = 0; i < transection.length; i++) {
        // Format: sender + "To" + recipient + "OF" + amount
        transString += transection[i][0] + "To" + transection[i][1] + "OF" + transection[i][2];

        // Add "And" between transactions, except after the last one
        if (i + 1 != transection.length) {
            transString += "And";
        }
    }

    // Generate the initial hash using SHA-256
    let hash = crypto.createHash('sha256').update(number + transString).digest('hex');

    // Check if the hash starts with "00000"
    let condition = hash.startsWith("00000");

    // Loop to find the correct hash
    while (!condition) {
        number += 1; // Increment the number
        // Recalculate the hash with the updated number and transaction string
        hash = crypto.createHash('sha256').update(number + transString).digest('hex');
        condition = hash.startsWith("00000"); // Check the condition again
    }

    console.log(hash); // Output the desired hash
}

// Example transactions array
let transections = [["Dev", "Karan", 100], ["Karan", "Darsh", 10]];

// Call the function with the example transactions
DesiredHash(transections);