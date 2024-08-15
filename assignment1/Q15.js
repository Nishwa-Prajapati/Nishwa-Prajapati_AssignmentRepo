//Implement a function `sortStrings` that takes an array of strings and returns the array sorted in alphabetical order.

function sortStrings(arr) {
    // Use the sort method to sort the array in alphabetical order
    return arr.sort();
}

console.log(sortStrings(['nishwa', 'indus', 'IU2141230218'])); // ['IU2141230218', 'indus', 'nishwa']
console.log(sortStrings(['dog', 'cat', 'elephant']));   // ['cat', 'dog', 'elephant']
console.log(sortStrings(['orange', 'apple', 'banana'])); // 'apple', 'banana', 'orange']
console.log(sortStrings([]));                            // []