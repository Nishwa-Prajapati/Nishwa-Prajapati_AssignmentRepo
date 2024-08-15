//Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.

function calculateTime(n) {
    // Record the start time
    const startTime = performance.now();  //the performance.now() method to get high-resolution timestamps before and after the computation. This approach allows you to calculate the duration in milliseconds with high precision, which you can then convert to seconds.
  
    // Calculate the sum from 1 to n
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
    // Record the end time
    const endTime = performance.now();
  
    // Calculate the time taken in seconds
    const timeTaken = (endTime - startTime) / 1000;
  
    // Return the time taken
    return timeTaken;
  }

console.log(calculateTime(10000)); //0.0027966250000000057