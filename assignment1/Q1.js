//An anagram of a string is another string that contains the same characters, only the order of characters can be different.

function isAnagram(str1, str2) {
    // Convert the strings to lowercase
    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();

    // Check if the lengths of the strings are equal
    if (lowerStr1.length !== lowerStr2.length) {
        return false;
    }

    // Sort the characters in the strings and compare them
    const sortedStr1 = lowerStr1.split('').sort().join('');
    const sortedStr2 = lowerStr2.split('').sort().join('');

     return sortedStr1 === sortedStr2;  //This means that both the value and the type must be the same for the comparison to return true.
}

console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false
console.log(isAnagram('abc', 'cab')); // true
console.log(isAnagram('abc', 'def')); // false