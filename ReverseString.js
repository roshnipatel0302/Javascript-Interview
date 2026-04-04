//Asked by Google
//Given a string, reverse it.


//Method 1: Using built-in functions
function reverseString(s) {
    return s.split('').reverse().join('');
}
reverseString("May be I am your crush"); // Output: "!dlroW ,olleH"
console.log(reverseString("May be I am your crush")); // Output: "!dlroW ,olleH"

//Method 2: Using a for loop
function reverseString(s) {
    let reversed = '';
    for (let i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }
    return reversed;
}

reverseString("GOOGLY"); // Output: "!dlroW ,olleH"
console.log(reverseString("GOOGLY")); // Output: "!dlroW ,olleH"

//Method 3: Using recursion
function reverseString(s) {
    if (s === "") {
        return "";
    }
    return reverseString(s.substr(1)) + s.charAt(0);
}   
reverseString("I am Genz"); // Output: "!dlroW ,olleH"

//let me explain the recursive method a bit more. The function takes a string `s` as input. If the string is empty, it returns an empty string. Otherwise, it calls itself with the substring of `s` starting from the second character (i.e., `s.substr(1)`) and appends the first character of `s` (i.e., `s.charAt(0)`) to the end of the result. This effectively builds the reversed string as the recursive calls unwind.


console.log(reverseString("I am Genz")); // Output: "!dlroW ,olleH"


