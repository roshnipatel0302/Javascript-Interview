// find the factorial of a number

// The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
// For example, the factorial of 5 (denoted as 5!) is 5 * 4 * 3 * 2 * 1 = 120.

// Method 1: Using a for loop 
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

//how it will be calculated for factorial(5):
// result = 1 (initial value)
// i = 1: result = 1 * 1 = 1    
// i = 2: result = 1 * 2 = 2
// i = 3: result = 2 * 3 = 6
// i = 4: result = 6 * 4 = 24
// i = 5: result = 24 * 5 = 120
// Final result: 120

console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1



// Method 2: Using recursion
function factorial(n) {
    if (n < 0) {    
        return "Factorial is not defined for negative numbers";
    }   
    if (n === 0 || n === 1) {
        return 1; // The factorial of 0 and 1 is 1
    }
    return n * factorial(n - 1); // Recursive call with n-1
}   

//how it will be calculated for factorial(5):
// factorial(5) = 5 * factorial(4)
// factorial(4) = 4 * factorial(3)
// factorial(3) = 3 * factorial(2)
// factorial(2) = 2 * factorial(1)
// factorial(1) = 1 (base case reached)     
// Now we can substitute back:
// factorial(2) = 2 * 1 = 2
// factorial(3) = 3 * 2 = 6
// factorial(4) = 4 * 6 = 24
// factorial(5) = 5 * 24 = 120

console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
