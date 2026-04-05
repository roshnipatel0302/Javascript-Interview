//Remove Duplicate from array
function removeDuplicates(arr) {
   return [...new Set(arr)]; // Create a new Set from the array to remove duplicates and convert it back to an array
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 1])); // Output: [1, 2, 3, 4]
console.log(removeDuplicates(['apple', 'banana', 'apple', 'orange'])); // Output: ['apple', 'banana', 'orange']
console.log(removeDuplicates([1, 1, 1, 1, 1])); // Output: [1]







//2 Method: Using a for loop and a new array to store unique elements
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) { // Check if the current element is not already in the unique array
            uniqueArr.push(arr[i]); // If it's not, add it to the unique array
        }       
    }
    return uniqueArr; // Return the array of unique elements
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 1])); // Output: [1, 2, 3, 4]
console.log(removeDuplicates(['apple', 'banana', 'apple', 'orange'])); // Output: ['apple', 'banana', 'orange']
console.log(removeDuplicates([1, 1, 1, 1, 1])); // Output: [1]





//Method 3: Using filter and indexOf
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index); // Filter the array to include only the first occurrence of each item
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 1])); // Output: [1, 2, 3, 4]
console.log(removeDuplicates(['apple', 'banana', 'apple', 'orange'])); // Output: ['apple', 'banana', 'orange']
console.log(removeDuplicates([1, 1, 1, 1, 1])); // Output: [1]


