//Implement a function `removeDuplicates` that takes an array and returns a new array with duplicate values removed.

function removeDuplicates(arr) {
    const result = [];
    const seen = {};
    
    for (const item of arr) {
      if (!seen[item]) {
        result.push(item);
        seen[item] = true;
      }
    }
    
    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([10, 20, 10, 30, 20])); // [10, 20, 30]
console.log(removeDuplicates([1, 1, 1, 1, 1]));      // [1]
