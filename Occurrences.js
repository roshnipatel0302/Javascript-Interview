// Count occurrences of a value in an array
function countOccurrences(arr, value) {
    let count = 0; // Initialize a counter to keep track of occurrences
    for (let i = 0; i < arr.length; i++) { // Loop through each element in the array
        if (arr[i] === value) { // If the current element matches the value
            count++; // Increment the counter
        }
    }
    return count; // Return the total count of occurrences
}
// how it will be calculated for countOccurrences([1, 2, 3, 4, 2, 5], 2):
// Initialize count = 0
// i = 0: arr[0] is 1, does not match 2, count remains 0
// i = 1: arr[1] is 2, matches 2, count becomes 1
// i = 2: arr[2] is 3, does not match 2, count remains 1
// i = 3: arr[3] is 4, does not match 2, count remains 1
// i = 4: arr[4] is 2, matches 2, count becomes 2
// i = 5: arr[5] is 5, does not match 2, count remains 2
// Return count = 2

// Method 2: Using the filter method
function countOccurrences(arr, value) {
    return arr.filter(function(element) { // Use the filter method to create a new array with elements that match the value
        return element === value; // Return true for elements that match the value
    }).length; // Return the length of the filtered array, which represents the count of occurrences
}

// how it will be calculated for countOccurrences([1, 2, 3, 4, 2, 5], 2):
// The filter method iterates through the array and creates a new array with elements that match 2:
// For arr[0] = 1, does not match 2, not included in the new array
// For arr[1] = 2, matches 2, included in the new array
// For arr[2] = 3, does not match 2, not included in the new array
// For arr[3] = 4, does not match 2, not included in the new array
// For arr[4] = 2, matches 2, included in the new array
// For arr[5] = 5, does not match 2, not included in the new array
// The filtered array is [2, 2], which has a length of 2
// Return 2 as the count of occurrences
console.log(countOccurrences([1, 2, 3, 4, 2, 5], 2)); // Output: 2