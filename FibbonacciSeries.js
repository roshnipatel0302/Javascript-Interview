//Find filterFibonacci series up to n terms

// The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. 
// For example, the first 10 terms of the Fibonacci series are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.    


// Method 1: Using a for loop
function fibonacci(n) {
    let fibSeries = []; // Initialize an empty array to store the Fibonacci series
    for (let i = 0; i < n; i++) { // Loop from 0 to n-1
        if (i === 0) {
            fibSeries.push(0); // The first term is 0
        } else if (i === 1) {
            fibSeries.push(1); // The second term is 1
        } else {
            // Each subsequent term is the sum of the two preceding terms
            fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
        }
    }
    return fibSeries; // Return the Fibonacci series up to n terms
}

// how it will be calculated for fibonacci(10):
// i = 0: fibSeries = [0]
// i = 1: fibSeries = [0, 1]    
// i = 2: fibSeries = [0, 1, 1] (1 + 0)
// i = 3: fibSeries = [0, 1, 1, 2] (1 + 1)
// i = 4: fibSeries = [0, 1, 1, 2, 3] (2 + 1)
// i = 5: fibSeries = [0, 1, 1, 2, 3, 5] (3 + 2)
// i = 6: fibSeries = [0, 1, 1, 2, 3, 5, 8] (5 + 3)
// i = 7: fibSeries = [0, 1, 1, 2, 3, 5, 8, 13] (8 + 5)
// i = 8: fibSeries = [0, 1, 1, 2, 3, 5, 8, 13, 21] (13 + 8)
// i = 9: fibSeries = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] (21 + 13)
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// Method 2: Using recursion
function fibonacci(n) {
    if (n <= 0) {   
        return []; // Return an empty array for non-positive n
    }       

    if (n === 1) {
        return [0]; // The first term is 0
    }
    if (n === 2) {
        return [0, 1]; // The first two terms are 0 and 1
    }
    // Get the Fibonacci series up to n-1 terms and then add the next term  
    const fibSeries = fibonacci(n - 1); // Recursive call to get the series up to n-1 terms
    fibSeries.push(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]); // Add the next term which is the sum of the last two terms in the series
    return fibSeries; // Return the Fibonacci series up to n terms
}   

//how it will be calculated for fibonacci(10):
// fibonacci(10) calls fibonacci(9)
// fibonacci(9) calls fibonacci(8)  
// fibonacci(8) calls fibonacci(7)
// fibonacci(7) calls fibonacci(6)
// fibonacci(6) calls fibonacci(5)
// fibonacci(5) calls fibonacci(4)
// fibonacci(4) calls fibonacci(3)
// fibonacci(3) calls fibonacci(2)
// fibonacci(2) returns [0, 1] (base case reached)
// Now we can substitute back:
// fibonacci(3) = [0, 1] + (1 + 0) = [0, 1, 1]
// fibonacci(4) = [0, 1, 1] + (1 + 1) = [0, 1, 1, 2]
// fibonacci(5) = [0, 1, 1, 2] + (2 + 1) = [0, 1, 1, 2, 3]
// fibonacci(6) = [0, 1, 1, 2, 3] + (3 + 2) = [0, 1, 1, 2, 3, 5]
// fibonacci(7) = [0, 1, 1, 2, 3, 5] + (5 + 3) = [0, 1, 1, 2, 3, 5, 8]
// fibonacci(8) = [0, 1, 1, 2, 3, 5, 8] + (8 + 5) = [0, 1, 1, 2, 3, 5, 8, 13]
// fibonacci(9) = [0, 1, 1, 2, 3, 5, 8, 13] + (13 + 8) = [0, 1, 1, 2, 3, 5, 8, 13, 21]
// fibonacci(10) = [0, 1, 1, 2, 3, 5, 8, 13, 21] + (21 + 13) = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]