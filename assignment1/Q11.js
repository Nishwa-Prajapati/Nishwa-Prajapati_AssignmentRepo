//Write a function `fibonacci` that takes a number `n` and returns the `n`th number in the Fibonacci sequence.

function fibonacci(n) {
    //if entered number is less than or equal to 1
    if (n <= 1) {
      return n;
    }
    
    // Initialize the first two Fibonacci numbers
    let a = 0;
    let b = 1;
    
    // Calculate Fibonacci numbers up to the nth number
    for (let i = 2; i <= n; i++) {
      let next = a + b; // Calculate the next Fibonacci number
      a = b; // Update a to the previous b
      b = next; // Update b to the next Fibonacci number
    }
    
    // Return the nth Fibonacci number
    return b;
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55