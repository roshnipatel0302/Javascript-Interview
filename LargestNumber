// Find the largest number in the array


//Assume teh first element is the largest number
//Traverse the array and compare each element with the current largest number
//update the largest number if a larger number is found

function findLargestNumber(arr) {
    let largest = arr[0]; // Assume the first element is the largest number
    for (let i = 1; i < arr.length; i++) { // Start from the second element
        if (arr[i] > largest) { // Compare each element with the current largest number
            largest = arr[i]; // Update the largest number if a larger number is found
        }
    }
    return largest; // Return the largest number found
}

console.log(findLargestNumber([3, 5, 7, 2, 8])); // Output: 8
console.log(findLargestNumber([-1, -5, -3, -2, -8])); // Output: -1
console.log(findLargestNumber([10, 20, 5, 30, 15])); // Output: 30