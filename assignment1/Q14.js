//Create a function `findCommonElements` that takes two arrays and returns a new array containing the elements that are present in both arrays.

function findCommonElements(arr1, arr2) {
    // Create an array to store common elements
    const commonElements = [];
    
    // Loop through each element in the first array
    for (const element of arr1) {
      // Check if the current element is in the second array
      if (arr2.includes(element)) {
        // Add the element to the commonElements array if not already present
        if (!commonElements.includes(element)) {
          commonElements.push(element);
        }
      }
    }
    
    // Return the array with common elements
    return commonElements;
  }

console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
console.log(findCommonElements([10, 20, 30], [60, 40, 50])); // []
console.log(findCommonElements(['a', 'b', 'c'], ['x', 'b', 'a'])); // ['a', 'b']
console.log(findCommonElements([], [1, 2, 3])); // []