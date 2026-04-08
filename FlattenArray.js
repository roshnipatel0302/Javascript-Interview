// Flatten a nested array. You must account for varying levels of nesting.  
function flattenArray(arr) {
    let flattened = [];
    for (let i = 0; i < arr.length; i++) { // Loop through each element in the input array
        if (Array.isArray(arr[i])) { // Check if the current element is an array
            flattened = flattened.concat(flattenArray(arr[i])); // If it is an array, recursively flatten it and concatenate the result
        } else {
            flattened.push(arr[i]); // If it is not an array, add it to the flattened result
        }
    }
    return flattened; // Return the final flattened array
}

//

// how it will be calculated for flattenArray([1, [2, [3, 4], 5], 6]):
// Initialize flattened = []
// i = 0: arr[0] is 1, not an array, flattened becomes [1]
// i = 1: arr[1] is [2, [3, 4], 5], which is an array, call flattenArray([2, [3, 4], 5])
//   Initialize flattened = []
//   i = 0: arr[0] is 2, not an array, flattened becomes [2]
//   i = 1: arr[1] is [3, 4], which is an array, call flattenArray([3, 4])
//     Initialize flattened = []
//     i = 0: arr[0] is 3, not an array, flattened becomes [3]
//     i = 1: arr[1] is 4, not an array, flattened becomes [3, 4]
//     Return [3, 4] to the previous call
//   Flattened becomes [2].concat([3, 4]) = [2, 3, 4]
//   i = 2: arr[2] is 5, not an array, flattened becomes [2, 3, 4, 5]
//   Return [2, 3, 4, 5] to the previous call
// Flattened becomes [1].concat([2, 3, 4, 5]) = [1, 2, 3, 4, 5]
// i = 2: arr[2] is 6, not an array, flattened becomes [1, 2, 3, 4, 5, 6]
// Return [1, 2, 3, 4, 5, 6] as the final flattened array
console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]